// Contenu du portfolio.
// Chaque texte affiché existe en deux langues : { en: "...", fr: "..." }.
// L'anglais est la langue par défaut du site.
//
// category : "dev" (Software Engineering) ou "design" (Design & Communication).
// chapters : le récit du projet, en 1 à 4 chapitres.
//   - body : le texte ; une ligne vide (\n\n) sépare deux paragraphes.
//   - owner (optionnel) : "me" (mon travail) ou "team" (travail d'équipe).
//   - media : fichiers du dossier public/<folder>, ou liens YouTube.
//       { src: "image.webp", caption: { en, fr } }
//       { src: "doc.pdf", pages: 11, caption: { en, fr } }
//         -> carte avec aperçu, ouverte dans un nouvel onglet.
//            L'aperçu est l'image doc-apercu.webp (première page du PDF).
//       { src: "https://www.youtube.com/watch?v=...", caption: { en, fr } }

export const projects = [
  {
    id: "spotif-int",
    category: "dev",
    title: "Spotif'INT",
    logo: "SpotifINT/spotifint.svg",
    folder: "SpotifINT/",
    "princ-visual": "cover.webp",
    dates: "2025 - 2026",
    badge: { en: "Solo project", fr: "Projet solo" },
    // Code privé (projet pour l'école) : présenté en entretien
    codeNote: {
      en: "Private codebase (school project): I'd be happy to walk you through it in an interview.",
      fr: "Code privé (projet pour l'école) : je peux le présenter en entretien."
    },
    projetType: {
      en: "Solo project for the MiNET student network association",
      fr: "Projet personnel (en solo) pour l'association MiNET"
    },
    shortDescription: {
      en: "Music streaming web app for the campus: FastAPI backend with server-side MP3 streaming, Vue.js frontend.",
      fr: "Application web d'écoute de musique pour le campus : backend FastAPI avec streaming MP3 côté serveur, frontend Vue.js."
    },
    fullDescription: {
      en: "A modern music streaming platform for the IMT (Institut Mines-Télécom) campus, inspired by Spotify. Tracks are added either from YouTube links, converted to MP3 on the server, or by uploading MP3 files directly, then streamed by the backend.",
      fr: "Une plateforme moderne d'écoute de musique pour le campus de l'IMT (Institut Mines-Télécom), inspirée de Spotify. Les titres sont ajoutés soit à partir de liens YouTube, convertis en MP3 sur le serveur, soit par envoi direct de fichiers MP3, puis diffusés en streaming par le backend."
    },
    highlights: [
      { en: "Solo project: UX/UI, frontend, backend and database", fr: "Projet en solo : UX/UI, frontend, backend et base de données" },
      { en: "Backend in FastAPI / SQLite: server-side MP3 streaming, playlists, track upload", fr: "Backend FastAPI / SQLite : streaming MP3 côté serveur, playlists, envoi de titres" },
      { en: "Tracks added from YouTube links (converted to MP3) or MP3 files", fr: "Ajout de titres par lien YouTube (converti en MP3) ou fichier MP3" },
      { en: "User accounts linked to the MiNET association, secured network access", fr: "Comptes liés à l'association MiNET, accès réseau sécurisé" }
    ],
    technos: [
      { name: "Vue.js", icon: "vue.svg" },
      { name: "FastAPI", icon: "fastapi.svg" },
      { name: "TailwindCSS", icon: "tailwindcss.svg" },
      { name: "SQLite", icon: "sqlite.svg" }
    ],
    chapters: [
      {
        title: { en: "The starting point", fr: "Le point de départ" },
        body: {
          en: "The existing Spotif'INT only played YouTube videos through links, with a very basic interface. I decided to rebuild it from scratch as a real streaming platform for the campus: its own audio files, playlists, likes and a moderation space for student associations.",
          fr: "Le Spotif'INT existant se contentait de lire des vidéos YouTube via des liens, avec une interface très basique. J'ai décidé de le reconstruire entièrement en une vraie plateforme de streaming pour le campus : ses propres fichiers audio, des playlists, des likes et un espace de modération pour les associations."
        },
        media: [
          { src: "ancien-projet.pdf", pages: 3, caption: { en: "The original Spotif'INT", fr: "L'ancien Spotif'INT" } }
        ]
      },
      {
        title: { en: "Designing the experience", fr: "Concevoir l'expérience" },
        body: {
          en: "Most students listen on their phone, so I designed a mobile-first PWA. Playback stays smooth thanks to a switch between a 'Mini-Player' while browsing and a 'Full-Player' for an immersive view.\n\nThe design is deliberately simple and uses the colours of the MiNET association. I then adapted the mockups to desktop.",
          fr: "La plupart des étudiants écoutent sur leur téléphone : j'ai donc conçu une PWA pensée d'abord pour le mobile. La lecture reste fluide grâce à une bascule entre un « Mini-Player » pendant la navigation et un « Full-Player » pour une vue immersive.\n\nLe design est volontairement simple et reprend les couleurs de l'association MiNET. J'ai ensuite décliné les maquettes en version desktop."
        },
        media: [
          { src: "mobile-maquette.pdf", pages: 11, caption: { en: "Mobile mockups", fr: "Maquettes mobile" } },
          { src: "desktop-maquette.pdf", pages: 7, caption: { en: "Desktop mockups", fr: "Maquettes desktop" } }
        ]
      },
      {
        title: { en: "Architecture and backend", fr: "Architecture et backend" },
        body: {
          en: "The data model follows a recursive structure (Association > Club > List) that manages permissions and resources, stored in SQLite with playlists and liked tracks.\n\nA REST API in FastAPI handles tracks, playlists and likes. Users add a track either by pasting a YouTube link, which the server downloads and converts to MP3, or by uploading an MP3 file; the backend then streams the files to the player. When no cover is provided, the logo of the parent entity is used. Accounts are linked to the MiNET association, with secured network access.",
          fr: "Le modèle de données suit une structure récursive (Asso > Club > Liste) qui gère les droits et les ressources, stockée en SQLite avec les playlists et les titres likés.\n\nUne API REST en FastAPI gère les titres, les playlists et les likes. Un titre s'ajoute soit en collant un lien YouTube, que le serveur télécharge et convertit en MP3, soit en envoyant un fichier MP3 ; le backend diffuse ensuite les fichiers en streaming vers le lecteur. Quand aucune couverture n'est fournie, c'est le logo de l'entité parente qui est utilisé. Les comptes sont liés à l'association MiNET, avec un accès réseau sécurisé."
        },
        media: [
          { src: "diagramme-de-classe.webp", caption: { en: "Class diagram", fr: "Diagramme de classes" } }
        ]
      },
      {
        title: { en: "Interface and moderation", fr: "Interface et modération" },
        body: {
          en: "The frontend is built with Vue.js and TailwindCSS, with reusable components and playback state management (play, pause, next, previous). A secure 'Like' system allows one like per user and per track, and liked tracks are added to personal playlists.\n\nStudent associations get a moderation dashboard to approve, edit or hide submitted tracks, with priorities that change during campaign events.",
          fr: "Le frontend est développé avec Vue.js et TailwindCSS, avec des composants réutilisables et une gestion des états de lecture (play, pause, suivant, précédent). Un système de « Like » sécurisé autorise un like par utilisateur et par titre, et les titres likés rejoignent les playlists personnelles.\n\nLes associations disposent d'un dashboard de modération pour valider, modifier ou masquer les titres proposés, avec des priorités qui changent pendant les campagnes."
        },
        media: [
          { src: "mobile-frontend.pdf", pages: 5, caption: { en: "Mobile interface", fr: "Interface mobile" } },
          { src: "desktop-frontend.pdf", pages: 4, caption: { en: "Desktop interface", fr: "Interface desktop" } },
          { src: "admin_moderation_view.pdf", pages: 3, caption: { en: "Moderation dashboard", fr: "Dashboard de modération" } }
        ]
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
    dates: "2025 - 2026",
    badge: { en: "Team of 4 · PM & UX", fr: "Équipe de 4 · Chef de projet & UX" },
    codeUrl: "https://gitlab.minet.net/safeint/safeint",
    projetType: {
      en: "Cassiopée project at Télécom SudParis · team of 4 · partnership between MiNET and EquALLity",
      fr: "Projet Cassiopée à Télécom SudParis · équipe de 4 · partenariat entre MiNET et EquALLity"
    },
    shortDescription: {
      en: "Campus safety mobile app with real-time geolocated alerts. My role: Figma mockups, project management, monitoring dashboard.",
      fr: "Application mobile de sécurité du campus avec alertes géolocalisées en temps réel. Mon rôle : maquettes Figma, gestion de projet, dashboard de suivi."
    },
    fullDescription: {
      en: "A campus safety mobile application. Students can raise an alert and be located in real time on an interactive map, so that help reaches them quickly. Safe'INT is our Cassiopée project, the major software development project at Télécom SudParis, built in partnership with two campus associations: MiNET and EquALLity.",
      fr: "Une application mobile de sécurité pour le campus. Un étudiant peut lancer une alerte et être localisé en temps réel sur une carte interactive, pour que l'aide arrive vite. Safe'INT est notre projet Cassiopée, le grand projet de développement de Télécom SudParis, mené en partenariat avec deux associations du campus : MiNET et EquALLity."
    },
    highlights: [
      { en: "I designed all the app mockups in Figma", fr: "J'ai conçu toutes les maquettes de l'app sur Figma" },
      { en: "I managed the project for the team of 4", fr: "J'ai géré le projet pour l'équipe de 4" },
      { en: "I built the monitoring dashboard: usage information and system checks", fr: "J'ai développé le dashboard de suivi : informations d'utilisation et vérification du système" },
      { en: "Team: FastAPI REST API, SQLite, push notifications, CI/CD on every push", fr: "Équipe : API REST FastAPI, SQLite, notifications push, CI/CD à chaque push" }
    ],
    technos: [
      { name: "Figma", icon: "figma.svg" },
      { name: "FastAPI", icon: "fastapi.svg" },
      { name: "SQLite", icon: "sqlite.svg" },
      { name: "Vue.js", icon: "vue.svg" },
      { name: "Flutter", icon: "flutter.svg" }
    ],
    chapters: [
      {
        owner: "me",
        title: { en: "Designing for stressful situations", fr: "Concevoir pour les situations de stress" },
        body: {
          en: "I designed all the app mockups in Figma. The interface is 'safety-first': clean and reassuring, with large, accessible emergency buttons that remain easy to use under stress.\n\nI worked on the whole user flow, from opening the app to triggering an alert.",
          fr: "J'ai conçu toutes les maquettes de l'app sur Figma. L'interface est pensée « safety-first » : épurée et rassurante, avec des boutons d'urgence larges et accessibles, faciles à utiliser sous le stress.\n\nJ'ai travaillé tout le parcours utilisateur, de l'ouverture de l'app au déclenchement d'une alerte."
        },
        media: [
          { src: "mobile-maquette.pdf", pages: 14, caption: { en: "App mockups (Figma)", fr: "Maquettes de l'app (Figma)" } }
        ]
      },
      {
        owner: "me",
        title: { en: "Leading the project and monitoring the system", fr: "Piloter le projet et suivre le système" },
        body: {
          en: "I managed the project and coordinated the team of four through to the final delivery, in liaison with our two partner associations, MiNET and EquALLity.\n\nI also built the monitoring dashboard. It gives usage information about the app and collects the system's data, so we could verify that everything works correctly.",
          fr: "J'ai géré le projet et coordonné l'équipe de quatre jusqu'à la livraison finale, en lien avec nos deux associations partenaires, MiNET et EquALLity.\n\nJ'ai aussi développé le dashboard de suivi. Il donne des informations sur l'utilisation de l'app et collecte les données du système, pour vérifier que tout fonctionne correctement."
        },
        media: [
          { src: "dashboard.png", caption: { en: "Monitoring dashboard", fr: "Dashboard de suivi" } }
        ]
      },
      {
        owner: "team",
        title: { en: "Backend and real-time alerts", fr: "Backend et alertes en temps réel" },
        body: {
          en: "A REST API in Python / FastAPI handles users, alerts and positions, with a SQLite database and push notifications to warn helpers.\n\nThe app (Vue.js / Flutter) shows an interactive map and follows the position of the person who raised the alert in real time. A CI/CD pipeline runs on every push to the repository.",
          fr: "Une API REST en Python / FastAPI gère les utilisateurs, les alertes et les positions, avec une base SQLite et des notifications push pour prévenir les aidants.\n\nL'app (Vue.js / Flutter) affiche une carte interactive et suit en temps réel la position de la personne qui a lancé l'alerte. Un pipeline CI/CD s'exécute à chaque push sur le dépôt."
        }
      },
      {
        title: { en: "What's next", fr: "La suite" },
        body: {
          en: "The project will be continued next year, to finish it and launch its use on campus.",
          fr: "Le projet sera repris l'année prochaine, pour le terminer et lancer son utilisation sur le campus."
        }
      }
    ]
  },
  {
    id: "algo-repartie",
    category: "dev",
    title: { en: "Distributed algorithms", fr: "Algorithmique répartie" },
    logo: "AlgoRepartie/logo.svg",
    folder: "AlgoRepartie/",
    "princ-visual": "cover.webp",
    dates: "2026",
    badge: { en: "Course project · solo", fr: "Projet de cours · en solo" },
    projetType: {
      en: "CSC 4509 course at Télécom SudParis: distributed algorithms and network programming in Java",
      fr: "Module CSC 4509 à Télécom SudParis : algorithmique répartie et programmation réseau en Java"
    },
    shortDescription: {
      en: "Leader election, causal broadcast, mutual exclusion and termination detection, implemented in Java on top of Java NIO.",
      fr: "Élection, diffusion causale, exclusion mutuelle et détection de terminaison, implémentées en Java sur une base Java NIO."
    },
    fullDescription: {
      en: "In the distributed algorithms course, I implemented four classic distributed algorithms in Java, on top of network programming with Java NIO. The project was designed for pairs; I carried it out on my own. I also studied a research paper on group communication systems in a team of four.",
      fr: "Dans le module d'algorithmique répartie, j'ai implémenté quatre algorithmes répartis classiques en Java, sur une base de programmation réseau en Java NIO. Le projet était prévu en binôme : je l'ai réalisé seule. J'ai aussi étudié un article de recherche sur les systèmes de communication de groupe, en équipe de quatre."
    },
    highlights: [
      { en: "A project designed for pairs, carried out alone", fr: "Un projet prévu en binôme, réalisé seule" },
      { en: "Leader election, causal broadcast, distributed mutual exclusion, termination detection", fr: "Élection, diffusion causale, exclusion mutuelle répartie, détection de terminaison" },
      { en: "Network programming in Java NIO (non-blocking I/O)", fr: "Programmation réseau en Java NIO (entrées-sorties non bloquantes)" },
      { en: "Research paper study: group communication systems (ACM Computing Surveys)", fr: "Étude d'un article de recherche : systèmes de communication de groupe (ACM Computing Surveys)" }
    ],
    technos: [
      { name: "Java" },
      { name: "Java NIO" }
    ],
    chapters: [
      {
        owner: "me",
        title: { en: "Network programming with Java NIO", fr: "Programmation réseau avec Java NIO" },
        body: {
          en: "The course starts from the network layer: processes exchange messages over a best-effort network, using Java NIO non-blocking sockets. It covers acknowledgements and delivery semantics: at most once, at least once, exactly once.",
          fr: "Le module part de la couche réseau : des processus échangent des messages sur un réseau « best effort », avec les sockets non bloquantes de Java NIO. Il aborde les acquittements et les sémantiques de transmission : au plus une fois, au moins une fois, exactement une fois."
        }
      },
      {
        owner: "me",
        title: { en: "Four distributed algorithms, implemented alone", fr: "Quatre algorithmes répartis, réalisés seule" },
        body: {
          en: "On top of this layer, I implemented four algorithms, each with its code and a report:\n\nLeader election, so that processes agree on a single coordinator. Causal broadcast, so that messages are delivered in an order that respects causality. Distributed mutual exclusion, so that only one process at a time enters the critical section, without a central coordinator. Termination detection, to know when a distributed computation has really finished.\n\nThe project was meant for pairs; I carried it out on my own.",
          fr: "Sur cette base, j'ai implémenté quatre algorithmes, chacun avec son code et un rapport :\n\nL'élection, pour que les processus s'accordent sur un coordinateur unique. La diffusion causale, pour que les messages soient livrés dans un ordre qui respecte la causalité. L'exclusion mutuelle répartie, pour qu'un seul processus à la fois entre en section critique, sans coordinateur central. La détection de terminaison, pour savoir quand un calcul réparti est réellement terminé.\n\nLe projet était prévu en binôme : je l'ai réalisé seule."
        }
      },
      {
        owner: "team",
        title: { en: "Studying a research paper", fr: "Étudier un article de recherche" },
        body: {
          en: "In a team of four, we studied and presented 'Group Communication Specifications: A Comprehensive Study' by Chockler, Keidar and Vitenberg (ACM Computing Surveys, 2001). Group communication systems are a building block for fault tolerance through active replication.\n\nOur presentation covered the system model, group membership and views, virtual synchrony, and multicast ordering properties, such as the difference between strong and weak total order when the network is partitioned. We illustrated them with collaborative editing and a distributed shopping cart that reconciles its state after a partition.",
          fr: "En équipe de quatre, nous avons étudié et présenté l'article « Group Communication Specifications: A Comprehensive Study » de Chockler, Keidar et Vitenberg (ACM Computing Surveys, 2001). Les systèmes de communication de groupe sont une brique de base de la tolérance aux fautes par réplication active.\n\nNotre présentation couvrait le modèle du système, le membership et les vues, la synchronie virtuelle et les propriétés d'ordonnancement du multicast, comme la différence entre ordre total fort et faible lorsque le réseau est partitionné. Nous les avons illustrées par l'édition collaborative et un panier d'e-commerce réparti qui réconcilie son état après une partition."
        }
      }
    ]
  },
  {
    id: "findmyecocup",
    category: "dev",
    title: "FindMyEcocup",
    logo: "FindMyEcocup/logo.svg",
    folder: "FindMyEcocup/",
    "princ-visual": "cover.webp",
    dates: "2025",
    badge: { en: "Course project", fr: "Projet de cours" },
    projetType: {
      en: "CSC 4101 course at Télécom SudParis: web architectures and applications",
      fr: "Module CSC 4101 à Télécom SudParis : architectures et applications web"
    },
    shortDescription: {
      en: "Inventory management web app built with Symfony, with administrator and visitor access.",
      fr: "Application web de gestion d'inventaire développée avec Symfony, avec accès administrateur et visiteur."
    },
    fullDescription: {
      en: "A web application built with the Symfony PHP framework during the web architectures course. It manages an inventory of items, with different rights for administrators and visitors. I also designed its visual identity.",
      fr: "Une application web développée avec le framework PHP Symfony dans le cadre du module d'architectures web. Elle gère un inventaire d'objets, avec des droits différents pour les administrateurs et les visiteurs. J'ai aussi conçu son identité visuelle."
    },
    highlights: [
      { en: "Server-side web app with Symfony, Doctrine and Twig", fr: "Application web côté serveur avec Symfony, Doctrine et Twig" },
      { en: "Inventory management (create, read, update, delete)", fr: "Gestion d'inventaire (création, lecture, modification, suppression)" },
      { en: "Administrator and visitor roles", fr: "Rôles administrateur et visiteur" },
      { en: "Logo and app icon designed in-house", fr: "Logo et icône de l'application conçus par moi" }
    ],
    technos: [
      { name: "Symfony" },
      { name: "PHP" },
      { name: "Doctrine" },
      { name: "Twig" },
      { name: "Figma", icon: "figma.svg" }
    ],
    chapters: [
      {
        title: { en: "A classic 3-tier architecture", fr: "Une architecture 3-tiers classique" },
        body: {
          en: "The application follows the architecture taught in the course: Symfony controllers handle HTTP requests, Twig templates build the HTML on the server, and the Doctrine ORM maps the application's entities to a SQL database.",
          fr: "L'application suit l'architecture vue en cours : les contrôleurs Symfony traitent les requêtes HTTP, les templates Twig construisent le HTML côté serveur, et l'ORM Doctrine fait le lien entre les entités de l'application et une base de données SQL."
        }
      },
      {
        title: { en: "Inventory and access rights", fr: "Inventaire et droits d'accès" },
        body: {
          en: "Users browse an inventory of items. Administrators can create, edit and delete entries, while visitors have read-only access.",
          fr: "Les utilisateurs consultent un inventaire d'objets. Les administrateurs peuvent créer, modifier et supprimer des entrées, tandis que les visiteurs ont un accès en lecture."
        }
      },
      {
        owner: "me",
        title: { en: "A visual identity", fr: "Une identité visuelle" },
        body: {
          en: "I designed the FindMyEcocup logo and app icon, in light and dark versions.",
          fr: "J'ai conçu le logo et l'icône de FindMyEcocup, en version claire et sombre."
        }
      }
    ]
  },
  {
    id: "elemory",
    category: "dev",
    title: "Elemory",
    logo: "Elemory/logo.svg",
    folder: "Elemory/",
    "princ-visual": "app-accueil.webp",
    dates: "2025",
    badge: { en: "Team of 5 · CTO & product", fr: "Équipe de 5 · CTO & produit" },
    projetType: {
      en: "Entrepreneurship project at Télécom SudParis: a startup designed and pitched in one week",
      fr: "Projet Entreprendre à Télécom SudParis : une startup conçue et pitchée en une semaine"
    },
    shortDescription: {
      en: "Startup project for an app that helps seniors with memory problems. My role: CTO and product manager.",
      fr: "Projet de startup pour une application qui aide les seniors ayant des troubles de la mémoire. Mon rôle : CTO et product manager."
    },
    fullDescription: {
      en: "In one week, our team of five designed and pitched Elemory, a mobile and tablet app that helps people with early or moderate memory problems, including Alzheimer's disease, through simple memory games, daily reminders and a link with their family. I was CTO and product manager.",
      fr: "En une semaine, notre équipe de cinq a conçu et pitché Elemory, une application mobile et tablette qui aide les personnes ayant des troubles de la mémoire légers à modérés, dont la maladie d'Alzheimer, grâce à des jeux de mémoire simples, des rappels du quotidien et un lien avec leur famille. J'étais CTO et product manager."
    },
    highlights: [
      { en: "My role: CTO / product manager, in charge of the solution, the demo, the technical roadmap and the call to action", fr: "Mon rôle : CTO / product manager, en charge de la solution, de la démo, de la roadmap technique et du call to action" },
      { en: "I designed the clickable Figma prototype used for the demo", fr: "J'ai conçu le prototype Figma cliquable utilisé pour la démo" },
      { en: "Product designed for seniors: very simple, tablet-first interface", fr: "Produit pensé pour les seniors : interface très simple, d'abord sur tablette" },
      { en: "Technical roadmap in 3 phases, from MVP to personalisation and support", fr: "Roadmap technique en 3 phases, du MVP à la personnalisation et au soutien" },
      { en: "Team: market study, business plan, marketing and CSR impact", fr: "Équipe : étude de marché, business plan, marketing et impact RSE" }
    ],
    technos: [
      { name: "Flutter", icon: "flutter.svg" },
      { name: "FastAPI", icon: "fastapi.svg" },
      { name: "PostgreSQL", icon: "postgresql.svg" },
      { name: "Figma", icon: "figma.svg" }
    ],
    chapters: [
      {
        owner: "team",
        title: { en: "The problem", fr: "Le problème" },
        body: {
          en: "More than one million people in France live with Alzheimer's disease, and the burden mostly falls on their families. To confirm the need, we spoke with a care assistant and a geriatrician from France Alzheimer.",
          fr: "Plus d'un million de personnes vivent avec la maladie d'Alzheimer en France, et la charge repose surtout sur les familles. Pour confirmer le besoin, nous avons échangé avec une aide-soignante et une gériatre de France Alzheimer."
        }
      },
      {
        owner: "me",
        title: { en: "Designing the solution", fr: "Concevoir la solution" },
        body: {
          en: "I defined the product. A first test sets the user's level, then mini-games train memory: memory cards, puzzles, spot the difference and a music quiz, some personalised with the user's own memories. The app also gives reminders for daily tasks such as medication and appointments, quick access to emergency contacts, and notifies the family if game results decline.\n\nThe interface is designed for seniors: very simple, tablet-first, readable for people with vision difficulties, and it only ever shows positive progress.",
          fr: "J'ai défini le produit. Un premier test fixe le niveau de l'utilisateur, puis des mini-jeux entraînent la mémoire : memory, puzzles, jeu des différences et quiz musical, certains personnalisés avec les souvenirs de la personne. L'application propose aussi des rappels du quotidien comme la prise de médicaments et les rendez-vous, un accès rapide aux contacts d'urgence, et prévient la famille si les résultats aux jeux baissent.\n\nL'interface est pensée pour les seniors : très simple, d'abord sur tablette, lisible malgré les difficultés de vision, et elle ne montre jamais que des progrès."
        }
      },
      {
        owner: "me",
        title: { en: "A clickable prototype in Figma", fr: "Un prototype cliquable sur Figma" },
        body: {
          en: "For the demo, I designed the app's prototype in Figma. It covers the main screens: the mini-games with points, a game sheet with its rules and a choice of grid size, a memory game, and a puzzle built from a family photo that ends with a celebration.\n\nIt also shows the memories space fed with personal photos, a page of emergency numbers (SAMU, police, fire brigade, 112, 114 for deaf and hard-of-hearing people, and a personal emergency contact), and a calendar of reminders for appointments and family visits.",
          fr: "Pour la démo, j'ai conçu le prototype de l'application sur Figma. Il couvre les écrans principaux : les mini-jeux avec leurs points, une fiche de jeu avec ses règles et le choix de la taille de grille, un memory, et un puzzle construit à partir d'une photo de famille qui se termine par une célébration.\n\nIl montre aussi l'espace souvenirs alimenté par des photos personnelles, une page de numéros d'urgence (SAMU, police, pompiers, 112, 114 pour les personnes sourdes et malentendantes, et un contact d'urgence personnel), et un calendrier de rappels pour les rendez-vous et les visites de la famille."
        },
        media: [
          { src: "app-puzzle.webp", caption: { en: "Puzzle made from a family photo", fr: "Puzzle réalisé à partir d'une photo de famille" } }
        ]
      },
      {
        owner: "me",
        title: { en: "The technical roadmap", fr: "La roadmap technique" },
        body: {
          en: "I chose the stack: a Flutter or React Native app, a Python backend (FastAPI or Django) with PostgreSQL and S3 storage, and a small self-hostable language model for adaptive features, on green hosting.\n\nThe roadmap has three phases. MVP in 4 months: three mini-games, reminders and emergency contacts. Personalisation in 3 months: more games, an adaptive difficulty algorithm and personalised content. Support in 3 months: data analysis shared with the caregiver and a help chatbot.",
          fr: "J'ai choisi la stack : une application Flutter ou React Native, un backend Python (FastAPI ou Django) avec PostgreSQL et un stockage S3, et un petit modèle de langage auto-hébergeable pour les fonctions adaptatives, sur un hébergement vert.\n\nLa roadmap compte trois phases. MVP en 4 mois : trois mini-jeux, les rappels et les contacts d'urgence. Personnalisation en 3 mois : plus de jeux, un algorithme de difficulté adaptative et du contenu personnalisé. Soutien en 3 mois : analyse des données partagée avec l'aidant et chatbot d'aide."
        }
      },
      {
        owner: "team",
        title: { en: "Business model and impact", fr: "Modèle économique et impact" },
        body: {
          en: "The team built the market study, the business plan over five years, the marketing strategy and the CSR impact: a subscription of €5.99 per month, green hosting, eco-design compatible with older smartphones, and part of the surplus donated to associations. I closed the pitch with the call to action to the jury.",
          fr: "L'équipe a construit l'étude de marché, le business plan sur cinq ans, la stratégie marketing et l'impact RSE : un abonnement à 5,99 € par mois, un hébergement vert, une éco-conception compatible avec les anciens smartphones, et une partie du surplus reversée à des associations. J'ai conclu le pitch par le call to action au jury."
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
      fr: "Au sein du pôle communication de l'association MiNET, j'ai réalisé la campagne de promotion de la conférence MiCloud, qui avait pour thème la souveraineté numérique. La conférence s'articule autour de prises de parole de professeurs et de professionnels."
    },
    technos: [
      { name: "Figma", icon: "figma.svg" },
      { name: "Photoshop", icon: "photoshop.svg" },
      { name: "After Effects", icon: "ae.svg" },
      { name: "DaVinci Resolve", icon: "davinci.svg" }
    ],
    chapters: [
      {
        title: { en: "Finding the right tone", fr: "Trouver le bon ton" },
        body: {
          en: "To tackle digital sovereignty, I proposed three moodboards to the other MiNET members. We chose a colourful, pop identity to make the event more appealing to students, who often assume these conferences are too technical.",
          fr: "Pour aborder la souveraineté numérique, j'ai proposé trois moodboards aux autres membres de MiNET. Nous avons choisi une identité colorée et pop, pour rendre l'événement plus attractif auprès des étudiants, qui imaginent souvent ces conférences trop techniques."
        },
        media: [
          { src: "moodboard1.png", caption: { en: "Moodboard 1", fr: "Moodboard 1" } },
          { src: "moodboard2.png", caption: { en: "Moodboard 2", fr: "Moodboard 2" } },
          { src: "moodboard3.png", caption: { en: "Moodboard 3", fr: "Moodboard 3" } }
        ]
      },
      {
        title: { en: "Planning the campaign", fr: "Planifier la campagne" },
        body: {
          en: "I planned the campaign to start six weeks before the event, mixing print, digital and goodies, and set clear deadlines to coordinate with the school and the partner companies providing speakers.",
          fr: "J'ai planifié la campagne pour démarrer six semaines avant l'événement, en mêlant supports physiques, numériques et goodies, et fixé des échéances précises pour coordonner nos échanges avec l'école et les entreprises partenaires (intervenants)."
        },
        media: [
          { src: "planning.png", caption: { en: "Communication schedule", fr: "Planning de communication" } }
        ]
      },
      {
        title: { en: "Brand guidelines and posters", fr: "Charte graphique et affiches" },
        body: {
          en: "Once the art direction was approved, I set up the brand guidelines with the logo and typefaces, then created icons and posters illustrating each sub-theme of digital sovereignty.",
          fr: "Une fois la direction artistique validée, j'ai posé la charte graphique avec le logo et les typographies, puis créé des icônes et des affiches illustrant chaque sous-thème de la souveraineté numérique."
        },
        media: [
          { src: "charte-graphique-micloud.png", caption: { en: "Brand guidelines", fr: "Charte graphique" } },
          { src: "affiche1.png", caption: { en: "Poster", fr: "Affiche" } },
          { src: "affiche2.webp", caption: { en: "Poster", fr: "Affiche" } },
          { src: "affiche3.webp", caption: { en: "Poster", fr: "Affiche" } },
          { src: "affiche4.webp", caption: { en: "Poster", fr: "Affiche" } }
        ]
      },
      {
        title: { en: "On campus and on the day", fr: "Sur le campus et le jour J" },
        body: {
          en: "We reached Télécom SudParis students through many formats: save-the-dates, Instagram posts, banners on campus buildings and information emails. Temporary event-themed profile pictures helped build momentum.\n\nOn the day, I covered the conference live on Instagram with interactive stories, and filmed the talks and the afterwork to gather footage for an aftermovie.",
          fr: "Nous avons touché les étudiants de Télécom SudParis par de nombreux formats : « Save the date », posts Instagram, bannières sur les bâtiments et mails d'information. Des photos de profil temporaires aux couleurs de l'événement ont aidé à créer une dynamique.\n\nLe jour J, j'ai couvert la conférence en direct sur Instagram avec des stories interactives, et filmé les interventions et l'afterwork pour rassembler des rushs en vue d'un aftermovie."
        },
        media: [
          { src: "savethedate.mp4", caption: { en: "Save the date video", fr: "Vidéo « Save the date »" } }
        ]
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
      fr: "Campagne de communication pour la toute première édition du Gala des Télécoms au Palais Brongniart, co-organisée par le Forum des Télécommunications et le BDE. Responsable communication au sein d'une équipe de trois pour le Forum, j'ai créé l'identité de l'événement et piloté sa promotion."
    },
    technos: [
      { name: "Figma", icon: "figma.svg" },
      { name: "Photoshop", icon: "photoshop.svg" },
      { name: "DaVinci Resolve", icon: "davinci.svg" }
    ],
    chapters: [
      {
        title: { en: "A 'Midnight Sky' identity", fr: "Une identité « Midnight Sky »" },
        body: {
          en: "We chose a 'Midnight Sky' theme with a blue and gold palette for an elegant look, which also subtly nods to the colours of both organising associations. I then created the brand guidelines for this first edition, in agreement with the team.",
          fr: "Nous avons choisi le thème « Midnight Sky » avec une palette bleu et doré pour un rendu chic, qui fait aussi un clin d'œil discret aux couleurs des deux associations organisatrices. J'ai ensuite créé la charte graphique de cette première édition, en accord avec l'équipe."
        },
        media: [
          { src: "moodboard.webp", caption: { en: "Moodboard", fr: "Moodboard" } },
          { src: "charte-graphique-gala.png", caption: { en: "Brand guidelines", fr: "Charte graphique" } }
        ]
      },
      {
        title: { en: "Communication materials", fr: "Supports de communication" },
        body: {
          en: "The campaign ran on posters, Instagram posts, physical banners and emails to students. With Luca Fuster, I also designed the visuals for partner companies such as Fortress.",
          fr: "La campagne s'est déclinée en affiches, posts Instagram, bannières physiques et mails aux étudiants. En binôme avec Luca Fuster, j'ai aussi réalisé les visuels destinés aux entreprises partenaires comme Fortress."
        },
        media: [
          { src: "affiche1.webp", caption: { en: "Poster", fr: "Affiche" } },
          { src: "affiche2.png", caption: { en: "Poster", fr: "Affiche" } },
          { src: "banniere.webp", caption: { en: "Banner", fr: "Bannière" } },
          { src: "pp.webp", caption: { en: "Profile picture", fr: "Photo de profil" } },
          { src: "ticket.png", caption: { en: "Ticket", fr: "Billet" } }
        ]
      },
      {
        title: { en: "Teaser and aftermovie", fr: "Teaser et aftermovie" },
        body: {
          en: "The video strategy relied on two pieces: a teaser to launch the event, then an aftermovie looking back on the evening.",
          fr: "La stratégie vidéo reposait sur deux réalisations : un teaser pour lancer l'événement, puis un aftermovie pour revenir en images sur la soirée."
        },
        media: [
          { src: "https://www.youtube.com/watch?v=bBFiJ1ReMxs", caption: { en: "Teaser", fr: "Teaser" } },
          { src: "https://www.youtube.com/watch?v=Hh6zK9JlhgE", caption: { en: "Aftermovie", fr: "Aftermovie" } }
        ]
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
      fr: "Campagne de communication pour la deuxième édition du Bike and Run, un événement sportif organisé par le Forum des Télécommunications où professionnels d'entreprises et étudiants courent en binômes. J'ai pris en charge la déclinaison graphique et la promotion de l'événement sur le campus."
    },
    technos: [
      { name: "Figma", icon: "figma.svg" },
      { name: "Photoshop", icon: "photoshop.svg" },
      { name: "DaVinci Resolve", icon: "davinci.svg" }
    ],
    chapters: [
      {
        title: { en: "Building on an existing logo", fr: "Partir d'un logo existant" },
        body: {
          en: "The logo already existed for this second edition, so we built a visual world mixing black and white with the logo's colours.",
          fr: "Le logo existait déjà pour cette deuxième édition : nous avons donc créé un univers graphique mêlant le noir et blanc aux couleurs du logo."
        },
        media: [
          { src: "charte-graphique-bike-and-run.webp", caption: { en: "Brand guidelines", fr: "Charte graphique" } }
        ]
      },
      {
        title: { en: "A month of campaign", fr: "Un mois de campagne" },
        body: {
          en: "We reached students for a month through posters, Instagram posts, banners and profile pictures, to encourage sign-ups to race alongside professionals.",
          fr: "Pendant un mois, nous avons communiqué auprès des étudiants avec des affiches, des posts Instagram, des bannières et des photos de profil, pour encourager les inscriptions aux côtés des professionnels."
        },
        media: [
          { src: "affiche1.webp", caption: { en: "Poster", fr: "Affiche" } },
          { src: "affiche2.webp", caption: { en: "Poster", fr: "Affiche" } },
          { src: "banniere.webp", caption: { en: "Banner", fr: "Bannière" } },
          { src: "pp.png", caption: { en: "Profile picture", fr: "Photo de profil" } }
        ]
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
    dates: "2024 - 2025",
    badge: { en: "Jury's Favorite Award", fr: "Prix coup de cœur du jury" },
    projetType: {
      en: "Student engagement project (2024-2025), Jury's Favorite Award",
      fr: "Projet d'engagement étudiant (2024-2025), Prix coup de cœur du jury"
    },
    fullDescription: {
      en: "Part'Âgé is a GATE project that teaches basic IT skills to seniors in Évry, to reduce the digital divide and support their social inclusion. We taught two groups of 10 to 15 seniors and refurbished 21 donated computers.",
      fr: "Part'Âgé est un projet GATE qui donne des cours d'informatique élémentaire aux seniors d'Évry, pour réduire la fracture numérique et favoriser leur inclusion sociale. Nous avons formé deux groupes de 10 à 15 seniors et reconditionné 21 ordinateurs donnés."
    },
    technos: [
      { name: "Figma", icon: "figma.svg" },
      { name: "PowerPoint", icon: "powerpoint.svg" },
      { name: "Google Slides", icon: "google-slides.svg" }
    ],
    chapters: [
      {
        title: { en: "Summary sheets for seniors", fr: "Des fiches pensées pour les seniors" },
        body: {
          en: "I designed a summary sheet for each IT lesson so the seniors could easily review at home. To suit this audience, I chose a very visual, clean and easy-to-read format.",
          fr: "J'ai conçu une fiche résumée pour chaque cours d'informatique, pour que les seniors puissent réviser facilement chez eux. Pour ce public, j'ai privilégié un format très visuel, épuré et simple à lire."
        },
        media: [
          { src: "fiche1.webp", caption: { en: "Summary sheet", fr: "Fiche récapitulative" } },
          { src: "fiche2.webp", caption: { en: "Summary sheet", fr: "Fiche récapitulative" } },
          { src: "fiche3.png", caption: { en: "Summary sheet", fr: "Fiche récapitulative" } }
        ]
      },
      {
        title: { en: "Presenting the project", fr: "Présenter le projet" },
        body: {
          en: "For the final presentation, I prepared slides with a strict rule: almost no text, so that visuals support and energise the talk.\n\nI also designed the final project poster, which counted towards our grade and promoted the project.",
          fr: "Pour la soutenance finale, j'ai préparé des slides avec une règle stricte : presque aucun texte, pour que les visuels portent et dynamisent la présentation orale.\n\nJ'ai aussi réalisé l'affiche finale du projet, qui comptait dans notre note et servait à le promouvoir."
        },
        media: [
          { src: "soutenance.pdf", pages: 50, caption: { en: "Final presentation slides", fr: "Support de soutenance" } },
          { src: "rapport.pdf", pages: 16, caption: { en: "Team's written report (in French)", fr: "Rapport écrit de l'équipe" } },
          { src: "affiche.webp", caption: { en: "Project poster", fr: "Affiche du projet" } }
        ]
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
      en: "For the INTv club's video content, I created animations of its logo, combining work in After Effects and DaVinci Resolve.",
      fr: "Pour les contenus vidéo du club INTv, j'ai réalisé des animations de son logo, en combinant un travail sur After Effects et sur DaVinci Resolve."
    },
    technos: [
      { name: "DaVinci Resolve", icon: "davinci.svg" },
      { name: "After Effects", icon: "ae.svg" },
      { name: "Figma", icon: "figma.svg" }
    ],
    chapters: [
      {
        title: { en: "A cyberpunk animation", fr: "Une animation cyberpunk" },
        body: {
          en: "I adapted the logo in Figma so it would blend into the background, then animated it with a cyberpunk and electro style.",
          fr: "J'ai adapté le logo sur Figma pour qu'il s'intègre au fond, puis je l'ai animé dans un style cyberpunk et électro."
        },
        media: [
          { src: "animation-intv.mp4", caption: { en: "Logo animation", fr: "Animation du logo" } }
        ]
      }
    ]
  }
];
