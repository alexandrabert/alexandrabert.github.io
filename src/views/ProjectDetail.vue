<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue';
import { useRoute } from 'vue-router';
import { projects } from '../data/projects';
import { t, ui } from '../i18n';
import NavBar from '../components/NavBar.vue';
import MediaItem from '../components/MediaItem.vue';

const route = useRoute();
const projectIndex = computed(() => projects.findIndex(p => p.id === route.params.id));
const project = computed(() => projects[projectIndex.value]);
const nextProject = computed(() => projects[(projectIndex.value + 1) % projects.length]);

const isImage = (src) => /\.(png|jpe?g|webp|gif|svg)$/i.test(src);
const paragraphs = (text) => t(text).split(/\n\s*\n/);
const number = (i) => String(i + 1).padStart(2, '0');

// Un seul média image ou PDF : texte et média côte à côte.
// Sinon : texte, puis les médias en mosaïque.
const isSideBySide = (chapter) =>
  chapter.media?.length === 1 && !/\.mp4$|youtu/i.test(chapter.media[0].src);
const mosaicColumns = (chapter) => {
  const n = chapter.media?.length ?? 0;
  if (n >= 4) return 'sm:columns-2 lg:columns-3';
  if (n >= 2) return 'sm:columns-2';
  return '';
};

// ---- Visionneuse plein écran (toutes les images de la page) ----
const images = computed(() => {
  if (!project.value) return [];
  const list = [];
  const seen = new Set();
  const add = (src, caption) => {
    if (!isImage(src) || seen.has(src)) return;
    seen.add(src);
    list.push({ src, caption });
  };
  add(project.value['princ-visual'], project.value.title);
  for (const chapter of project.value.chapters ?? []) {
    for (const m of chapter.media ?? []) add(m.src, m.caption);
  }
  return list;
});
const viewerIndex = ref(null);
const current = computed(() => (viewerIndex.value === null ? null : images.value[viewerIndex.value]));

const openViewer = (src) => {
  const i = images.value.findIndex(img => img.src === src);
  if (i !== -1) viewerIndex.value = i;
};
const closeViewer = () => { viewerIndex.value = null; };
const step = (delta) => {
  const n = images.value.length;
  viewerIndex.value = (viewerIndex.value + delta + n) % n;
};
const onKey = (e) => {
  if (viewerIndex.value === null) return;
  if (e.key === 'Escape') closeViewer();
  else if (e.key === 'ArrowRight') step(1);
  else if (e.key === 'ArrowLeft') step(-1);
};

onMounted(() => window.addEventListener('keydown', onKey));
onBeforeUnmount(() => window.removeEventListener('keydown', onKey));
watch(() => route.params.id, () => { viewerIndex.value = null; });
watch(viewerIndex, (v) => { document.body.style.overflow = v === null ? '' : 'hidden'; });
</script>

