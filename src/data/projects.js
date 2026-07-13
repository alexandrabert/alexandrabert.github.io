export const projects = [
  {
    id: "partage",
    title: "GATE - Part'âgé",
    logo: "GATE/gate.svg",
    folder : "GATE/",
    projetType: "Projet d'engagement étudiant.",
    fullDescription: "Part'âgé est un projet GATE qui vise à donner des cours d'informatique élémentaire aux séniors de la ville d'Evry. L'objectif est de réduire la fracture numérique et de favoriser l'inclusion sociale des personnes âgées en leur permettant d'acquérir des compétences numériques de base.",
    technos: [
        { name: "Figma", icon : "figma.svg" },
        { name: "Powerpoint", icon: "powerpoint.svg" },
        { name: "Google Slides", icon: "google-slides.svg" }
    ],
    planAction: [
      { 
        step: "Fiches récapitulatives", 
        desc: "J'ai conçu des fiches résumées pour chaque cours d'informatique afin d'aider les seniors à réviser facilement chez eux. Pour m'adapter au mieux à ce public, j'ai privilégié un format très visuel, épuré et simple à lire.",
        gallery: ["fiche1.png", "fiche2.png", "fiche3.png"]
      },
      { 
        step: "Support de soutenance", 
        desc: "Pour présenter le projet lors de la soutenance finale, j'ai préparé des slides avec une consigne stricte : presque aucun texte. J'ai donc misé sur un contenu très visuel pour accompagner et dynamiser notre présentation orale.",
        gallery: ["soutenance1.pdf"]
      },
      { 
        step: "Poster du projet", 
        desc: "J'ai également réalisé le poster final du projet Part'âge, un élément important qui comptait pour notre note finale. L'objectif était de proposer une affiche percutante pour promouvoir le projet.",
        gallery: ["poster.png"]
      }
    ]
  },
  {
    id: "micloud",
    title: "MiCloud - 2026",
    logo: "MiCloud/micloud.svg",
    folder : "MiCloud/",
    projetType: "Conférence annuelle sur le numérique organisée par l'association MiNET",
    fullDescription: "Au sein du pôle communication de l'association MiNET, j'ai réalisé la campagne de promotion pour la conférence MiCloud, qui avait pour thème la souveraineté numérique. La conférence s'articule autour de prise de parole d'intervenants (professeurs, professionels).",
    technos: [
        { name: "Figma", icon : "figma.svg" },
        { name: "Photoshop", icon: "photoshop.svg" },
        { name: "AfterEffect", icon: "ae.svg" },
        { name : "DaVinci Resolve", icon: "davinci.svg" }
    ],
    planAction: [
      { 
        step: "Identité visuelle", 
        desc: "Pour aborder le thème de la souveraineté numérique, j'ai proposé trois moodboards différents aux autres membres de l'association Minet. Nous avons choisi une identité colorée et pop, ce qui permet de rendre l'événement bien plus attractif pour les étudiants qui s'imaginent souvent que ces conférences sont trop techniques.",
        gallery: ["moodboard1.png", "moodboard2.png", "moodboard3.png"]
      },
      { 
        step: "Stratégie de communication", 
        desc: "J'ai structuré le planning de communication pour démarrer la diffusion un mois et demi avant l'événement, en prévoyant des supports variés comme du physique, du numérique et des goodies. J'ai également défini des échéances précises pour coordonner nos échanges avec l'école et les entreprises partenaires (intervenants).",
        gallery: ["planning.pdf"]
      },
      { 
        step: "Charte graphique et ses déclinaisons", 
        desc: "Une fois la direction artistique validée, j'ai mis en place la charte graphique avec le logo et les typographies. J'ai ensuite créé plusieurs icônes et affiches spécifiques pour illustrer les différents sous-thèmes de la souveraineté numérique.",
        gallery: ["charte-graphique-micloud.pdf"]
      },
      { 
        step: "Communication auprès des étudiants", 
        desc: "Nous avons lancé la communication auprès des étudiants de Télécom SudParis à l'aide de formats très divers : des 'Save the date', des posts Instagram, des bannières sur les bâtiments et des mails d'information. Pour créer une dynamique sur le campus, nous avons aussi partagé des photos de profil temporaires aux couleurs de l'événement.",
        gallery: ["affiche1.png", "affiche2.png", "affiche3.png", "savethedate.mp4", "insta-micloud.png"]
      },
      { 
        step: "Couverture le jour J", 
        desc: "Le jour de la conférence, j'ai assuré le suivi en direct sur Instagram à travers plusieurs stories interactives. J'ai également filmé différents moments de la conférence et de l'afterwork afin de rassembler des rushs pour la création d'un aftermovie.",
        gallery: []
      }
    ]
  },
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
