# 💪 La Forge Fitness - Site Web

Site vitrine moderne pour La Forge Fitness, conçu avec React, Next.js, TypeScript et Tailwind CSS.

## 🎨 Charte Visuelle

- **Typographie** : Trajan Pro (titres) + Inter (texte)
- **Palette** : Fond noir, textes blancs, accents orange vif (#FF4500)
- **UI** : Boutons avec animations hover, design clair et contrasté
- **Animations** : Framer Motion pour les transitions fluides

## 🏗️ Architecture

```
src/
├── components/
│   ├── Header.tsx          # Navigation fixe avec logo
│   ├── Hero.tsx           # Section héro avec image full-width
│   ├── Concept.tsx        # Présentation de la philosophie
│   ├── Services.tsx       # Services et équipements
│   ├── Pricing.tsx        # Plans d'abonnement (+ Desi+)
│   └── Footer.tsx         # Footer avec réseaux sociaux
├── pages/
│   ├── _app.tsx          # Configuration app Next.js
│   └── index.tsx         # Page principale
├── styles/
│   └── globals.css       # Styles Tailwind + custom
└── types/
    └── desi-plus.d.ts    # Types pour intégration Desi+
```

## 🚀 Installation et Démarrage

### Prérequis
- Node.js 18+ 
- npm ou yarn

### Setup Initial

1. **Installation des dépendances**
```bash
npm install
```

2. **Lancement en développement**
```bash
npm run dev
```

Le site sera disponible sur [http://localhost:3000](http://localhost:3000)

### Autres commandes

```bash
# Build de production
npm run build

# Démarrage production
npm start

# Linting
npm run lint

# Type checking
npm run type-check
```

## 🎯 Fonctionnalités

### ✅ Implémentées
- [x] Design responsive (mobile-first)
- [x] Header avec navigation smooth scroll
- [x] Hero section avec animations
- [x] Section concept avec philosophie
- [x] Services avec cartes interactives
- [x] Plans tarifaires avec toggle mensuel/annuel
- [x] Footer complet avec réseaux sociaux
- [x] Animations Framer Motion
- [x] Optimisation SEO (meta tags, Open Graph)
- [x] Configuration Tailwind personnalisée
- [x] TypeScript strict mode

### 🔄 À intégrer
- [ ] Système d'abonnement Desi+
- [ ] Formulaires de contact
- [ ] Galerie photos/vidéos
- [ ] Blog/actualités
- [ ] Système de réservation
- [ ] Tests E2E (Cypress/Playwright)

## 🎨 Customisation

### Couleurs
Modifiez la palette dans `tailwind.config.js` :
```js
colors: {
  primary: {
    DEFAULT: '#FF4500', // Orange principal
    // ... autres nuances
  }
}
```

### Fonts
Pour utiliser Trajan Pro, ajoutez votre kit Adobe Fonts dans `globals.css` :
```css
@import url('https://use.typekit.net/YOUR-KIT-ID.css');
```

## 🔧 Intégration Desi+

L'intégration du système d'abonnement Desi+ est préparée dans :
- `src/types/desi-plus.d.ts` - Types TypeScript
- `src/components/Pricing.tsx` - Wrapper de composants

### Configuration
```tsx
import { PricingTable, SubscribeForm } from 'desi-plus';

// Dans votre composant
<PricingTable plan="mensuel" />
<SubscribeForm planId="forge" onSuccess={handleSuccess} />
```

## 🚀 Déploiement

### Vercel (Recommandé)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Export Statique
```bash
# Décommenter dans next.config.js :
# output: 'export'

npm run build
# Files in /out
```

## 📱 Responsive Design

- **Mobile** : 320px - 768px
- **Tablet** : 768px - 1024px  
- **Desktop** : 1024px+

Tous les composants sont optimisés mobile-first avec Tailwind CSS.

## 🎬 Références Visuelles

- **Base inspiration** : [Fitness Park - WordPress Template](https://themeforest.net/item/fitness-park-gym-fitness-wordpress-theme/28834402)
- **Version idéale** : [Dribbble - Landing Page Xenon](https://dribbble.com/shots/15562276-Landing-Page-Xenon)

## 📞 Support

Pour toute question concernant le développement :
- Consulter la documentation Next.js
- Vérifier la configuration Tailwind
- Tester l'intégration Desi+ en sandbox

---

**La Forge Fitness** - Forgez votre corps, sculptez votre esprit ! 💪 