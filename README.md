# Roadmap — DevOps Telco Cloud (Interactive + SVG)

Ce dépôt contient:
- `roadmap-telco-devops-cloud.svg` — infographie statique prête à l'emploi
- `roadmap.json` — données de la version interactive
- `script.js` — génération du SVG interactif à partir du JSON (cartes cliquables)
- `index.html` — page d'accueil affichant la version interactive
- `.github/workflows/validate.yml` — validation JSON automatique

Utilisation:
- Ouvrir `index.html` pour voir la version interactive (les cartes ouvrent leur 1er lien).
- Éditer `roadmap.json` pour ajouter/mettre à jour les cartes (titres, descriptions, liens, positions).
- Pour publier via GitHub Pages: Settings → Pages → Branch: main, Folder: /(root).
  URL: https://taoufikbo.github.io/BlogTaoufik/

Exports:
- Pour PNG HD à partir du SVG statique:
  - Inkscape: `inkscape -w 4000 -h 8000 roadmap-telco-devops-cloud.svg -o roadmap.png`
  - rsvg-convert: `rsvg-convert -w 4000 -h 8000 roadmap-telco-devops-cloud.svg -o roadmap.png`