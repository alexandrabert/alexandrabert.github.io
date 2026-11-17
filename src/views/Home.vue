<script setup>
import { computed, onMounted, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { projects } from '../data/projects'
import { experiences, leadership } from '../data/experience'
import NavBar from '../components/NavBar.vue'
import { profile } from '../data/profile'
import { t } from '../i18n'

const sections = computed(() => ['dev', 'design'].map((key) => ({
  key,
  ...profile.sections[key],
  projects: projects.filter((p) => p.category === key)
})))

const route = useRoute()
const router = useRouter()

// Arrivée depuis le menu d'une page projet
onMounted(async () => {
  const section = route.query.section
  if (typeof section === 'string') {
    // Le défilement est fait par le routeur ; on retire ensuite le paramètre de l'URL
    await nextTick()
    setTimeout(() => router.replace({ path: '/', query: {} }), 1500)
  }
})

const expTitle = { en: 'Experience', fr: 'Expériences' }
const expSubtitle = { en: 'Internships and jobs, most recent first', fr: 'Stages et emplois, du plus récent au plus ancien' }
const kindLabel = { tech: { en: 'Tech', fr: 'Tech' }, comm: { en: 'Communication', fr: 'Communication' } }
const leadershipLabel = { en: 'Student leadership', fr: 'Engagement associatif' }

const codeLabel = { en: 'Source code available', fr: 'Code source disponible' }
const privateLabel = { en: 'Private code · demo in interview', fr: 'Code privé · présentation en entretien' }

const hasFeaturedVisual = (project) => Boolean(project['princ-visual']?.trim())
const getProjectVisualPath = (project) => `/${project.folder}${project['princ-visual']}`
const getProjectLogoPath = (project) => `/${project.logo}`
</script>

<template>
  <!-- Fond légèrement grisé indispensable pour le néomorphisme -->
  <div class="min-h-screen font-sans antialiased text-slate-800 pb-20">

    <NavBar />

    <div class="max-w-5xl mx-auto px-6 pt-12 pb-16">

      <!-- Header avec relief léger -->
      <header class="bg-slate-100 text-center mb-14 p-8 md:p-10 rounded-[40px] shadow-[20px_20px_60px_#bebebe,-10px_-10px_40px_#ffffff]">
        <h1 class="text-4xl md:text-6xl font-black tracking-tight mb-4 text-slate-900">
          {{ profile.name }}
        </h1>
        <p class="text-sm md:text-lg text-slate-500 font-medium tracking-[0.15em] uppercase">
          {{ t(profile.headline) }}
        </p>
        <p class="mt-5 inline-block px-4 py-2 rounded-2xl text-sm md:text-base font-semibold text-blue-700 shadow-[inset_4px_4px_8px_#d1d5db,inset_-4px_-4px_8px_#ffffff]">
          {{ t(profile.availability) }}
        </p>

        <!-- Liens de contact -->
        <div class="mt-8 flex flex-wrap justify-center gap-4">
          <a
            :href="profile.links.cv"
            target="_blank"
            rel="noopener"
            class="neo-btn neo-primary"
          >
            <svg viewBox="0 0 24 24" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/></svg>
            {{ t(profile.labels.cv) }}
          </a>
          <a :href="'mailto:' + profile.links.email" class="neo-btn">
            <svg viewBox="0 0 24 24" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 6L2 7"/></svg>
            {{ t(profile.labels.email) }}
          </a>
          <a :href="profile.links.linkedin" target="_blank" rel="noopener noreferrer" class="neo-btn">
            <svg viewBox="0 0 24 24" class="w-4 h-4" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>
            {{ t(profile.labels.linkedin) }}
          </a>
          <a :href="profile.links.github" target="_blank" rel="noopener noreferrer" class="neo-btn">
            <svg viewBox="0 0 24 24" class="w-4 h-4" fill="currentColor" aria-hidden="true"><path d="M12 .3a12 12 0 0 0-3.8 23.38c.6.12.83-.26.83-.57L9 21.07c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.09-.73.09-.73 1.2.09 1.83 1.24 1.83 1.24 1.07 1.83 2.81 1.3 3.5 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18a4.65 4.65 0 0 1 1.23 3.22c0 4.61-2.8 5.63-5.48 5.92.42.36.81 1.1.81 2.22l-.01 3.29c0 .31.2.69.82.57A12 12 0 0 0 12 .3"/></svg>
            {{ t(profile.labels.github) }}
          </a>
        </div>
      </header>

      <!-- À propos -->
      <section class="mb-20 grid grid-cols-1 md:grid-cols-5 gap-8">
        <div class="md:col-span-3 bg-slate-100 p-8 rounded-[2.5rem] shadow-[inset_8px_8px_16px_#d1d5db,inset_-8px_-8px_16px_#ffffff]">
          <h2 class="text-2xl font-black mb-4 text-slate-800">{{ t(profile.labels.about) }}</h2>
          <p v-for="(paragraph, i) in profile.about" :key="i" class="text-slate-600 text-lg leading-relaxed mb-3 last:mb-0">
            {{ t(paragraph) }}
          </p>
        </div>
        <ul class="md:col-span-2 bg-slate-100 p-8 rounded-[2.5rem] shadow-[12px_12px_30px_#bebebe,-12px_-12px_30px_#ffffff] space-y-4">
          <li v-for="fact in profile.facts" :key="fact.label.en">
            <span class="block text-xs font-black uppercase tracking-widest text-blue-500">{{ t(fact.label) }}</span>
            <template v-if="fact.lines">
              <span v-for="(line, k) in fact.lines" :key="k" class="block text-slate-700 font-medium">{{ t(line) }}</span>
            </template>
            <span v-else class="text-slate-700 font-medium">{{ t(fact.value) }}</span>
          </li>
        </ul>
      </section>

      <!-- Expériences -->
      <section id="experience" class="mb-20 scroll-mt-28">
        <div class="mb-10">
          <h2 class="text-3xl md:text-4xl font-black tracking-tight text-slate-900">{{ t(expTitle) }}</h2>
          <p class="text-slate-500 text-lg font-medium mt-2">{{ t(expSubtitle) }}</p>
        </div>

        <ol class="space-y-8">
          <li
            v-for="exp in experiences"
            :key="exp.id"
            class="bg-slate-100 p-6 md:p-8 rounded-[2rem] shadow-[12px_12px_30px_#bebebe,-12px_-12px_30px_#ffffff]"
          >
            <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
              <div>
                <h3 class="text-xl md:text-2xl font-black text-slate-800">{{ t(exp.role) }}</h3>
                <p class="text-blue-600 font-bold">{{ exp.company }}</p>
              </div>
              <div class="flex items-center gap-3 shrink-0">
                <span
                  class="px-3 py-1 rounded-lg text-[11px] font-black uppercase tracking-widest"
                  :class="exp.kind === 'tech' ? 'bg-blue-100 text-blue-700' : 'bg-slate-200 text-slate-600'"
                >{{ t(kindLabel[exp.kind]) }}</span>
                <span class="text-sm font-bold text-slate-500 whitespace-nowrap">{{ t(exp.dates) }}</span>
              </div>
            </div>
            <ul class="space-y-2 mb-5">
              <li v-for="(b, k) in exp.bullets" :key="k" class="flex gap-3 text-slate-600 text-base md:text-lg leading-relaxed">
                <span class="mt-2.5 w-1.5 h-1.5 shrink-0 rounded-full bg-blue-500"></span>
                <span>{{ t(b) }}</span>
              </li>
            </ul>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in exp.tags"
                :key="tag"
                class="px-3 py-1.5 rounded-xl bg-slate-100 shadow-[3px_3px_6px_#bebebe,-3px_-3px_6px_#ffffff] text-xs font-bold text-slate-600"
              >{{ tag }}</span>
            </div>
          </li>

          <!-- Engagement associatif -->
          <li class="bg-slate-100 p-6 md:p-8 rounded-[2rem] shadow-[inset_6px_6px_12px_#d1d5db,inset_-6px_-6px_12px_#ffffff]">
            <span class="block text-xs font-black uppercase tracking-widest text-blue-500 mb-2">{{ t(leadershipLabel) }}</span>
            <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
              <div>
                <h3 class="text-lg md:text-xl font-black text-slate-800">{{ t(leadership.role) }}</h3>
                <p class="text-slate-500 font-semibold">{{ t(leadership.company) }}</p>
              </div>
              <span class="text-sm font-bold text-slate-500 whitespace-nowrap">{{ t(leadership.dates) }}</span>
            </div>
            <p v-for="(b, k) in leadership.bullets" :key="k" class="text-slate-600 text-base md:text-lg leading-relaxed">{{ t(b) }}</p>
          </li>
        </ol>
      </section>

      <!-- Projets, par catégorie -->
      <div id="projects" class="scroll-mt-28">
      <section v-for="section in sections" :key="section.key" class="mb-20">
        <div class="mb-10">
          <h2 class="text-3xl md:text-4xl font-black tracking-tight text-slate-900">{{ t(section.title) }}</h2>
          <p class="text-slate-500 text-lg font-medium mt-2">{{ t(section.subtitle) }}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
          <router-link
            v-for="project in section.projects"
            :key="project.id"
            :to="'/project/' + project.id"
            class="group relative bg-slate-100 rounded-[2.5rem] p-4 shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]"
          >
            <!-- Mockup / Image Area (effet enfoncé) -->
            <div class="aspect-video bg-slate-100 rounded-[2rem] relative overflow-hidden shadow-[inset_6px_6px_12px_#d1d5db,inset_-6px_-6px_12px_#ffffff] mb-8">
              <img
                v-if="hasFeaturedVisual(project)"
                :src="getProjectVisualPath(project)"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                :alt="t(project.title)"
                loading="lazy"
              />
              <div v-else class="w-full h-full flex items-center justify-center">
                <div class="w-30 h-30 p-4 bg-slate-100 rounded-3xl shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] group-hover:scale-110 transition-transform duration-500">
                  <img
                    :src="getProjectLogoPath(project)"
                    class="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                    :alt="t(project.title)"
                  />
                </div>
              </div>

              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/15 via-transparent to-slate-100/10"></div>

              <div class="absolute bottom-4 right-4 w-16 h-16 p-3 bg-slate-100/90 rounded-2xl shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] backdrop-blur-sm">
                <img
                  :src="getProjectLogoPath(project)"
                  class="w-full h-full object-contain opacity-90"
                  alt=""
                />
              </div>

            </div>

            <!-- Content -->
            <div class="px-6 pb-6">
              <div v-if="project.dates || project.badge" class="flex flex-wrap items-center gap-2 mb-3">
                <span v-if="project.dates" class="text-xs font-black uppercase tracking-widest text-slate-500">{{ project.dates }}</span>
                <span v-if="project.badge" class="px-2.5 py-1 rounded-lg bg-blue-100 text-blue-700 text-[11px] font-black uppercase tracking-wider">{{ t(project.badge) }}</span>
              </div>
              <h3 class="text-3xl font-black mb-3 text-slate-800 group-hover:text-blue-600 transition-colors">
                {{ t(project.title) }}
              </h3>
              <p class="text-slate-500 text-lg leading-relaxed mb-8 font-medium">
                {{ t(project.shortDescription || project.projetType) }}
              </p>
              <p v-if="project.codeUrl" class="-mt-5 mb-6 text-sm font-bold text-blue-600">{{ t(codeLabel) }} ↗</p>
              <p v-else-if="project.codeNote" class="-mt-5 mb-6 text-sm font-semibold text-slate-400">{{ t(privateLabel) }}</p>

              <!-- Tech Badges (effet bouton néomorphique) -->
              <div class="flex flex-wrap gap-3">
                <div
                  v-for="tech in project.technos"
                  :key="tech.name"
                  class="px-4 py-2 rounded-xl bg-slate-100 shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff] text-xs font-bold text-slate-600"
                >
                  {{ tech.name }}
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </section>

      </div>

      <!-- Contact -->
      <footer id="contact" class="scroll-mt-28 bg-slate-100 text-center p-10 rounded-[40px] shadow-[inset_10px_10px_24px_#d1d5db,inset_-10px_-10px_24px_#ffffff]">
        <h2 class="text-3xl font-black text-slate-900 mb-3">{{ t(profile.contactTitle) }}</h2>
        <p class="text-slate-500 text-lg mb-6">{{ t(profile.contactText) }}</p>
        <div class="flex flex-wrap justify-center gap-4">
          <a :href="'mailto:' + profile.links.email" class="neo-btn">{{ profile.links.email }}</a>
          <a :href="profile.links.linkedin" target="_blank" rel="noopener noreferrer" class="neo-btn">LinkedIn</a>
          <a :href="profile.links.cv" target="_blank" rel="noopener" class="neo-btn">{{ t(profile.labels.cv) }}</a>
        </div>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.neo-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  border-radius: 1rem;
  background-color: #f1f5f9;
  color: #475569;
  font-weight: 700;
  font-size: 0.875rem;
  box-shadow: 6px 6px 12px #bebebe, -6px -6px 12px #ffffff;
  transition: all 0.2s ease;
}
.neo-btn:hover {
  color: #2563eb;
}
.neo-btn:active {
  box-shadow: inset 3px 3px 6px #bebebe, inset -3px -3px 6px #ffffff;
}
.neo-btn.neo-primary {
  background-color: #2563eb;
  color: #ffffff;
}
.neo-btn.neo-primary:hover {
  background-color: #1d4ed8;
  color: #ffffff;
}
</style>
