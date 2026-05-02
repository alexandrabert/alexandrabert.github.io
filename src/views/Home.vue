<script setup>
import { projects } from '../data/projects'
</script>

<template>
  <!-- On force le fond blanc et une police sans-serif propre -->
  <div class="min-h-screen bg-white font-sans antialiased text-slate-900 mx-8">
    
    <div class="max-w-6xl mx-auto px-6 py-20">
      <!-- Header -->
      <header class="text-center mb-24">
        <h1 class="text-5xl font-black tracking-tight mb-4 text-black">
          Alexandra Bert
        </h1>
        <p class="text-xl text-slate-500 font-medium tracking-wide uppercase">
          Développeuse Web & Mobile
        </p>
      </header>

      <!-- Grille -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <router-link 
          v-for="project in projects" 
          :key="project.id" 
          :to="'/project/' + project.id"
          class="group block bg-slate-50 rounded-3xl overflow-hidden hover:bg-slate-100 transition-all duration-500 border border-transparent hover:border-slate-200"
        >
          <!-- Mockup placeholder -->
          <div class="aspect-video bg-slate-200 flex items-center justify-center relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span class="text-slate-400 font-semibold group-hover:scale-110 transition-transform duration-500 uppercase tracking-widest text-sm">
              Découvrir le projet
            </span>
          </div>

          <!-- Content -->
          <div class="p-10">
            <h2 class="text-3xl font-bold mb-4 group-hover:text-blue-600 transition-colors">
              {{ project.title }}
            </h2>
            <p class="text-slate-600 text-lg leading-relaxed mb-8">
              {{ project.shortDescription }}
            </p>
            
            <!-- Technos corrigées -->
            <div class="flex flex-wrap gap-3">
              <div 
                v-for="tech in project.technos" 
                :key="tech.name"
                class="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-xl shadow-sm"
              >
                <!-- On affiche le texte pour l'instant, on mettra l'image après -->
                <span class="text-sm font-bold text-slate-700">{{ tech.name }}</span>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>