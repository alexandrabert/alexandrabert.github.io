<script setup>
import { computed } from 'vue'
import { t, ui } from '../i18n'

// Un média d'un chapitre : image (agrandissable), PDF (ouvert dans un nouvel onglet),
// vidéo MP4 ou vidéo YouTube.
const props = defineProps({
  media: { type: Object, required: true },
  folder: { type: String, required: true },
  // Hauteur maximale de l'image quand elle est seule à côté du texte
  tall: { type: Boolean, default: false }
})
const emit = defineEmits(['open'])

const src = computed(() => props.media.src)
const isYouTube = computed(() => /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\//i.test(src.value))
const isPdf = computed(() => /\.pdf$/i.test(src.value))
const isVideo = computed(() => /\.mp4$/i.test(src.value))
const isImage = computed(() => /\.(png|jpe?g|webp|gif|svg)$/i.test(src.value))

const path = computed(() => `/${props.folder}${src.value}`)
const pdfPreview = computed(() => `/${props.folder}${src.value.replace(/\.pdf$/i, '-apercu.webp')}`)
const youTubeEmbed = computed(() => {
  const match = src.value.match(/(?:youtube\.com\/watch\?v=|youtube\.com\/embed\/|youtu\.be\/)([\w-]{11})/i)
  return match ? `https://www.youtube-nocookie.com/embed/${match[1]}` : null
})
const caption = computed(() => t(props.media.caption))
</script>

<template>
  <figure class="break-inside-avoid mb-5">
    <!-- Image : clic pour agrandir -->
    <button
      v-if="isImage"
      type="button"
      class="group block w-full overflow-hidden rounded-2xl bg-white shadow-[6px_6px_14px_#c5c9cf,-6px_-6px_14px_#ffffff] cursor-zoom-in"
      :aria-label="`${t(ui.enlarge)} : ${caption}`"
      @click="emit('open', src)"
    >
      <img
        :src="path"
        :alt="caption"
        loading="lazy"
        class="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.03]"
        :class="tall ? 'max-h-[560px] mx-auto' : ''"
      />
    </button>

    <!-- PDF : aperçu de la première page, ouverture dans un nouvel onglet -->
    <a
      v-else-if="isPdf"
      :href="path"
      target="_blank"
      rel="noopener"
      class="group block overflow-hidden rounded-2xl bg-white shadow-[6px_6px_14px_#c5c9cf,-6px_-6px_14px_#ffffff]"
    >
      <div class="relative overflow-hidden bg-slate-200">
        <img
          :src="pdfPreview"
          :alt="caption"
          loading="lazy"
          class="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.03]"
          :class="tall ? 'max-h-[560px] mx-auto' : 'max-h-[420px] mx-auto'"
        />
        <span class="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-red-600 text-white text-[11px] font-black tracking-wider">PDF</span>
      </div>
      <div class="flex items-center justify-between gap-3 px-4 py-3">
        <span class="text-sm font-semibold text-slate-500">
          <template v-if="media.pages">{{ media.pages }} {{ t(ui.pages) }}</template>
        </span>
        <span class="text-sm font-bold text-blue-600 group-hover:underline whitespace-nowrap">{{ t(ui.openPdf) }} ↗</span>
      </div>
    </a>

    <!-- Vidéo MP4 -->
    <div v-else-if="isVideo" class="overflow-hidden rounded-2xl bg-slate-950 shadow-[6px_6px_14px_#c5c9cf,-6px_-6px_14px_#ffffff]">
      <video controls preload="metadata" playsinline class="w-full h-auto">
        <source :src="path" type="video/mp4" />
        {{ t(ui.videoUnsupported) }}
      </video>
    </div>

    <!-- Vidéo YouTube -->
    <div v-else-if="isYouTube && youTubeEmbed" class="aspect-video overflow-hidden rounded-2xl bg-slate-950 shadow-[6px_6px_14px_#c5c9cf,-6px_-6px_14px_#ffffff]">
      <iframe
        :src="youTubeEmbed"
        :title="caption"
        class="w-full h-full"
        loading="lazy"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>

    <figcaption v-if="caption" class="mt-2.5 px-1 text-sm font-medium text-slate-500">{{ caption }}</figcaption>
  </figure>
</template>
