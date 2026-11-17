import { ref, watch } from 'vue'

// Langue du site : anglais par défaut, français en option.
const STORAGE_KEY = 'portfolio-lang'

const readStoredLang = () => {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    return stored === 'fr' || stored === 'en' ? stored : 'en'
  } catch {
    return 'en'
  }
}

export const lang = ref(readStoredLang())

watch(lang, (value) => {
  document.documentElement.lang = value
  try {
    window.localStorage.setItem(STORAGE_KEY, value)
  } catch {
    // Stockage indisponible : la langue reste valable pour la visite en cours.
  }
}, { immediate: true })

export const toggleLang = () => {
  lang.value = lang.value === 'en' ? 'fr' : 'en'
}

// Renvoie le texte dans la langue courante. Accepte une chaîne simple ou { en, fr }.
export const t = (value) => {
  if (value == null) return ''
  if (typeof value === 'string') return value
  return value[lang.value] ?? value.en ?? ''
}

// Libellés de l'interface.
export const ui = {
  backHome: { en: 'Back', fr: 'Retour' },
  highlights: { en: 'Key points', fr: 'Points clés' },
  videoUnsupported: { en: 'Your browser does not support HTML5 video.', fr: 'Votre navigateur ne prend pas en charge les vidéos HTML5.' },
  notFoundTitle: { en: 'Project not found', fr: 'Projet introuvable' },
  notFoundText: { en: 'This project does not exist or has moved.', fr: "Ce projet n'existe pas ou a été déplacé." },
  seeProjects: { en: 'See all projects', fr: 'Voir tous les projets' },
  close: { en: 'Close', fr: 'Fermer' },
  myWork: { en: 'My work', fr: 'Mon travail' },
  teamWork: { en: 'Team work', fr: "Travail d'équipe" },
  viewCode: { en: 'View the source code on GitLab', fr: 'Voir le code source sur GitLab' },
  inBrief: { en: 'At a glance', fr: 'En bref' },
  openPdf: { en: 'Open in a new tab', fr: 'Ouvrir dans un nouvel onglet' },
  pages: { en: 'pages', fr: 'pages' },
  nextProject: { en: 'Next project', fr: 'Projet suivant' },
  previous: { en: 'Previous', fr: 'Précédent' },
  next: { en: 'Next', fr: 'Suivant' },
  enlarge: { en: 'Enlarge', fr: 'Agrandir' },
  switchLang: { en: 'Passer en français', fr: 'Switch to English' }
}
