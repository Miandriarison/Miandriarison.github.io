# Portfolio de Nomena Léonce Miandriarison

Site statique bilingue (FR/EN) en HTML, CSS et JavaScript, sans dépendance ni étape de build.

## Mettre en ligne sur GitHub Pages (gratuit)

1. Sur GitHub, crée un dépôt nommé exactement **`Miandriarison.github.io`** (public).
2. Dépose tous les fichiers de ce dossier à la racine du dépôt (`index.html`, `style.css`, `main.js`, `README.md`, dossier `assets/`).
   - Sur le site GitHub : *Add file > Upload files*, glisse les fichiers, puis *Commit changes*.
   - Ou en ligne de commande :
     ```bash
     git init
     git add .
     git commit -m "Portfolio"
     git branch -M main
     git remote add origin https://github.com/Miandriarison/Miandriarison.github.io.git
     git push -u origin main
     ```
3. Dans le dépôt : *Settings > Pages > Source : Deploy from a branch*, branche `main`, dossier `/ (root)`, puis *Save*.
4. Après une à deux minutes, le site est en ligne sur **https://miandriarison.github.io**.

## Modifier le contenu

- **Textes en français** : directement dans `index.html`.
- **Textes en anglais** : dans l'objet `EN` en haut de `main.js`. Chaque clé correspond à un attribut `data-i18n` dans `index.html`.
- **Couleurs et polices** : variables en haut de `style.css`.
- **Images** : dossier `assets/`.

## Ajouter un projet

Copie un bloc `<article class="case case-small">` dans `index.html`, change les textes, ajoute de nouvelles clés `data-i18n` et leurs traductions dans `main.js`.
