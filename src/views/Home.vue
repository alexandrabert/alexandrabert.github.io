<script setup>
import { projects } from '../data/projects'

const hasFeaturedVisual = (project) => Boolean(project['princ-visual']?.trim())
const getProjectVisualPath = (project) => `/${project.folder}${project['princ-visual']}`
const getProjectLogoPath = (project) => `/${project.logo}`
</script>

<template>
  <!-- Fond légèrement grisé indispensable pour le néomorphisme -->
  <div class="min-h-screen bg-slate-100 font-sans antialiased text-slate-800 pb-20">
    
    <div class="max-w-5xl mx-auto px-6 py-16">
      <!-- Header avec relief léger -->
      <header class="text-center mb-10 p-10 rounded-[40px] shadow-[20px_20px_60px_#bebebe,-10px_-10px_40px_#ffffff]">
        <h1 class="text-3xl md:text-6xl font-black tracking-tight mb-4 text-slate-900">
          Alexandra Bert
        </h1>
        <p class="text-lg text-slate-500 font-medium tracking-[0.2em] uppercase">
          Développeuse Web, Mobile et Logiciels <br>
          Graphisme et communication
        </p>
      </header>

      <!-- Grille -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
        <router-link 
          v-for="project in projects" 
          :key="project.id" 
          :to="'/project/' + project.id"
          class="group relative bg-slate-100 rounded-[2.5rem] p-4 transition-all duration-500 shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] hover:shadow-[inset_20px_20px_60px_#bebebe,inset_-20px_-20px_60px_#ffffff]"
        >
          <!-- Mockup / Image Area (effet enfoncé) -->
          <div class="aspect-video bg-slate-100 rounded-[2rem] relative overflow-hidden shadow-[inset_6px_6px_12px_#d1d5db,inset_-6px_-6px_12px_#ffffff] mb-8">
            <img
              v-if="hasFeaturedVisual(project)"
              :src="getProjectVisualPath(project)"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              :alt="project.title"
            />
            <div v-else class="w-full h-full flex items-center justify-center">
              <div class="w-30 h-30 p-4 bg-slate-100 rounded-3xl shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] group-hover:scale-110 transition-transform duration-500">
                <img
                  :src="getProjectLogoPath(project)"
                  class="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                  :alt="project.title"
                />
              </div>
            </div>

            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/15 via-transparent to-slate-100/10"></div>

            <div class="absolute bottom-4 right-4 w-16 h-16 p-3 bg-slate-100/90 rounded-2xl shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] backdrop-blur-sm">
              <img
                :src="getProjectLogoPath(project)"
                class="w-full h-full object-contain opacity-90"
                :alt="project.title"
              />
            </div>

            <!-- Overlay discret au survol -->
            <div class="absolute inset-0 bg-slate-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
          </div>

          <!-- Content -->
          <div class="px-6 pb-6">
            <h2 class="text-3xl font-black mb-3 text-slate-800 group-hover:text-blue-600  transition-colors">
              {{ project.title }}
            </h2>
            <p class="text-slate-500 text-lg leading-relaxed mb-8 font-medium">
              {{ project.shortDescription || project.projetType }}
            </p>
            
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
    </div>
  </div>
</template>

<style scoped>
/* Ombres douces pour ce fichier uniquement */
.neo-soft {
  background: #f1f5f9; /* slate-100 */
  box-shadow: 6px 6px 12px #d1d5db, /* Couleur d'ombre plus claire */
             -6px -6px 12px #ffffff;
}

.neo-soft-inset {
  background: #f1f5f9;
  box-shadow: inset 4px 4px 8px #d1d5db, 
              inset -4px -4px 8px #ffffff;
}

/* Optionnel : effet au survol plus discret */
.neo-soft:hover {
  box-shadow: 3px 3px 6px #d1d5db, 
             -3px -3px 6px #ffffff;
}
</style>