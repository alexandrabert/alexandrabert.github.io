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
