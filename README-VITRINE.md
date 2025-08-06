# 🏋️ La Forge Fitness - Vitrine Temporaire

## 📋 Description
Cette vitrine temporaire remplace le site React principal pour afficher un message de "site en construction" via GitHub Pages.

## 🚀 Déploiement sur GitHub Pages

### Option 1 : Branche dédiée (Recommandée)
1. Créez une nouvelle branche : `git checkout -b vitrine-temporaire`
2. Poussez cette branche : `git push origin vitrine-temporaire`
3. Dans les paramètres GitHub du repo :
   - Allez dans "Settings" > "Pages"
   - Source : "Deploy from a branch"
   - Branch : `vitrine-temporaire`
   - Folder : `/ (root)`

### Option 2 : Branche principale
1. Remplacez temporairement le contenu de la branche `main`
2. Les fichiers `index.html` et `.nojekyll` seront automatiquement utilisés

## 📁 Fichiers inclus
- `index.html` - La vitrine temporaire
- `.nojekyll` - Désactive Jekyll pour GitHub Pages
- `public/assets/Logo-Typo-La-Forge-Final.png` - Logo de la salle

## 🎨 Personnalisation
- **Email de contact** : Modifiez `mailto:contact@laforgefitness.com` dans `index.html`
- **Liens sociaux** : Remplacez les `#` par vos vrais liens
- **Couleurs** : Modifiez les variables CSS dans la section `<style>`

## 🔄 Retour au site React
Pour revenir au site React principal :
1. Remettez les fichiers React dans la branche principale
2. Ou changez la source GitHub Pages vers la branche contenant le site React

## 📱 Compatibilité
- ✅ Responsive design
- ✅ Compatible tous navigateurs
- ✅ Optimisé mobile
- ✅ Animations CSS modernes 