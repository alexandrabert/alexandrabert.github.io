# Alexandra Bert · Portfolio

Site : **https://alexandrabert.github.io/**

Portfolio d'Alexandra Bert, élève ingénieure à Télécom SudParis (IP Paris), spécialisée en systèmes distribués et génie logiciel. Le site présente mes projets de développement (Spotif'INT, Safe'INT) et mes projets de design et de communication. Il est en anglais par défaut, avec une version française.

## Technologies

Vue 3, Vue Router, Vite et Tailwind CSS. Le site est publié sur GitHub Pages par une GitHub Action à chaque push sur `main` (`.github/workflows/`).

## Lancer le site en local

```bash
npm install
npm run dev      # serveur de développement
npm run build    # version de production dans dist/
```

## Modifier le contenu

| Fichier | Contenu |
|---|---|
| `src/data/projects.js` | Les projets. Chaque texte existe en anglais et en français : `{ en: "...", fr: "..." }`. `category` vaut `dev` ou `design`. |
| `src/data/profile.js` | Présentation, disponibilité, liens de contact et CV. |
| `src/i18n.js` | Libellés de l'interface et changement de langue. |
| `public/<Projet>/` | Images, PDF et vidéos de chaque projet. |
| `public/cv/Alexandra_Bert_CV.pdf` | CV public (sans numéro de téléphone). |

Pour ajouter un projet : créer un dossier dans `public/`, y mettre les médias, puis ajouter une entrée dans `projects.js`.

### Poids des médias

Pour que le site reste rapide, notamment sur mobile :
- images en **WebP** (ou JPG), 2400 px maximum sur le plus grand côté ;
- vidéos en **H.264** (MP4), 1080p maximum, quelques Mo ;
- PDF de moins de 5 Mo si possible, sinon une image d'aperçu avec un lien vers le PDF.
