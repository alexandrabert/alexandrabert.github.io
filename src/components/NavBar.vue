<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { t } from '../i18n'
import LangSwitch from './LangSwitch.vue'

const route = useRoute()
const router = useRouter()
const isHome = computed(() => route.path === '/')

const items = [
  { id: 'experience', label: { en: 'Experience', fr: 'Expériences' } },
  { id: 'projects', label: { en: 'Projects', fr: 'Projets' } },
  { id: 'contact', label: { en: 'Contact', fr: 'Contact' } }
]

// Le site utilise des URL en « # » (GitHub Pages) : on fait défiler en JavaScript
// au lieu d'utiliser des ancres. Depuis une page projet, on revient d'abord à l'accueil.
const goTo = (id) => {
  if (isHome.value) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  } else {
    router.push({ path: '/', query: { section: id } })
  }
}

const goTop = () => {
  if (isHome.value) window.scrollTo({ top: 0, behavior: 'smooth' })
  else router.push('/')
}
</script>

<template>
  <nav class="sticky top-4 z-50 max-w-5xl mx-auto px-3 sm:px-4">
    <div class="bg-slate-100/85 backdrop-blur-lg pl-3 sm:pl-5 pr-2 sm:pr-3 py-2.5 rounded-3xl shadow-[10px_10px_20px_#bebebe,-10px_-10px_20px_#ffffff] border border-white/40 flex items-center justify-between gap-3">
      <button type="button" @click="goTop" class="flex items-center gap-2 font-black text-slate-800 hover:text-blue-600 transition-colors shrink-0">
        <svg v-if="!isHome" viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 18l-6-6 6-6" /></svg>
        <span class="hidden sm:inline">Alexandra Bert</span>
        <span v-if="isHome" class="sm:hidden max-[380px]:hidden">AB</span>
      </button>

      <ul class="flex items-center gap-0 sm:gap-2">
        <li v-for="item in items" :key="item.id">
          <button
            type="button"
            @click="goTo(item.id)"
            class="px-2 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-slate-600 hover:text-blue-600 hover:shadow-[inset_3px_3px_6px_#d1d5db,inset_-3px_-3px_6px_#ffffff] transition-all"
          >
            {{ t(item.label) }}
          </button>
        </li>
      </ul>

      <LangSwitch class="shrink-0" />
    </div>
  </nav>
</template>
