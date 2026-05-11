export const projects = [
  {
    id: "spotif-int",
    title: "Spotif'INT",
    logo: "SpotifINT/spotifint.svg",
    folder : "SpotifINT/",
    projetType: "Projet associatif et personnel pour l'association MiNET",
    fullDescription: "Développement d'une interface moderne pour l'écoute de musique créée sur le campus de l'IMT (Institut Mines-Télécom) avec gestion des playlists, like et vues et intégration de FastAPI. Application web inspirée de Spotify. Cette plateforme est la nouvelle version améliorée de l'ancien projet 'Spotif'INT', qui lisait des vidéo youtube via un système de liens.",
    technos: [
        { name: "Vue.js", icon : "vue.svg" },
        { name: "FastAPI", icon: "fastapi.svg" },
        { name: "TailwindCSS", icon: "tailwindcss.svg" },
        { name : "SQLite", icon: "sqlite.svg" }
    ],
    mockups: ["spotif1.png", "spotif_demo.mp4"],
    planAction: [
        { 
            step: "Projet initial à remanier", 
            desc: "Le spotif'int actuel est une application de lecture de vidéos YouTube via des liens, avec une interface basique.",
            gallery: ["ancien-projet.pdf"]
        },
        { 
            step: "UX/UI : Maquettes mobile et desktop", 
            desc: "Développement d'une PWA d'abord orientée utilisateur mobile (car plus souvent utilisée). Système de lecture fluide avec bascule intelligente entre le 'Mini-Player' (navigation) et le 'Full-Player' (immersion). Design simple et reprenant les couleurs de l'association MiNET.",
            gallery: ["mobile-maquette.pdf", "desktop-maquette.pdf"]
        },
        { 
            step: "Création du frontend avec Vue.js et TailwindCSS", 
            desc: "Développement de l'interface utilisateur avec Vue.js et TailwindCSS. Utilisation de Lucide icons et composants réutilisables. Intégration d'une logique de lecture musicale avec gestion des états (play, pause, next, previous). Utilisation d'une base de données test.",
            gallery: ["mobile-frontend.pdf", "desktop-frontend.pdf"]
        },
        { 
            step: "Architecture Hiérarchique & BDD", 
            desc: "Développement d'une structure de données récursive (Asso > Club > Liste) pour la gestion des droits et des ressources. Création du modèle de BDD avec SQLite. Ajout des playlist et titres likés.",
            gallery: ["diagramme-de-classe.png"]
        },
        
        { 
            step: "Pipeline de téléchargement des liens YouTube", 
            desc: "Automatisation de l'ajout de titres via liens YouTube. Gestion intelligente des métadonnées avec système de 'fallback' : si aucune couverture n'est fournie, c'est le logo de l'entité parente (Asso/Mandat) qui est appliqué.",
            //gallery: ["ingestion_form.png", "fallback_logic.png"]
        },
        { 
            step: "Dashboard d'Administration & Modération", 
            desc: "Création d'un panneau de contrôle pour la vie associative. Permet la validation, modification et masquage des titres soumis par les utilisateurs, avec une gestion dynamique des priorités pour les événements de campagne.",
            gallery: ["admin_moderation_view.pdf"]
        },
        { 
            step: "Système de Playlist & Engagement", 
            desc: "Implémentation d'un système de 'Like' sécurisé (anti-spam : limite à 1 likes par utilisateur par titre) couplé à une fonctionnalité d'ajout automatique aux playlists personnelles pour favoriser l'engagement utilisateur.",
            //gallery: ["like_animation.mp4", "playlist_management.png"]
        },
        
        { 
          step: "Développement Backend",
          desc: "Mise en place de FastAPI et gestion de la base de données SQLite." ,
          //gallery: [ "fastapi-code.png" ] 
        },
        { 
          step: "Sécurisation", 
          desc: "Authentification des étudiants via le système Keycloak de l'association MiNET." ,
          //gallery: [ "net-authentication.png" ] 
        }
    ]
  },
  {
  id: "safe-int",
  title: "Safe INT",
  folder : "SafeINT/",
  logo: "SafeINT/safeint.png",
  projetType: "Projet scolaire dans le cadre du module \"Cassiopée\"",
  fullDescription: "Safe INT est une application de sécurité étudiante. Elle permet de gérer les situations d'urgence sur le campus. Avec un frontend en Flutter et un backend FastAPI complexe gérant des appels d'urgence, l'appli permet de faire des appels, du suivi GPS en temps réel et la gestion de lieux de refuge (Safe Places).",
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
      //gallery: ["models_code.png", "db_schema.png"] 
    },
    { 
      step: "Conception UI/UX sur Figma", 
      desc: "Création d'une interface 'Safety-first'. L'enjeu était de concevoir un design épuré et rassurant, avec des boutons d'urgence larges et accessibles pour des situations de stress. Travail sur le User Flow : de l'ouverture de l'app au déclenchement d'une alerte.",
      gallery: ["mobile-maquette.pdf", "dashboard.png"] 
    },
    { 
      step: "Hub d'Assistance Temps Réel", 
      desc: "Développement des modules d'appels et de géolocalisation d'urgence avec suivi dynamique des positions (lat/long).",
      //gallery: ["swagger_help.png", "tracking_logic.png"] 
    },
    { 
      step: "Gestion de la Concurrence", 
      desc: "Implémentation d'un système de lock sur les incidents pour garantir qu'un seul aidant réponde à une alerte.",
      //gallery: ["logic_concurrence.png"] 
    },
    { 
      step: "Module Safe Places", 
      desc: "Création d'un répertoire de lieux de refuge sécurisés avec processus de validation par l'utilisateur.",
      //gallery: ["safeplace_map.png", "safeplace_data.png"] 
    },
    { 
      step: "Dashboard d'Administration & Data Viz", 
      desc: "Conception d'une interface de monitoring pour les équipes de sécurité du campus. Agrégation des données d'incidents pour affichage sur une carte interactive en temps réel et génération de graphiques statistiques (pics d'appels par heure, types d'incidents les plus fréquents).",
      //gallery: ["admin_dashboard.png", "stats_graphs.png", "map_monitoring.mp4"] 
    },
  ]
}
];