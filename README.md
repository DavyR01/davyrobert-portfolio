<!-- ![OOOOOK](https://komarev.com/ghpvc/?username=?) -->

# 🚀 Portfolio - Davy ROBERT
## 💻 Concepteur Développeur d’Applications Web

> Ce portfolio personnel moderne a été conçu avec Next.js, TypeScript et Tailwind CSS et est dédié à vous présenter mon parcours professionnel et compétences techniques en tant que Concepteur Développeur d'Applications Web.

> Vous y retrouverez l'ensemble de mes projets et de mes différentes expériences. Pour discuter de mon parcours, de vos réels besoins, et de comment je peux y contribuer en vous apportant un maximum de valeur, prenez contact avec moi pour en discuter. 

> Pour me joindre, rendez-vous directement sur mon [LinkedIn](https://linkedin.com/in/davy-robert) en m'envoyant un message ou sur mon [Portfolio](https://davyrobert.fr) pour plus de détails.

## 📋 Table des Matières

- [🚀 Portfolio - Davy ROBERT](#-portfolio---davy-robert)
  - [💻 Concepteur Développeur d’Applications Web](#-concepteur-développeur-dapplications-web--mobile--agile--devops)
  - [📋 Table des Matières](#-table-des-matières)
  - [🛠 Technologies Utilisées](#-technologies-utilisées)
    - [Frontend](#frontend)
    - [Outils \& Développement](#outils--développement)
    - [Déploiement](#déploiement)
  - [✨ Fonctionnalités en détail](#-fonctionnalités-en-détail)
    - [🌐 Internationalisation (i18n)](#-internationalisation-i18n)
    - [🎨 Design \& Interface](#-design--interface)
    - [📱 Composants \& Sections](#-composants--sections)
    - [🔧 Fonctionnalités Techniques](#-fonctionnalités-techniques)
  - [🚀 Installation et Démarrage](#-installation-et-démarrage)
    - [Prérequis](#prérequis)
    - [Installation](#installation)
    - [Scripts Disponibles](#scripts-disponibles)
  - [📁 Structure du Projet](#-structure-du-projet)
  - [🌐 Déploiement](#-déploiement)
    - [Déploiement sur Vercel](#déploiement-sur-vercel)
  - [🤝 Contribution](#-contribution)
  - [📄 Licence](#-licence)
  - [📞 Comment prendre contact avec moi ?](#-comment-prendre-contact-avec-moi-)


## 🛠 Technologies Utilisées

### Frontend
- **[Next.js 14](https://nextjs.org/)** - Framework React full-stack
- **[TypeScript](https://www.typescriptlang.org/)** - Typage statique JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utilitaire
- **[React](https://reactjs.org/)** - Bibliothèque JavaScript pour l'interface
- **[Next-intl](https://next-intl-docs.vercel.app/)** - Internationalisation

### Outils & Développement
- **[ESLint](https://eslint.org/)** - Linting du code
- **[Prettier](https://prettier.io/)** - Formatage du code
- **[PostCSS](https://postcss.org/)** - Traitement CSS
- **[Autoprefixer](https://github.com/postcss/autoprefixer)** - Préfixes CSS automatiques

### Déploiement
- **[Vercel](https://vercel.com/)** - Plateforme de déploiement
- **[Git](https://git-scm.com/)** - Contrôle de version


## ✨ Fonctionnalités en détail

### 🌐 Internationalisation (i18n)
- Support bilingue Français/Anglais
- Détection automatique de la langue
- Navigation fluide entre les langues
- Persistance du choix de langue

### 🎨 Design & Interface
- **Thème Sombre/Clair** avec persistance
- **Design Responsive** optimisé pour mobile, tablette et desktop
- **Animations fluides** et micro-interactions
- **Typographie optimisée** avec Google Fonts
- **Interface moderne** et épurée

### 📱 Composants & Sections
- **Barre de navigation** avec changement de langue
- **Section Hero** avec présentation personnelle
- **Badge de disponibilité** dynamique
- **Compétences techniques** avec icônes
- **Projets détaillés** avec pages individuelles
- **Formulaire de contact** fonctionnel
- **Pages d'erreur** personnalisées

### 🔧 Fonctionnalités Techniques
- **SEO optimisé** avec métadonnées dynamiques
- **Performance optimisée** avec Next.js
- **Code modulaire** et maintenable
- **TypeScript** pour la sécurité du typage
- **Gestion d'état** efficace

## 🚀 Installation et Démarrage

### Prérequis
- Node.js 18.0 ou supérieur
- npm, yarn, pnpm ou bun
- Git

### Installation

1. **Cloner le dépôt**
   ```bash
   git clone https://github.com/votre-username/davyrobert-portfolio.git
   cd davyrobert-portfolio
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Démarrer le serveur de développement**
   ```bash
   npm run dev
   ```

4. **Ouvrir le navigateur**

   Se rendre sur l'adresse [http://localhost:3000](http://localhost:3000) pour accéder au portfolio.

### Scripts Disponibles

```bash
npm run dev          # Démarrer le serveur de développement
npm run build        # Construire l'application pour la production
npm run start        # Démarrer le serveur de production
npm run lint         # Exécuter le linting du code
```

## 📁 Structure du Projet

```
src/
├── app/                          # Structure de l'application Next.js
│   ├── [locale]/                 # Pages internationalisées
│   │   ├── layout.tsx            # Layout pour les pages localisées
│   │   ├── page.tsx              # Page d'accueil
│   │   └── projects/             # Pages des projets
│   │       └── [slug]/           # Pages individuelles des projets
│   │           └── page.tsx      # Page de détail du projet
│   ├── components/               # Composants de l'application
│   ├── layout.tsx                # Layout global
│   ├── not-found.tsx             # Page 404 globale
│   ├── page.tsx                  # Page d'accueil globale
│   └── HomeContent.tsx           # Contenu de la page d'accueil
├── context/                      # Contextes React
│   └── ThemeContext.tsx          # Contexte de thème
├── datas/                        # Données du portfolio
├── fonts/                        # Fichiers de polices
├── i18n/                         # Configuration i18n
├── messages/                     # Fichiers de traduction
│   ├── fr.json                   # Traductions françaises
│   └── en.json                   # Traductions anglaises
├── middleware.ts                 # Middleware pour le routing
├── styles/                       # Styles CSS
├── types/                        # Définitions de types 
└── utils/                        # Utilitaires
```


## 🌐 Déploiement

### Déploiement sur Vercel

Le projet est déployé sur Vercel par un système de CI/CD auomatisé qui s'exécute à chaque push.

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour toutes suggestions ou pistes d'améliorations, n'hésitez pas à créer une Pull Request.

## 📄 Licence

Ce projet est un projet personnel dans le but de démontrer mes compétences et mon expérience.

## 📞 Comment prendre contact avec moi ?

- **Email** : [contact@davyrobert.fr](mailto:contact@davyrobert.fr)
- **LinkedIn** : [linkedin.com/in/davy-robert](https://linkedin.com/in/davy-robert)
- **GitHub** : [github.com/davyr01](https://github.com/davyr01)
- **Portfolio** : [https://davyrobert.fr](https://davyrobert.fr)

---

**Développé avec ❤️ par [DavyR01](https://github.com/DavyR01)**
