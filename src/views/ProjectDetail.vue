<script setup>
import { ref, onMounted, watch, computed } from 'vue';
import { useRoute } from 'vue-router';
import { projects } from '../data/projects';
import { ChevronLeft, Rocket, Folder, ChevronDown, FileText } from 'lucide-vue-next';

const route = useRoute();
const project = computed(() => projects.find(p => p.id === route.params.id));
const openFolders = ref(new Set());
const selectedMedia = ref(null);

const toggleFolder = (index) => {
  if (openFolders.value.has(index)) openFolders.value.delete(index);
  else openFolders.value.add(index);
};

const isImage = (filename) => /\.(png|jpe?g)$/i.test(filename);
const isVideo = (filename) => /\.mp4$/i.test(filename);
const isYouTube = (filename) => /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\//i.test(filename);
const isPDF = (filename) => filename.toLowerCase().endsWith('.pdf');

const getYouTubeEmbedUrl = (url) => {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtube\.com\/embed\/|youtu\.be\/)([\w-]{11})/i);
  return match ? `https://www.youtube.com/embed/${match[1]}` : null;
};

const openMedia = (filename) => {
  selectedMedia.value = filename;
};

const closeMedia = () => {
  selectedMedia.value = null;
};

const initializeOpenFolders = () => {
  const steps = project.value?.planAction ?? [];
  openFolders.value = new Set(
    steps
      .map((_, index) => index)
      .filter((index) => Array.isArray(steps[index]?.gallery) && steps[index].gallery.length > 0)
  );
};

onMounted(() => {
  initializeOpenFolders();
  window.scrollTo(0, 0);
});

watch(
  () => route.params.id,
  () => {
    initializeOpenFolders();
    selectedMedia.value = null;
    window.scrollTo(0, 0);
  }
);
</script>

