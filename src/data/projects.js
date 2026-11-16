// Contenu du portfolio.
// Chaque texte affiché existe en deux langues : { en: "...", fr: "..." }.
// L'anglais est la langue par défaut du site.
// category : "dev" (Software Engineering) ou "design" (Design & Communication).
// gallery : fichiers du dossier public/<folder>, ou liens YouTube.

export const projects = [
  {
    id: "spotif-int",
    category: "dev",
    title: "Spotif'INT",
    logo: "SpotifINT/spotifint.svg",
    folder: "SpotifINT/",
    "princ-visual": "cover.webp",
    projetType: {
      en: "Solo project for the MiNET student network association",
      fr: "Projet personnel (en solo) pour l'association MiNET"
    },
    shortDescription: {
      en: "Music streaming web app for the campus: FastAPI backend, Vue.js frontend, moderation dashboard.",
      fr: "Application web d'écoute de musique pour le campus : backend FastAPI, frontend Vue.js, dashboard de modération."
    },
    fullDescription: {
      en: "A modern music listening platform for the IMT (Institut Mines-Télécom) campus, inspired by Spotify: playlists, likes, view counts and a FastAPI backend. It is a complete rebuild of the original Spotif'INT, which only played YouTube videos through links.",
      fr: "Développement d'une interface moderne pour l'écoute de musique créée sur le campus de l'IMT (Institut Mines-Télécom), avec gestion des playlists, likes et vues, et intégration de FastAPI. Application web inspirée de Spotify. Cette plateforme est la nouvelle version améliorée de l'ancien projet Spotif'INT, qui lisait des vidéos YouTube via un système de liens."
    },
    highlights: [
      { en: "Solo project: UX/UI, frontend, backend and database", fr: "Projet en solo : UX/UI, frontend, backend et base de données" },
      { en: "REST API in FastAPI with a SQLite database", fr: "API REST en FastAPI avec une base SQLite" },
      { en: "Student login through MiNET's Keycloak", fr: "Connexion des étudiants via le Keycloak de MiNET" },
      { en: "Moderation dashboard and anti-spam likes", fr: "Dashboard de modération et likes anti-spam" }
    ],
    technos: [
      { name: "Vue.js", icon: "vue.svg" },
      { name: "FastAPI", icon: "fastapi.svg" },
      { name: "TailwindCSS", icon: "tailwindcss.svg" },
      { name: "SQLite", icon: "sqlite.svg" }
    ],
    planAction: [
      {
        step: { en: "Starting point: the old project", fr: "Projet initial à remanier" },
        desc: {
          en: "The existing Spotif'INT played YouTube videos from links, with a very basic interface.",
          fr: "Le Spotif'INT actuel est une application de lecture de vidéos YouTube via des liens, avec une interface basique."
        },
        gallery: ["ancien-projet.pdf"]
      },
      {
        step: { en: "UX/UI: mobile and desktop mockups", fr: "UX/UI : maquettes mobile et desktop" },
        desc: {
          en: "A mobile-first PWA, since most students listen on their phone. Smooth playback with a smart switch between the 'Mini-Player' (while browsing) and the 'Full-Player' (immersive view). A simple design using the MiNET association's colours.",
          fr: "Développement d'une PWA d'abord orientée utilisateur mobile (car plus souvent utilisée). Système de lecture fluide avec bascule intelligente entre le « Mini-Player » (navigation) et le « Full-Player » (immersion). Design simple et reprenant les couleurs de l'association MiNET."
        },
        gallery: ["mobile-maquette.pdf", "desktop-maquette.pdf"]
      },
      {
        step: { en: "Frontend with Vue.js and TailwindCSS", fr: "Création du frontend avec Vue.js et TailwindCSS" },
        desc: {
          en: "User interface built with Vue.js and TailwindCSS, Lucide icons and reusable components. Playback logic with state management (play, pause, next, previous), first tested on a sample database.",
          fr: "Développement de l'interface utilisateur avec Vue.js et TailwindCSS. Utilisation de Lucide icons et de composants réutilisables. Intégration d'une logique de lecture musicale avec gestion des états (play, pause, next, previous). Utilisation d'une base de données test."
        },
        gallery: ["mobile-frontend.pdf", "desktop-frontend.pdf"]
      },
      {
        step: { en: "Hierarchical architecture and database", fr: "Architecture hiérarchique et BDD" },
        desc: {
          en: "A recursive data structure (Association > Club > List) to manage permissions and resources. Database model in SQLite, with playlists and liked tracks.",
          fr: "Développement d'une structure de données récursive (Asso > Club > Liste) pour la gestion des droits et des ressources. Création du modèle de BDD avec SQLite. Ajout des playlists et des titres likés."
        },
        gallery: ["diagramme-de-classe.webp"]
      },
      {
        step: { en: "YouTube link ingestion pipeline", fr: "Pipeline de téléchargement des liens YouTube" },
        desc: {
          en: "Tracks are added automatically from YouTube links. Metadata handling with a fallback: when no cover is provided, the logo of the parent entity (association or campaign team) is used.",
          fr: "Automatisation de l'ajout de titres via liens YouTube. Gestion intelligente des métadonnées avec système de « fallback » : si aucune couverture n'est fournie, c'est le logo de l'entité parente (Asso/Mandat) qui est appliqué."
        }
      },
      {
        step: { en: "Admin and moderation dashboard", fr: "Dashboard d'administration et modération" },
        desc: {
          en: "A control panel for student life: approve, edit or hide tracks submitted by users, with dynamic priorities during campaign events.",
          fr: "Création d'un panneau de contrôle pour la vie associative. Permet la validation, la modification et le masquage des titres soumis par les utilisateurs, avec une gestion dynamique des priorités pour les événements de campagne."
        },
        gallery: ["admin_moderation_view.pdf"]
      },
      {
        step: { en: "Playlists and engagement", fr: "Système de playlists et engagement" },
        desc: {
          en: "A secure 'Like' system (anti-spam: one like per user per track), combined with automatic addition to personal playlists to drive engagement.",
          fr: "Implémentation d'un système de « Like » sécurisé (anti-spam : limite à 1 like par utilisateur et par titre) couplé à une fonctionnalité d'ajout automatique aux playlists personnelles pour favoriser l'engagement."
        }
      },
      {
        step: { en: "Backend development", fr: "Développement backend" },
        desc: {
          en: "REST API with FastAPI and SQLite database management.",
          fr: "Mise en place de FastAPI et gestion de la base de données SQLite."
        }
      },
      {
        step: { en: "Security", fr: "Sécurisation" },
        desc: {
          en: "Student authentication through the MiNET association's Keycloak.",
          fr: "Authentification des étudiants via le système Keycloak de l'association MiNET."
        }
      }
    ]
  },
  {
    id: "safe-int",
    category: "dev",
    title: "Safe'INT",
    folder: "SafeINT/",
    logo: "SafeINT/safeint.png",
    "princ-visual": "cover.webp",
    projetType: {
      en: "Team project (4 students), Cassiopée module at Télécom SudParis",
      fr: "Projet d'équipe (4 étudiants), module Cassiopée à Télécom SudParis"
    },
    shortDescription: {
      en: "Campus safety mobile app: real-time geolocated alerts, FastAPI backend, monitoring dashboard.",
      fr: "Application mobile de sécurité pour le campus : alertes géolocalisées en temps réel, backend FastAPI, dashboard de suivi."
    },
    fullDescription: {
      en: "Safe'INT is a student safety application that handles emergencies on campus. A Flutter frontend and a FastAPI backend manage emergency calls, real-time GPS tracking and a directory of refuge locations (Safe Places).",
      fr: "Safe'INT est une application de sécurité étudiante. Elle permet de gérer les situations d'urgence sur le campus. Avec un frontend en Flutter et un backend FastAPI gérant les appels d'urgence, l'appli permet de passer des appels, de faire du suivi GPS en temps réel et de gérer des lieux de refuge (Safe Places)."
    },
    highlights: [
      { en: "My role: all app mockups in Figma, project management and the monitoring dashboard", fr: "Mon rôle : toutes les maquettes de l'app sur Figma, la gestion de projet et le dashboard de suivi" },
      { en: "REST API in FastAPI with real-time geolocated alerts", fr: "API REST en FastAPI avec alertes géolocalisées en temps réel" },
      { en: "Locking so that only one helper answers each alert", fr: "Verrou pour qu'un seul aidant réponde à chaque alerte" },
      { en: "CI/CD pipeline running on every push", fr: "Pipeline CI/CD lancé à chaque push" }
    ],
    technos: [
      { name: "Flutter", icon: "flutter.svg" },
      { name: "FastAPI", icon: "fastapi.svg" },
      { name: "PostgreSQL", icon: "postgresql.svg" },
      { name: "Pydantic", icon: "pydantic.svg" },
      { name: "Figma", icon: "figma.svg" }
    ],
    planAction: [
      {
        step: { en: "Architecture and data modelling", fr: "Architecture et modélisation" },
        desc: {
          en: "Pydantic schemas to create and read users, with activity tracking (last_seen).",
          fr: "Définition des schémas Pydantic pour la création et la lecture d'utilisateurs avec suivi d'activité (last_seen)."
        }
      },
      {
        step: { en: "UI/UX design in Figma", fr: "Conception UI/UX sur Figma" },
        desc: {
          en: "A 'safety-first' interface: clean and reassuring, with large, accessible emergency buttons for stressful situations. I worked on the user flow, from opening the app to triggering an alert, and designed all the mockups.",
          fr: "Création d'une interface « Safety-first ». L'enjeu était de concevoir un design épuré et rassurant, avec des boutons d'urgence larges et accessibles pour des situations de stress. Travail sur le parcours utilisateur : de l'ouverture de l'app au déclenchement d'une alerte. J'ai réalisé toutes les maquettes."
        },
        gallery: ["mobile-maquette.pdf", "dashboard.png"]
      },
      {
        step: { en: "Real-time assistance hub", fr: "Hub d'assistance en temps réel" },
        desc: {
          en: "Emergency call and geolocation modules, with live position tracking (latitude / longitude).",
          fr: "Développement des modules d'appels et de géolocalisation d'urgence avec suivi dynamique des positions (lat/long)."
        }
      },
      {
        step: { en: "Concurrency handling", fr: "Gestion de la concurrence" },
        desc: {
          en: "A lock on incidents guarantees that only one helper responds to a given alert.",
          fr: "Implémentation d'un système de verrou sur les incidents pour garantir qu'un seul aidant réponde à une alerte."
        }
      },
      {
        step: { en: "Safe Places module", fr: "Module Safe Places" },
        desc: {
          en: "A directory of safe refuge locations, with a validation process by users.",
          fr: "Création d'un répertoire de lieux de refuge sécurisés avec processus de validation par l'utilisateur."
        }
      },
      {
        step: { en: "Admin dashboard and data visualisation", fr: "Dashboard d'administration et data viz" },
        desc: {
          en: "A monitoring interface for campus security teams: incidents shown on a real-time interactive map, and statistics such as call peaks per hour and the most frequent incident types.",
          fr: "Conception d'une interface de suivi pour les équipes de sécurité du campus. Agrégation des données d'incidents pour affichage sur une carte interactive en temps réel et génération de graphiques statistiques (pics d'appels par heure, types d'incidents les plus fréquents)."
        }
      },
      {
        step: { en: "Project management", fr: "Gestion de projet" },
        desc: {
          en: "I coordinated the team of four throughout the project, with a CI/CD pipeline running on every push.",
          fr: "J'ai coordonné l'équipe de quatre tout au long du projet, avec un pipeline CI/CD lancé à chaque push."
        }
      }
    ]
  },
  {
    id: "micloud",
    category: "design",
    title: "MiCloud 2026",
    logo: "MiCloud/micloud.svg",
    folder: "MiCloud/",
    "princ-visual": "affiche3.webp",
    projetType: {
      en: "Annual digital-technology conference organised by the MiNET association",
      fr: "Conférence annuelle sur le numérique organisée par l'association MiNET"
    },
    fullDescription: {
      en: "As part of MiNET's communication team, I led the promotional campaign for the MiCloud conference, whose theme was digital sovereignty. The conference features talks by professors and industry professionals.",
      fr: "Au sein du pôle communication de l'association MiNET, j'ai réalisé la campagne de promotion de la conférence MiCloud, qui avait pour thème la souveraineté numérique. La conférence s'articule autour de prises de parole d'intervenants (professeurs, professionnels)."
    },
    technos: [
      { name: "Figma", icon: "figma.svg" },
      { name: "Photoshop", icon: "photoshop.svg" },
      { name: "After Effects", icon: "ae.svg" },
      { name: "DaVinci Resolve", icon: "davinci.svg" }
    ],
    planAction: [
      {
        step: { en: "Visual identity", fr: "Identité visuelle" },
        desc: {
          en: "To tackle digital sovereignty, I proposed three moodboards to the other MiNET members. We chose a colourful, pop identity to make the event more appealing to students, who often assume these conferences are too technical.",
          fr: "Pour aborder le thème de la souveraineté numérique, j'ai proposé trois moodboards différents aux autres membres de l'association MiNET. Nous avons choisi une identité colorée et pop, ce qui permet de rendre l'événement bien plus attractif pour les étudiants, qui s'imaginent souvent que ces conférences sont trop techniques."
        },
        gallery: ["moodboard1.png", "moodboard2.png", "moodboard3.png"]
      },
      {
        step: { en: "Communication strategy", fr: "Stratégie de communication" },
        desc: {
          en: "I planned the campaign to start six weeks before the event, with print, digital and goodies, and set clear deadlines to coordinate with the school and the partner companies (speakers).",
          fr: "J'ai structuré le planning de communication pour démarrer la diffusion un mois et demi avant l'événement, en prévoyant des supports variés : physique, numérique et goodies. J'ai également défini des échéances précises pour coordonner nos échanges avec l'école et les entreprises partenaires (intervenants)."
        },
        gallery: ["planning.png"]
      },
      {
        step: { en: "Brand guidelines and variations", fr: "Charte graphique et ses déclinaisons" },
        desc: {
          en: "Once the art direction was approved, I set up the brand guidelines with the logo and typefaces, then created icons and posters illustrating each sub-theme of digital sovereignty.",
          fr: "Une fois la direction artistique validée, j'ai mis en place la charte graphique avec le logo et les typographies. J'ai ensuite créé plusieurs icônes et affiches spécifiques pour illustrer les différents sous-thèmes de la souveraineté numérique."
        },
        gallery: ["charte-graphique-micloud.png"]
      },
      {
        step: { en: "Reaching students", fr: "Communication auprès des étudiants" },
        desc: {
          en: "We launched the campaign at Télécom SudParis with many formats: save-the-dates, Instagram posts, banners on campus buildings and information emails. Temporary event-themed profile pictures helped build momentum on campus.",
          fr: "Nous avons lancé la communication auprès des étudiants de Télécom SudParis à l'aide de formats très divers : des « Save the date », des posts Instagram, des bannières sur les bâtiments et des mails d'information. Pour créer une dynamique sur le campus, nous avons aussi partagé des photos de profil temporaires aux couleurs de l'événement."
        },
        gallery: ["affiche1.png", "affiche2.webp", "affiche3.webp", "affiche4.webp", "savethedate.mp4"]
      },
      {
        step: { en: "Coverage on the day", fr: "Couverture le jour J" },
        desc: {
          en: "On the day, I covered the conference live on Instagram with interactive stories, and filmed the talks and the afterwork to gather footage for an aftermovie.",
          fr: "Le jour de la conférence, j'ai assuré le suivi en direct sur Instagram à travers plusieurs stories interactives. J'ai également filmé différents moments de la conférence et de l'afterwork afin de rassembler des rushs pour la création d'un aftermovie."
        }
      }
    ]
  },
  {
    id: "gala",
    category: "design",
    title: "Gala des Télécoms",
    logo: "Gala/gala.svg",
    folder: "Gala/",
    "princ-visual": "affiche1.webp",
    projetType: {
      en: "Student event communication",
      fr: "Communication événementielle étudiante"
    },
    fullDescription: {
      en: "Communication campaign for the very first Gala des Télécoms at the Palais Brongniart in Paris, co-organised by the Forum des Télécommunications and the Student Union. As communication lead in a team of three for the Forum, I created the event's identity and ran its promotion.",
      fr: "Campagne de communication pour la toute première édition du Gala des Télécoms au Palais Brongniart, co-organisée par le Forum des Télécommunications et le BDE. En tant que responsable communication au sein d'une équipe de trois personnes pour le Forum, j'ai géré la création de l'identité et la promotion de l'événement."
    },
    technos: [
      { name: "Figma", icon: "figma.svg" },
      { name: "Photoshop", icon: "photoshop.svg" },
      { name: "DaVinci Resolve", icon: "davinci.svg" }
    ],
    planAction: [
      {
        step: { en: "Identity", fr: "Identité" },
        desc: {
          en: "We chose a 'Midnight Sky' theme with a blue and gold palette for an elegant look, which also subtly nods to the colours of both organising associations.",
          fr: "Nous avons opté pour le thème « Midnight Sky » avec une palette bleu et doré pour un rendu très chic. Ce choix permettait aussi de faire un clin d'œil discret aux couleurs des deux associations organisatrices."
        },
        gallery: ["moodboard.webp"]
      },
      {
        step: { en: "Brand guidelines", fr: "Charte graphique" },
        desc: {
          en: "I created the brand guidelines for this first edition of the Gala, in agreement with the team.",
          fr: "J'ai créé la charte graphique de cette première édition du Gala en accord avec les membres de l'équipe."
        },
        gallery: ["charte-graphique-gala.png"]
      },
      {
        step: { en: "Communication materials", fr: "Supports de communication" },
        desc: {
          en: "The campaign ran on posters, Instagram posts, physical banners and emails to students. With Luca Fuster, I also designed the visuals for partner companies such as Fortress.",
          fr: "Nous avons décliné la communication sur des affiches, des posts Instagram, des bannières physiques et des mails aux étudiants. En binôme avec Luca Fuster, je me suis également chargée des visuels destinés aux entreprises partenaires comme Fortress."
        },
        gallery: ["affiche1.webp", "banniere.webp", "affiche2.png", "pp.webp", "ticket.png"]
      },
      {
        step: { en: "Videos", fr: "Vidéos" },
        desc: {
          en: "The video strategy relied on two pieces: a teaser to launch the event, then an aftermovie looking back on the evening.",
          fr: "La stratégie vidéo s'est articulée autour de deux réalisations majeures. Nous avons d'abord diffusé un teaser pour lancer l'événement, puis un aftermovie pour proposer un retour en images sur la soirée."
        },
        gallery: ["https://www.youtube.com/watch?v=bBFiJ1ReMxs", "https://www.youtube.com/watch?v=Hh6zK9JlhgE"]
      }
    ]
  },
  {
    id: "bikeandrun",
    category: "design",
    title: "Bike & Run",
    logo: "BikeRun/bike-and-run.svg",
    folder: "BikeRun/",
    "princ-visual": "banniere.webp",
    projetType: {
      en: "Sports event communication",
      fr: "Communication sportive et événementielle"
    },
    fullDescription: {
      en: "Communication campaign for the second Bike and Run, a sports event organised by the Forum des Télécommunications where company professionals and students race in pairs. I handled the graphic design and the promotion of the event on campus.",
      fr: "Campagne de communication pour la deuxième édition du Bike and Run, un événement sportif organisé par le Forum des Télécommunications qui rassemble des professionnels d'entreprises et des étudiants en binômes. J'ai pris en charge la déclinaison graphique et la promotion de l'événement sur le campus."
    },
    technos: [
      { name: "Figma", icon: "figma.svg" },
      { name: "Photoshop", icon: "photoshop.svg" },
      { name: "DaVinci Resolve", icon: "davinci.svg" }
    ],
    planAction: [
      {
        step: { en: "Identity", fr: "Identité" },
        desc: {
          en: "The logo already existed for this second edition, so we built a visual world mixing black and white with the logo's colours.",
          fr: "Le logo étant déjà existant pour cette deuxième édition, nous avons créé un univers graphique mêlant le noir et blanc aux couleurs du logo."
        },
        gallery: ["charte-graphique-bike-and-run.webp"]
      },
      {
        step: { en: "Materials", fr: "Supports" },
        desc: {
          en: "We reached students for a month through posters, Instagram posts, banners and profile pictures, to encourage sign-ups to race alongside professionals.",
          fr: "Nous avons communiqué auprès des étudiants pendant un mois via des affiches, des posts Instagram, des bannières et des photos de profil. Cette stratégie ciblée visait à encourager les inscriptions pour courir aux côtés des professionnels."
        },
        gallery: ["affiche1.webp", "affiche2.webp", "pp.png", "banniere.webp"]
      }
    ]
  },
  {
    id: "partage",
    category: "design",
    title: "GATE - Part'Âgé",
    logo: "GATE/gate.png",
    folder: "GATE/",
    "princ-visual": "slide.webp",
    projetType: {
      en: "Student engagement project (2024-2025), Jury's Favorite Award",
      fr: "Projet d'engagement étudiant (2024-2025), Prix coup de cœur du jury"
    },
    fullDescription: {
      en: "Part'Âgé is a GATE project that teaches basic IT skills to seniors in Évry. The goal is to reduce the digital divide and support the social inclusion of older people by helping them acquire basic digital skills. We taught two groups of 10 to 15 seniors and refurbished 21 donated computers.",
      fr: "Part'Âgé est un projet GATE qui vise à donner des cours d'informatique élémentaire aux seniors de la ville d'Évry. L'objectif est de réduire la fracture numérique et de favoriser l'inclusion sociale des personnes âgées en leur permettant d'acquérir des compétences numériques de base. Nous avons formé deux groupes de 10 à 15 seniors et reconditionné 21 ordinateurs donnés."
    },
    technos: [
      { name: "Figma", icon: "figma.svg" },
      { name: "PowerPoint", icon: "powerpoint.svg" },
      { name: "Google Slides", icon: "google-slides.svg" }
    ],
    planAction: [
      {
        step: { en: "Summary sheets", fr: "Fiches récapitulatives" },
        desc: {
          en: "I designed a summary sheet for each IT lesson so the seniors could easily review at home. To suit this audience, I chose a very visual, clean and easy-to-read format.",
          fr: "J'ai conçu des fiches résumées pour chaque cours d'informatique afin d'aider les seniors à réviser facilement chez eux. Pour m'adapter au mieux à ce public, j'ai privilégié un format très visuel, épuré et simple à lire."
        },
        gallery: ["fiche1.webp", "fiche2.webp", "fiche3.png"]
      },
      {
        step: { en: "Final presentation slides", fr: "Support de soutenance" },
        desc: {
          en: "For the final presentation, I prepared slides with a strict rule: almost no text. I relied on visual content to support and energise our talk.",
          fr: "Pour présenter le projet lors de la soutenance finale, j'ai préparé des slides avec une consigne stricte : presque aucun texte. J'ai donc misé sur un contenu très visuel pour accompagner et dynamiser notre présentation orale."
        },
        gallery: ["soutenance.pdf"]
      },
      {
        step: { en: "Project poster", fr: "Poster du projet" },
        desc: {
          en: "I also designed the final Part'Âgé poster, which counted towards our final grade. The goal was a striking poster to promote the project.",
          fr: "J'ai également réalisé l'affiche finale du projet Part'Âgé, un élément important qui comptait pour notre note finale. L'objectif était de proposer une affiche percutante pour promouvoir le projet."
        },
        gallery: ["affiche.webp"]
      }
    ]
  },
  {
    id: "intv-animation",
    category: "design",
    title: { en: "Logo animation", fr: "Animation de logo" },
    logo: "Disclaimer/intv.svg",
    folder: "Disclaimer/",
    "princ-visual": "cover.webp",
    projetType: {
      en: "Video animation of a logo for the INTv club",
      fr: "Animation vidéo d'un logo pour le club INTv"
    },
    fullDescription: {
      en: "For the INTv club's video content, I created animations of its logo, combining work in After Effects and DaVinci Resolve. I adapted the logo in Figma so it would work on the background.",
      fr: "Dans le cadre de contenus vidéo pour le club INTv, j'ai réalisé des animations du logo. Ces animations mélangent un travail sur After Effects et sur DaVinci Resolve. J'ai adapté le logo sur Figma pour qu'il s'intègre au fond."
    },
    technos: [
      { name: "DaVinci Resolve", icon: "davinci.svg" },
      { name: "After Effects", icon: "ae.svg" },
      { name: "Figma", icon: "figma.svg" }
    ],
    planAction: [
      {
        step: { en: "Animation", fr: "Animation" },
        desc: {
          en: "One of the animations I made, with a cyberpunk and electro style.",
          fr: "Voici l'une des animations que j'ai réalisées, avec un style cyberpunk et électro."
        },
        gallery: ["animation-intv.mp4"]
      }
    ]
  }
];
