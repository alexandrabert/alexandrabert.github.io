<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { projects } from '../data/projects';
import { 
  ChevronLeft, 
  Rocket, 
  Folder, 
  ChevronDown, 
  Image as ImageIcon, 
  PlayCircle,
  ExternalLink
} from 'lucide-vue-next';

const route = useRoute();
const project = projects.find(p => p.id === route.params.id);

// État pour gérer l'ouverture des dossiers de preuves
// On utilise un Set pour pouvoir ouvrir plusieurs dossiers en même temps
const openFolders = ref(new Set());

const toggleFolder = (index) => {
  if (openFolders.value.has(index)) {
    openFolders.value.delete(index);
  } else {
    openFolders.value.add(index);
  }
};

// Utilitaire pour détecter le type de fichier
const isVideo = (filename) => {
  const videoExtensions = ['.mp4', '.webm', '.ogg'];
  return videoExtensions.some(ext => filename.toLowerCase().endsWith(ext));
};

// Remonter en haut de page lors du chargement
onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<template>
  <div v-if="project" class="min-h-screen bg-white font-sans antialiased text-slate-900 mx-5">
    
    <!-- BARRE DE NAVIGATION -->
    <nav class="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div class="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
        <router-link to="/" class="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors font-medium">
          <ChevronLeft class="w-5 h-5" />
          Retour
        </router-link>
        <span class="text-sm font-bold text-slate-400 uppercase tracking-widest">{{ project.title }}</span>
      </div>
    </nav>

    <article class="max-w-4xl mx-auto px-6 py-12 md:py-20">
      
      <!-- ENTÊTE DU PROJET -->
      <header class="mb-16">
        <h1 class="text-2xl md:text-6xl font-black mb-8 tracking-tight text-slate-900">
          {{ project.title }}
        </h1>
        
        <div class="flex flex-wrap gap-3">
          <div v-for="tech in project.technos" :key="tech.name" 
               class="flex items-center gap-2 bg-slate-50 border border-slate-200 px-4 py-2 rounded-2xl shadow-sm hover:border-blue-200 transition-colors">
            <!-- Tes logos en SVG dans public/icons/ -->
            <img :src="'/icons/' + tech.icon" class="w-5 h-5 object-contain" :alt="tech.name" />
            <span class="font-bold text-slate-700 text-sm">{{ tech.name }}</span>
          </div>
        </div>
      </header>

      <!-- DESCRIPTION -->
      <section class="mb-20">
        <p class="text-xl md:text-xl text-slate-600 leading-relaxed font-light">
          {{ project.fullDescription || project.shortDescription }}
        </p>
      </section>

      <!-- SECTION PLAN D'ACTION (TIMELINE) -->
      <section class="mt-24">
        <div class="flex items-center gap-4 mb-12">
          <div class="bg-blue-600 p-3 rounded-2xl shadow-lg shadow-blue-100">
            <Rocket class="w-6 h-6 text-white" />
          </div>
          <h2 class="text-3xl font-black">Plan d'action</h2>
        </div>

        <div class="space-y-12">
          <div v-for="(step, i) in project.planAction" :key="i" 
               class="relative pl-10 md:pl-10 border-l-2 border-slate-100 pb-8">
            
            <!-- Point sur la timeline -->
            <div class="absolute -left-[9px] top-0 w-4 h-4 bg-white border-4 border-blue-600 rounded-full"></div>

            <!-- Contenu de l'étape -->
            <div class="mb-6">
              <span class="text-blue-600 font-black text-sm uppercase tracking-wider">Étape {{ i + 1 }}</span>
              <h3 class="text-2xl font-bold text-slate-900 mt-1">{{ step.step }}</h3>
              <p class="text-slate-600 mt-3 text-lg leading-relaxed">{{ step.desc }}</p>
            </div>

            <!-- BOUTON DOSSIER (FOLDER) -->
            <div v-if="step.gallery && step.gallery.length > 0" class="mt-6">
              <button 
                @click="toggleFolder(i)"
                class="flex items-center gap-3 px-5 py-3 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-2xl transition-all group shadow-sm"
              >
                <Folder class="w-5 h-5 text-blue-500 group-hover:fill-blue-100 transition-colors" />
                <span class="font-bold text-sm text-slate-700">
                  {{ openFolders.has(i) ? 'Masquer les documents' : `Voir les documents (${step.gallery.length})` }}
                </span>
                <ChevronDown 
                  class="w-4 h-4 text-slate-400 transition-transform duration-300" 
                  :class="{ 'rotate-180': openFolders.has(i) }"
                />
              </button>

              <!-- GRILLE DE MÉDIAS (S'affiche si le dossier est ouvert) -->
              <transition name="fade-slide">
                <div 
                  v-if="openFolders.has(i)" 
                  class="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 bg-slate-50 rounded-3xl border border-slate-200"
                >
                  <div v-for="(file, fileIdx) in step.gallery" :key="fileIdx" 
                       class="relative group rounded-xl overflow-hidden border border-white shadow-md bg-white">
                    
                    <!-- Rendu Vidéo -->
                    <div v-if="isVideo(file)" class="aspect-video bg-black flex items-center justify-center">
                      <video controls class="w-full h-full object-cover">
                        <source :src="'/assets/' + file" type="video/mp4">
                      </video>
                    </div>

                    <!-- Rendu Image -->
                    <div v-else class="relative aspect-video">
                      <img 
                        :src="'/assets/' + file" 
                        class="w-full h-full object-cover hover:scale-110 transition-transform duration-700 cursor-zoom-in" 
                        alt="Preuve étape"
                      />
                      <div class="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold text-slate-500 shadow-sm uppercase">
                        Image
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
  </div>

  <!-- État de chargement ou erreur -->
  <div v-else class="h-screen flex flex-col items-center justify-center">
    <p class="text-slate-400 mb-4 font-medium">Projet non trouvé</p>
    <router-link to="/" class="text-blue-600 font-bold underline">Retour à l'accueil</router-link>
  </div>
</template>

<style scoped>
/* Animation de l'ouverture du dossier */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* On enlève la barre de défilement horizontale si les images débordent un peu */
.overflow-hidden {
  overflow: hidden;
}
</style>