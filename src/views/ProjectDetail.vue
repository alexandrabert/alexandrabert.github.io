<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { projects } from '../data/projects';
import { ChevronLeft, Rocket, Folder, ChevronDown } from 'lucide-vue-next';

const route = useRoute();
const project = projects.find(p => p.id === route.params.id);
const openFolders = ref(new Set());

const toggleFolder = (index) => {
  if (openFolders.value.has(index)) openFolders.value.delete(index);
  else openFolders.value.add(index);
};
const isPDF = (filename) => {
  return filename.toLowerCase().endsWith('.pdf');
};

onMounted(() => window.scrollTo(0, 0));
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
                <div v-if="openFolders.has(i)" class="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 rounded-[2rem] bg-slate-100 shadow-[inset_6px_6px_12px_#d1d5db,inset_-6px_-6px_12px_#ffffff]">
                  
                  <div v-for="(file, fileIdx) in step.gallery" :key="fileIdx" 
                      class="relative group rounded-2xl p-2 bg-slate-100 shadow-[6px_6px_12px_#d1d5db,-6px_-6px_12px_#ffffff] transition-all duration-300 hover:shadow-[2px_2px_5px_#d1d5db,-2px_-2px_5px_#ffffff]">
                    
                    <!-- CAS : IMAGE -->
                    <div v-if="!isPDF(file)" class="aspect-video rounded-xl overflow-hidden bg-slate-200">
                      <img 
                        :src="'/' + project.folder + file" 
                        class="w-full h-full object-cover hover:scale-105 transition-transform duration-700 cursor-zoom-in" 
                        alt="Document" 
                      />
                    </div>

                    <!-- CAS : PDF -->
                    <div v-else class="aspect-video rounded-xl flex flex-col items-center justify-center bg-slate-50 p-4">
                      <div class="mb-3 p-3 rounded-full bg-slate-100 shadow-[4px_4px_8px_#d1d5db,-4px_-4px_8px_#ffffff]">
                        <FileText class="w-8 h-8 text-red-400" />
                      </div>
                      <span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 truncate w-full text-center px-2">
                        {{ file }}
                      </span>
                      <a 
                        :href="'/' + project.folder + file" 
                        target="_blank"
                        class="text-[11px] font-black uppercase tracking-tighter px-4 py-2 rounded-lg bg-slate-100 shadow-[3px_3px_6px_#d1d5db,-3px_-3px_6px_#ffffff] hover:text-blue-600 active:shadow-[inset_2px_2px_4px_#d1d5db] transition-all"
                      >
                        Ouvrir le PDF
                      </a>
                    </div>

                  </div>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </section>
    </article>
  </div>
</template>

<style scoped>
.fade-slide-enter-active, .fade-slide-leave-active { transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1); }
.fade-slide-enter-from, .fade-slide-leave-to { opacity: 0; transform: translateY(-10px); }
</style>