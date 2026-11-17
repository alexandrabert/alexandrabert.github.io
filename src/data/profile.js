// Informations de présentation et de contact affichées sur l'accueil.
// Le CV public (public/cv/) ne contient pas de numéro de téléphone.

export const profile = {
  name: 'Alexandra Bert',
  headline: {
    en: 'Engineering student · Distributed systems & software engineering',
    fr: 'Élève ingénieure · Systèmes distribués et génie logiciel'
  },
  availability: {
    en: 'Looking for a 4-month internship from March 2027 · open to international roles (English-speaking)',
    fr: 'Recherche un stage de 4 mois à partir de mars 2027 · ouverte à l\'international (en anglais)'
  },
  about: [
    {
      en: "I'm an engineering student at Télécom SudParis (Institut Polytechnique de Paris), specialising in distributed service architectures, and currently in a gap year. Next, I'm heading to the M2 in Parallel and Distributed Systems at IP Paris, with a long-term goal of R&D in cloud and distributed systems.",
      fr: "Je suis élève ingénieure à Télécom SudParis (Institut Polytechnique de Paris), spécialisée en architectures de services répartis, et actuellement en année de césure. Je vise ensuite le M2 Parallel and Distributed Systems d'IP Paris, avec pour objectif à long terme la R&D en cloud et systèmes distribués."
    },
    {
      en: "I like designing system architectures and making them scale, and taking a project from design to delivery on my own. My background in UI/UX and visual communication helps me build software that people actually enjoy using.",
      fr: "J'aime concevoir des architectures de systèmes et les faire passer à l'échelle, et mener un projet de la conception à la livraison en autonomie. Mon expérience en UI/UX et en communication visuelle m'aide à construire des logiciels agréables à utiliser."
    }
  ],
  facts: [
    { label: { en: 'School', fr: 'École' }, value: { en: 'Télécom SudParis, IP Paris (2024-2028)', fr: 'Télécom SudParis, IP Paris (2024-2028)' } },
    { label: { en: 'Focus', fr: 'Spécialité' }, value: { en: 'Distributed service architectures', fr: 'Architectures de services répartis' } },
    { label: { en: 'Programming', fr: 'Langages' }, value: { en: 'Python, Java, C, SQL', fr: 'Python, Java, C, SQL' } },
    { label: { en: 'Frameworks & tools', fr: 'Frameworks et outils' }, value: { en: 'FastAPI, Vue.js, Docker', fr: 'FastAPI, Vue.js, Docker' } },
    // Une langue par ligne
    {
      label: { en: 'Languages', fr: 'Langues' },
      lines: [
        { en: 'French (native)', fr: 'Français (natif)' },
        { en: 'English (B2, close to C1)', fr: 'Anglais (B2, proche du C1)' },
        { en: 'Spanish (A2)', fr: 'Espagnol (A2)' }
      ]
    }
  ],
  sections: {
    dev: {
      title: { en: 'Software Engineering', fr: 'Génie logiciel' },
      subtitle: { en: 'Backend, APIs and full-stack applications', fr: 'Backend, API et applications full-stack' }
    },
    design: {
      title: { en: 'Design & Communication', fr: 'Design et communication' },
      subtitle: { en: 'Visual identities, campaigns and video for student events', fr: 'Identités visuelles, campagnes et vidéo pour des événements étudiants' }
    }
  },
  contactTitle: { en: "Let's talk", fr: 'Me contacter' },
  contactText: {
    en: 'Interested in my profile for an internship? I would be happy to hear from you.',
    fr: 'Mon profil vous intéresse pour un stage ? Je serais ravie d\'échanger avec vous.'
  },
  links: {
    email: 'alexandrabert.2606@gmail.com',
    linkedin: 'https://www.linkedin.com/in/alexandra-bert-b91308327/',
    github: 'https://github.com/alexandrabert',
    cv: '/cv/Alexandra_Bert_CV.pdf'
  },
  labels: {
    cv: { en: 'Download my CV', fr: 'Télécharger mon CV' },
    email: { en: 'Email', fr: 'E-mail' },
    linkedin: { en: 'LinkedIn', fr: 'LinkedIn' },
    github: { en: 'GitHub', fr: 'GitHub' },
    about: { en: 'About me', fr: 'À propos' }
  }
}