<template>
  <div v-if="project" class="min-h-screen bg-slate-100 font-sans antialiased text-slate-800">
    
    <!-- NAV NÉOMORPHIQUE -->
    <nav class="sticky top-6 z-50 max-w-4xl mx-auto px-4">
      <div class="bg-slate-100/80 backdrop-blur-lg px-6 py-4 rounded-3xl shadow-[10px_10px_20px_#bebebe,-10px_-10px_20px_#ffffff] flex justify-between items-center border border-white/20">
        <router-link to="/" class="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors font-bold text-sm uppercase tracking-tighter">
          <ChevronLeft class="w-5 h-5" />
          Retour
        </router-link>
        <span class="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">{{ project.title }}</span>
      </div>
    </nav>

    <article class="max-w-4xl mx-auto px-6 py-20">
      <!-- HEADER -->
      <header class="mb-10">
        <h1 class="text-4xl md:text-7xl font-black mb-10 tracking-tighter text-slate-900 leading-tight">
          {{ project.title }}
        </h1>
        
        <div class="flex flex-wrap gap-4">
          <div v-for="tech in project.technos" :key="tech.name" 
               class="flex items-center gap-3 bg-slate-100 p-3 rounded-2xl shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff]">
            <img :src="'/icons/' + tech.icon" class="w-6 h-6" :alt="tech.name" />
            <span class="font-bold text-slate-600 text-xs uppercase tracking-widest">{{ tech.name }}</span>
          </div>
        </div>
      </header>

      <!-- DESCRIPTION AVEC EFFET ENFONCÉ -->
      <section class="mb-10 p-2 rounded-[2.5rem] ">
        <p class="text-m text-slate-400 mt-4 italic">
          {{ project.projetType }}
        </p>
        <p class="text-xl md:text-xl text-slate-600 leading-relaxed font-medium">
          {{ project.fullDescription }}
        </p>
        
      </section>

      <!-- TIMELINE -->
      <section class="mt-22">
        <div class="flex items-center gap-6 mb-16">
          <div class="w-16 h-16 flex items-center justify-center bg-slate-100 rounded-2xl shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff]">
            <Rocket class="w-8 h-8 text-blue-500" />
          </div>
          <h2 class="text-4xl font-black tracking-tight">Plan d'action</h2>
        </div>

        <div class="space-y-16">
          <div v-for="(step, i) in project.planAction" :key="i" class="relative pl-12">
            <!-- Ligne de timeline (enfoncée) -->
            <div class="absolute left-0 top-0 bottom-0 w-2 bg-slate-100 shadow-[inset_2px_2px_4px_#bebebe,inset_-2px_-2px_4px_#ffffff] rounded-full"></div>
            
            <div class="mb-8">
              <span class="text-blue-500 font-black text-xs uppercase tracking-widest">Étape 0{{ i + 1 }}</span>
              <h3 class="text-2xl font-bold text-slate-800 mt-2">{{ step.step }}</h3>
              <p class="text-slate-500 mt-4 text-lg leading-relaxed">{{ step.desc }}</p>
            </div>

            <!-- BOUTON DOSSIER NÉOMORPHIQUE -->
            <div v-if="step.gallery && step.gallery.length > 0">
              <button 
                @click="toggleFolder(i)"
                class="flex items-center gap-4 px-6 py-4 rounded-2xl bg-slate-100 shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] active:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] transition-all group"
              >
                <Folder class="w-5 h-5 text-blue-500 group-hover:fill-blue-200 transition-all" />
                <span class="font-bold text-sm text-slate-700 uppercase tracking-tight">
                  {{ openFolders.has(i) ? 'Réduire' : `Documents (${step.gallery.length})` }}
                </span>
                <ChevronDown class="w-4 h-4 transition-transform" :class="{ 'rotate-180': openFolders.has(i) }" />
              </button>

              <transition name="fade-slide">
                <div v-if="openFolders.has(i)" class="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 p-6 rounded-[2rem] bg-slate-100 shadow-[inset_6px_6px_12px_#d1d5db,inset_-6px_-6px_12px_#ffffff]">
                  
                  <div v-for="(file, fileIdx) in step.gallery" :key="fileIdx" 
                      class="mb-6 break-inside-avoid rounded-2xl p-2 bg-slate-100 shadow-[6px_6px_12px_#d1d5db,-6px_-6px_12px_#ffffff] transition-all duration-300 hover:shadow-[2px_2px_5px_#d1d5db,-2px_-2px_5px_#ffffff]">
                    
                    <!-- CAS : IMAGE -->
                    <button v-if="isImage(file)" type="button" class="block w-full text-left" @click="openMedia(file)">
                      <div class="overflow-hidden rounded-xl bg-slate-200/80">
                        <img 
                          :src="'/' + project.folder + file" 
                          class="block w-full h-auto max-h-[420px] object-contain mx-auto rounded-xl cursor-zoom-in transition-transform duration-700 hover:scale-105" 
                          alt="Document"
                          loading="lazy"
                        />
                      </div>
                    </button>

                    <!-- CAS : YOUTUBE -->
                    <div v-else-if="isYouTube(file)" class="aspect-video rounded-xl overflow-hidden bg-slate-950">
                      <iframe
                        v-if="getYouTubeEmbedUrl(file)"
                        :src="getYouTubeEmbedUrl(file)"
                        class="h-full w-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                        title="YouTube video"
                      />
                    </div>

                    <!-- CAS : VIDÉO -->
                    <div v-else-if="isVideo(file)" class="aspect-video rounded-xl overflow-hidden bg-slate-950">
                      <video controls class="w-full h-full object-contain">
                        <source :src="'/' + project.folder + file" type="video/mp4" />
                        Votre navigateur ne prend pas en charge les vidéos HTML5.
                      </video>
                    </div>

                    <!-- CAS : PDF -->
                    <div v-else class="rounded-xl bg-slate-50 p-3">
                      <div class="overflow-hidden rounded-xl border border-slate-200 bg-white">
                        <iframe
                          :src="'/' + project.folder + file"
                          class="h-72 w-full"
                          title="Prévisualisation PDF"
                          loading="lazy"
                        />
                      </div>
                      <div class="mt-3 flex items-center justify-between gap-2">
                        <span class="truncate text-[10px] font-bold uppercase tracking-widest text-slate-400">
                          {{ file }}
                        </span>
                        <a 
                          :href="'/' + project.folder + file" 
                          target="_blank"
                          rel="noopener noreferrer"
                          class="shrink-0 rounded-lg bg-slate-100 px-3 py-2 text-[11px] font-black uppercase tracking-tighter text-slate-600 shadow-[3px_3px_6px_#d1d5db,-3px_-3px_6px_#ffffff] transition-all hover:text-blue-600 active:shadow-[inset_2px_2px_4px_#d1d5db]"
                        >
                          Ouvrir
                        </a>
                      </div>
                    </div>

                  </div>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </section>
    </article>

    <div v-if="selectedMedia" class="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-sm" @click.self="closeMedia">
      <div class="relative w-full max-w-6xl">
        <button
          type="button"
          class="absolute right-2 top-2 z-10 rounded-full bg-white/90 px-3 py-2 text-sm font-bold text-slate-700 shadow-lg"
          @click="closeMedia"
        >
          ✕
        </button>
        <div class="overflow-hidden rounded-[2rem] bg-slate-900/80 p-2 shadow-2xl">
          <img
            v-if="isImage(selectedMedia)"
            :src="'/' + project.folder + selectedMedia"
            class="max-h-[85vh] w-full object-contain"
            :alt="selectedMedia"
          />
          <video
            v-else-if="isVideo(selectedMedia)"
            controls
            preload="metadata"
            class="max-h-[85vh] w-full object-contain bg-black"
          >
            <source :src="'/' + project.folder + selectedMedia" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fade-slide-enter-active, .fade-slide-leave-active { transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1); }
.fade-slide-enter-from, .fade-slide-leave-to { opacity: 0; transform: translateY(-10px); }
</style>