<template>
  <div v-if="project" class="min-h-screen font-sans antialiased text-slate-800 pb-24">
    <NavBar />

    <article class="max-w-5xl mx-auto px-5 sm:px-6 pt-12">
      <!-- EN-TÊTE -->
      <header class="mb-10">
        <div class="flex items-center gap-4 mb-5">
          <div class="w-14 h-14 p-2.5 shrink-0 bg-slate-100 rounded-2xl shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]">
            <img :src="'/' + project.logo" alt="" class="w-full h-full object-contain" />
          </div>
          <p class="text-sm md:text-base font-bold text-blue-600">{{ t(project.projetType) }}</p>
        </div>

        <h1 class="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-5">{{ t(project.title) }}</h1>
        <p class="text-lg md:text-xl text-slate-700 leading-relaxed max-w-3xl">{{ t(project.fullDescription) }}</p>

        <!-- Infos : dates, rôle, technos -->
        <div class="mt-6 flex flex-wrap items-center gap-2.5">
          <span v-if="project.dates" class="px-3 py-1.5 rounded-xl bg-slate-200/80 text-xs font-black uppercase tracking-widest text-slate-600">{{ project.dates }}</span>
          <span v-if="project.badge" class="px-3 py-1.5 rounded-xl bg-blue-100 text-blue-700 text-xs font-black uppercase tracking-wider">{{ t(project.badge) }}</span>
          <span
            v-for="tech in project.technos"
            :key="tech.name"
            class="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 shadow-[3px_3px_6px_#bebebe,-3px_-3px_6px_#ffffff] text-xs font-bold text-slate-600"
          >
            <img :src="'/icons/' + tech.icon" class="w-4 h-4" alt="" />
            {{ tech.name }}
          </span>
        </div>

        <!-- Code -->
        <a
          v-if="project.codeUrl"
          :href="project.codeUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-blue-600 text-white font-bold text-sm shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] hover:bg-blue-700 transition-colors"
        >
          {{ t(ui.viewCode) }} ↗
        </a>
        <p
          v-else-if="project.codeNote"
          class="mt-6 inline-block px-5 py-3 rounded-2xl bg-slate-100 text-slate-700 font-semibold shadow-[inset_4px_4px_8px_#d1d5db,inset_-4px_-4px_8px_#ffffff]"
        >
          🔒 {{ t(project.codeNote) }}
        </p>
      </header>

      <!-- COUVERTURE -->
      <button
        v-if="project['princ-visual']"
        type="button"
        class="group block w-full mb-12 overflow-hidden rounded-[2rem] bg-slate-100 shadow-[16px_16px_40px_#bebebe,-12px_-12px_32px_#ffffff] cursor-zoom-in"
        :aria-label="t(ui.enlarge)"
        @click="openViewer(project['princ-visual'])"
      >
        <img
          :src="'/' + project.folder + project['princ-visual']"
          :alt="t(project.title)"
          class="w-full max-h-[560px] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
        />
      </button>

      <!-- EN BREF -->
      <section v-if="project.highlights?.length" class="mb-12 bg-slate-100 p-7 md:p-9 rounded-[2rem] shadow-[inset_6px_6px_12px_#d1d5db,inset_-6px_-6px_12px_#ffffff]">
        <h2 class="text-xs font-black uppercase tracking-widest text-blue-600 mb-4">{{ t(ui.inBrief) }}</h2>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3">
          <li v-for="(item, k) in project.highlights" :key="k" class="flex gap-3 text-slate-700 font-medium text-base md:text-lg">
            <span class="mt-2.5 w-2 h-2 shrink-0 rounded-full bg-blue-500"></span>
            <span>{{ t(item) }}</span>
          </li>
        </ul>
      </section>

      <!-- CHAPITRES -->
      <div class="space-y-10">
        <section
          v-for="(chapter, i) in project.chapters"
          :key="i"
          class="bg-slate-100 rounded-[2rem] p-6 md:p-10 shadow-[12px_12px_30px_#bebebe,-12px_-12px_30px_#ffffff]"
        >
          <div
            :class="isSideBySide(chapter)
              ? 'grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center'
              : ''"
          >
            <!-- Texte -->
            <div :class="isSideBySide(chapter) && i % 2 === 1 ? 'md:order-2' : ''">
              <div class="flex flex-wrap items-center gap-3 mb-3">
                <span class="text-blue-500 font-black text-sm tracking-widest">{{ number(i) }}</span>
                <span
                  v-if="chapter.owner"
                  class="px-2.5 py-1 rounded-lg text-[11px] font-black uppercase tracking-wider"
                  :class="chapter.owner === 'me' ? 'bg-blue-100 text-blue-700' : 'bg-slate-200 text-slate-600'"
                >{{ chapter.owner === 'me' ? t(ui.myWork) : t(ui.teamWork) }}</span>
              </div>
              <h2 class="text-2xl md:text-3xl font-black text-slate-900 mb-4">{{ t(chapter.title) }}</h2>
              <p
                v-for="(para, k) in paragraphs(chapter.body)"
                :key="k"
                class="text-slate-700 text-base md:text-lg leading-relaxed max-w-prose mb-4 last:mb-0"
              >{{ para }}</p>
            </div>

            <!-- Média unique, à côté du texte -->
            <div v-if="isSideBySide(chapter)" :class="i % 2 === 1 ? 'md:order-1' : ''">
              <MediaItem :media="chapter.media[0]" :folder="project.folder" tall @open="openViewer" />
            </div>
          </div>

          <!-- Plusieurs médias : mosaïque sous le texte -->
          <div
            v-if="chapter.media?.length && !isSideBySide(chapter)"
            class="mt-8 gap-5"
            :class="mosaicColumns(chapter)"
          >
            <MediaItem
              v-for="(m, k) in chapter.media"
              :key="k"
              :media="m"
              :folder="project.folder"
              @open="openViewer"
            />
          </div>
        </section>
      </div>

      <!-- PROJET SUIVANT -->
      <router-link
        v-if="nextProject && nextProject.id !== project.id"
        :to="'/project/' + nextProject.id"
        class="group mt-14 flex items-center justify-between gap-6 p-6 md:p-8 rounded-[2rem] bg-slate-100 shadow-[12px_12px_30px_#bebebe,-12px_-12px_30px_#ffffff]"
      >
        <div>
          <span class="block text-xs font-black uppercase tracking-widest text-slate-500 mb-1">{{ t(ui.nextProject) }}</span>
          <span class="text-2xl md:text-3xl font-black text-slate-900 group-hover:text-blue-600 transition-colors">{{ t(nextProject.title) }}</span>
        </div>
        <span class="text-3xl text-blue-600 transition-transform group-hover:translate-x-1">→</span>
      </router-link>
    </article>

    <!-- VISIONNEUSE PLEIN ÉCRAN -->
    <div
      v-if="current"
      class="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-slate-950/90 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      @click.self="closeViewer"
    >
      <button
        type="button"
        class="absolute right-4 top-4 rounded-full bg-white/90 w-10 h-10 text-lg font-bold text-slate-700 shadow-lg"
        :aria-label="t(ui.close)"
        @click="closeViewer"
      >✕</button>

      <img :src="'/' + project.folder + current.src" :alt="t(current.caption)" class="max-h-[82vh] max-w-full rounded-xl object-contain bg-white" />
      <p class="mt-4 text-sm text-white/80 text-center">
        {{ t(current.caption) }}
        <span v-if="images.length > 1" class="ml-2 text-white/50">{{ viewerIndex + 1 }} / {{ images.length }}</span>
      </p>

      <template v-if="images.length > 1">
        <button
          type="button"
          class="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 rounded-full bg-white/90 w-11 h-11 text-xl font-bold text-slate-700 shadow-lg"
          :aria-label="t(ui.previous)"
          @click="step(-1)"
        >‹</button>
        <button
          type="button"
          class="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 rounded-full bg-white/90 w-11 h-11 text-xl font-bold text-slate-700 shadow-lg"
          :aria-label="t(ui.next)"
          @click="step(1)"
        >›</button>
      </template>
    </div>
  </div>

  <!-- PROJET INTROUVABLE -->
  <div v-else class="min-h-screen font-sans antialiased text-slate-800 flex items-center justify-center px-6">
    <div class="bg-slate-100 text-center p-10 rounded-[40px] shadow-[20px_20px_60px_#bebebe,-10px_-10px_40px_#ffffff] max-w-lg">
      <h1 class="text-4xl font-black text-slate-900 mb-4">{{ t(ui.notFoundTitle) }}</h1>
      <p class="text-slate-500 text-lg mb-8">{{ t(ui.notFoundText) }}</p>
      <router-link to="/" class="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-slate-100 font-bold text-slate-600 hover:text-blue-600 shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff]">
        ← {{ t(ui.seeProjects) }}
      </router-link>
    </div>
  </div>
</template>
