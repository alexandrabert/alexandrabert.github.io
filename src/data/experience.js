// Expériences professionnelles, de la plus récente à la plus ancienne.
// Mêmes faits que les CV (dépôt recherche-stage, Profil candidat).
// kind : "tech" (développement, infrastructure) ou "comm" (communication, design).

export const experiences = [
  {
    id: "autorecharge",
    kind: "comm",
    company: "Autorecharge",
    role: { en: "Communications Manager (fixed-term contract)", fr: "Chargée de communication (CDD)" },
    dates: { en: "Jan 2026 - Mar 2027", fr: "janv. 2026 - mars 2027" },
    bullets: [
      {
        en: "Managed communications for 2 trade shows (Top Transport, Solutrans).",
        fr: "Gestion de la communication pour 2 salons professionnels (Top Transport, Solutrans)."
      },
      {
        en: "Created the brand guidelines and visual assets: website, brochure, LinkedIn, posters, technical documents.",
        fr: "Création de la charte graphique et des supports visuels : site web, plaquette, LinkedIn, affiches, documents techniques."
      }
    ],
    tags: ["Figma", "Photoshop", "Brand design"]
  },
  {
    id: "atelier",
    kind: "tech",
    company: "Atelier choses & co",
    role: { en: "Web Developer and Designer", fr: "Développeuse web et designer" },
    dates: { en: "Jul 2026", fr: "juil. 2026" },
    bullets: [
      {
        en: "Took over 6 websites for nursing homes and developed custom features in WordPress and PHP.",
        fr: "Reprise de 6 sites web d'EHPAD et développement de fonctionnalités sur mesure en WordPress et PHP."
      },
      {
        en: "Implemented 5 pages independently from the client's data and design templates.",
        fr: "Intégration de 5 pages en autonomie à partir des données et des maquettes du client."
      },
      {
        en: "Prototyped interfaces (UI/UX) and laid out technical documents following the client's brand guidelines.",
        fr: "Prototypage d'interfaces (UI/UX) et mise en page de documents techniques selon la charte du client."
      }
    ],
    tags: ["WordPress", "PHP", "UI/UX"]
  },
  {
    id: "avnir",
    kind: "tech",
    company: "AVNIR Group / Cimra",
    role: { en: "Scripting and Infrastructure Intern", fr: "Stagiaire scripting et infrastructure" },
    dates: { en: "Jul 2025", fr: "juil. 2025" },
    bullets: [
      {
        en: "Built a Python script that scans directories and verifies data on a NAS server holding data for 220 clients.",
        fr: "Développement d'un script Python qui parcourt les répertoires et vérifie les données d'un serveur NAS hébergeant les données de 220 clients."
      },
      {
        en: "Validated Disaster Recovery Plans (DRP) on 100 data volumes and set up continuous backup protocols.",
        fr: "Validation des plans de reprise d'activité (PRA) sur 100 volumes de données et mise en place de protocoles de sauvegarde continue."
      },
      {
        en: "Analyzed OS types and restart failures to define the optimal configuration for future recoveries.",
        fr: "Analyse des types d'OS et des échecs de redémarrage pour définir la configuration optimale des prochaines reprises."
      },
      {
        en: "Wrote a complete step-by-step runbook for the recovery procedure.",
        fr: "Rédaction d'un guide complet, étape par étape, de la procédure de reprise."
      }
    ],
    tags: ["Python", "NAS", "Backup & DRP"]
  }
];

// Engagement associatif, affiché sous les expériences.
export const leadership = {
  role: {
    en: "Vice-President, Arts Bureau (BDA), and Head of Multimedia Communication",
    fr: "Vice-présidente du Bureau des Arts (BDA) et responsable de la communication multimédia"
  },
  company: { en: "Télécom SudParis student associations", fr: "Associations étudiantes de Télécom SudParis" },
  dates: { en: "2025 - 2026", fr: "2025 - 2026" },
  bullets: [
    {
      en: "Co-led a 30-member association (events of 100-250 attendees, gala of 1,300) and managed multimedia communication for 3 campus associations.",
      fr: "Co-direction d'une association de 30 membres (événements de 100 à 250 personnes, gala de 1 300 personnes) et gestion de la communication multimédia de 3 associations du campus."
    }
  ]
};
