# 🚀 Monitoring Dashboard

Une plateforme d'analyse haute performance conçue avec une architecture modulaire et scalable, optimisée pour la clarté opérationnelle.

## 🛠 Stack Technique & Justifications

Le choix des technologies a été dicté par des impératifs de **performance**, de **sécurité** et de **maintenabilité**.

### ⚛️ Core Framework
* **React 18 (Vite)** : Choisi pour la rapidité du HMR (Hot Module Replacement) et l'efficacité de l'outil de build.
* **TypeScript** : Implémentation stricte pour sécuriser le flux de données. L'utilisation de **Generics** sur les composants complexes (Tables, Charts) garantit la cohérence des types.

### 🎨 UI & Visualisation
* **Material UI (MUI) v6** : Utilisation pour le système de design et la grille flexible. Personnalisation via un **thème moderne** (tokens de couleurs, arrondis 16px).
* **Recharts** : Bibliothèque de data-viz choisie pour son approche déclarative, permettant une réutilisation poussée des graphiques.
* **Lucide React** : Iconographie légère et cohérente.

---

## 🏗 Principes d'Architecture

Le projet suit des standards d'ingénierie avancés pour éliminer la dette technique dès la conception :

### 1. Atomicité & Réutilisabilité (DRY)
Tous les éléments visuels ont été refactorisés en composants génériques :
* **Base Charts** : Les graphiques (Area, Bar, Donut, Radar, Composed) sont abstraits pour accepter n'importe quel dataset via des props typées.
* **Generic Table** : Un composant unique capable de rendre n'importe quel type de donnée (Logs, Serveurs) grâce à un système de *Render Props* pour les colonnes.

### 2. Organisation du Code
* **Path Aliasing (`@/*`)** : Configuration d'alias pour des imports propres, évitant les chemins relatifs complexes.
* **Barrel Exports** : Centralisation des exports via des fichiers `index.ts` pour simplifier la structure des imports.
* **Single Source of Truth** : Les données de simulation et les configurations de colonnes sont centralisées dans `src/data/mockData.tsx`, facilitant le passage futur à une API réelle.



---

## 📁 Structure du Projet

```text
src/
├── components/
│   ├── charts/      # Graphiques génériques (BaseAreaChart, etc.)
│   └── ui/          # Composants d'interface (GenericTable, PageHeader, etc.)
├── data/            # Mock Data & Configurations de colonnes
├── layout/          # Structure globale (Sidebar, Navigation, Topbar)
├── pages/           # Vues métiers (Overview, Security, Analytics)
├── theme/           # Configuration Material UI personnalisée
├── types/           # Interfaces TypeScript globales
└── hooks/           # Logique métier réutilisable
```

---

## 🚀 Installation & Lancement

Suivez ces étapes pour configurer et lancer le projet localement.

### 1. Installation des dépendances
Utilisez votre gestionnaire de paquets préféré pour installer les modules requis.
```bash
npm install
```

### 2. Lancement du serveur de développement
Démarre l'application avec le HMR (Hot Module Replacement) activé via Vite.
```bash
npm run dev 
```

### 3. Build pour la production
Génère une version optimisée et minifiée du projet dans le dossier dist/.
```bash
npm run build
```

### 4. Aperçu du build (Preview)
Pour tester le rendu final de production localement après le build.
```bash
npm run preview
```
