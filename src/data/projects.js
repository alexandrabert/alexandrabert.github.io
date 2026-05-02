export const projects = [
  {
    id: "spotif-int",
    title: "Spotif'INT",
    shortDescription: "Plateforme de streaming musical dédiée au campus.",
    fullDescription: "Développement d'une interface moderne pour l'écoute de musique locale, avec gestion des playlists et intégration d'une API FastAPI.",
    technos: [
        { name: "Vue.js", icon : "vue.svg" },
        { name: "FastAPI", icon: "fastapi.svg" },
        { name: "TailwindCSS", icon: "tailwindcss.svg" },
        { name : "SQLite", icon: "sqlite.svg" }
    ],
    mockups: ["spotif1.png", "spotif_demo.mp4"],
    planAction: [
        { 
            step: "UX/UI : Expérience Mobile-First", 
            desc: "Développement d'une PWA orientée utilisateur mobile. Système de lecture fluide avec bascule intelligente entre le 'Mini-Player' (navigation) et le 'Full-Player' (immersion). Optimisation de l'affichage pour garantir une expérience de streaming fluide sur petit écran.",
            gallery: ["mobile_mini_player.png", "full_player_transition.mp4"]
        },
        { 
            step: "Architecture Hiérarchique & Organisationnelle", 
            desc: "Développement d'une structure de données récursive (Asso > Club > Liste) permettant une gestion fine des droits et des ressources. Implémentation d'une logique métier garantissant l'équité entre les entités (ex: limitation stricte à 2 titres mis en vedette pour éviter tout favoritisme entre listes associatives).",
            gallery: ["schema_hiérarchie.png", "admin_dashboard_vedettes.png"]
        },
        
        { 
            step: "Pipeline d'Ingestion & Fallback Média", 
            desc: "Automatisation de l'ajout de titres via liens YouTube. Gestion intelligente des métadonnées avec système de 'fallback' : si aucune couverture n'est fournie, le logo de l'entité parente (Asso/Mandat) est automatiquement appliqué via un traitement d'image serveur.",
            gallery: ["ingestion_form.png", "fallback_logic.png"]
        },
        { 
            step: "Dashboard d'Administration & Modération", 
            desc: "Création d'un panneau de contrôle pour la vie associative. Permet la validation, modification et masquage des titres soumis par les utilisateurs, avec une gestion dynamique des priorités pour les événements de campagne.",
            gallery: ["admin_moderation_view.png", "admin_edit_track.png"]
        },
        { 
            step: "Système de Playlist & Engagement", 
            desc: "Implémentation d'un système de 'Like' sécurisé (anti-spam : limite à 2 likes par utilisateur par titre) couplé à une fonctionnalité d'ajout automatique aux playlists personnelles pour favoriser l'engagement utilisateur.",
            gallery: ["like_animation.mp4", "playlist_management.png"]
        },
        
      { step: "Développement Backend",
        desc: "Mise en place de FastAPI et gestion de la base de données SQLite." ,
        gallery: [ "fastapi-code.png" ] 
    },
      { step: "Sécurisation", 
        desc: "Authentification des étudiants via le système quiklook de l'association MiNET." ,
        gallery: [ "net-authentication.png" ] 
    }
    ]
  },
  {
  id: "safe-int",
  title: "Safe INT",
  shortDescription: "Application mobile de sécurité et d'assistance sur le campus.",
  fullDescription: "Safe INT est une solution complète de sécurité étudiante. Elle intègre un backend FastAPI complexe gérant des appels d'urgence, du suivi GPS en temps réel et la gestion de lieux de refuge (Safe Places).",
  technos: [
    { name: "Flutter", icon: "flutter.svg" },
    { name: "FastAPI", icon: "fastapi.svg" },
    { name: "PostgreSQL", icon: "postgresql.svg" },
    { name: "Pydantic", icon: "pydantic.svg" }
  ],
  planAction: [
    { 
      step: "Architecture & Modélisation", 
      desc: "Définition des schémas Pydantic pour la création et la lecture d'utilisateurs avec suivi d'activité (last_seen).",
      gallery: ["models_code.png", "db_schema.png"] 
    },
    { 
      step: "Conception UI/UX sur Figma", 
      desc: "Création d'une interface 'Safety-first'. L'enjeu était de concevoir un design épuré et rassurant, avec des boutons d'urgence larges et accessibles pour des situations de stress. Travail sur le User Flow : de l'ouverture de l'app au déclenchement d'une alerte.",
      gallery: ["figma_overview.png", "figma_user_flow.png", "figma_colors.png"] 
    },
    { 
      step: "Hub d'Assistance Temps Réel", 
      desc: "Développement des modules d'appels et de géolocalisation d'urgence avec suivi dynamique des positions (lat/long).",
      gallery: ["swagger_help.png", "tracking_logic.png"] 
    },
    { 
      step: "Gestion de la Concurrence", 
      desc: "Implémentation d'un système de lock sur les incidents pour garantir qu'un seul aidant réponde à une alerte.",
      gallery: ["logic_concurrence.png"] 
    },
    { 
      step: "Module Safe Places", 
      desc: "Création d'un répertoire de lieux de refuge sécurisés avec processus de validation par l'utilisateur.",
      gallery: ["safeplace_map.png", "safeplace_data.png"] 
    },
    { 
      step: "Dashboard d'Administration & Data Viz", 
      desc: "Conception d'une interface de monitoring pour les équipes de sécurité du campus. Agrégation des données d'incidents pour affichage sur une carte interactive en temps réel et génération de graphiques statistiques (pics d'appels par heure, types d'incidents les plus fréquents).",
      gallery: ["admin_dashboard.png", "stats_graphs.png", "map_monitoring.mp4"] 
    },
  ]
}
];