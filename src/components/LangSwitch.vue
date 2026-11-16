<script setup>
import { computed } from 'vue'
import { lang, toggleLang, t, ui } from '../i18n'

const isEnglish = computed(() => lang.value === 'en')
</script>

<template>
  <!-- Interrupteur de langue : drapeau français à gauche, britannique à droite -->
  <button
    type="button"
    role="switch"
    :aria-checked="isEnglish"
    :aria-label="t(ui.switchLang)"
    :title="t(ui.switchLang)"
    @click="toggleLang"
    class="relative inline-flex items-center gap-2 p-1.5 rounded-full bg-slate-100 shadow-[inset_3px_3px_6px_#bebebe,inset_-3px_-3px_6px_#ffffff] cursor-pointer select-none"
  >
    <!-- Curseur mobile -->
    <span
      class="absolute top-0.5 left-1.5 w-9 h-9 rounded-full bg-slate-100 shadow-[3px_3px_6px_#bebebe,-3px_-3px_6px_#ffffff] transition-transform duration-300 ease-out"
      :class="isEnglish ? 'translate-x-11' : 'translate-x-0'"
    ></span>

    <!-- France -->
    <span class="relative z-10 w-9 h-7 flex items-center justify-center">
      <svg viewBox="0 0 3 2" class="w-6 h-4 rounded-[3px] transition-opacity duration-300" :class="isEnglish ? 'opacity-40' : 'opacity-100'" aria-hidden="true">
        <rect width="1" height="2" x="0" fill="#002654" />
        <rect width="1" height="2" x="1" fill="#ffffff" />
        <rect width="1" height="2" x="2" fill="#ce1126" />
      </svg>
    </span>

    <!-- Royaume-Uni -->
    <span class="relative z-10 w-9 h-7 flex items-center justify-center">
      <svg viewBox="0 0 60 30" class="w-6 h-4 rounded-[3px] transition-opacity duration-300" :class="isEnglish ? 'opacity-100' : 'opacity-40'" aria-hidden="true">
        <clipPath id="uk-clip"><path d="M0,0 v30 h60 v-30 z" /></clipPath>
        <clipPath id="uk-diag"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" /></clipPath>
        <g clip-path="url(#uk-clip)">
          <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
          <path d="M0,0 L60,30 M60,0 L0,30" stroke="#ffffff" stroke-width="6" />
          <path d="M0,0 L60,30 M60,0 L0,30" clip-path="url(#uk-diag)" stroke="#C8102E" stroke-width="4" />
          <path d="M30,0 v30 M0,15 h60" stroke="#ffffff" stroke-width="10" />
          <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6" />
        </g>
      </svg>
    </span>
  </button>
</template>
