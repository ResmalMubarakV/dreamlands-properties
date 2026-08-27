<div align="center">

# 🏰 Dreamlands Properties

### *Crafting Luxury Living & Bespoke Real Estate in Palakkad, Kerala*

[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-13.0-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Deployment](https://img.shields.io/badge/GitHub_Pages-Deployed-22c55e?style=for-the-badge&logo=github&logoColor=white)](https://pages.github.com/)

[**Live Demo**](https://resmalmubarakv.github.io/dreamlands-properties) • [**Explore Projects**](#-key-features) • [**Tech Stack**](#%EF%B8%8F-tech-stack--architecture) • [**Contact Us**](#-get-in-touch)

---

</div>

## 📌 Overview

**Dreamlands Properties** is a premier real estate showcase and client engagement platform dedicated to luxury property development, bespoke villa construction, and premium land acquisition across **Palakkad, Kerala**. 

Designed with a rich, dark-mode luxury aesthetic (`#0a0b0d` obsidian background accented with warm `#c5a880` champagne gold), the application presents an immersive digital experience featuring interactive project walkthroughs, location insights, cinematic lightbox galleries, and direct WhatsApp enquiry workflows.

> [!NOTE]  
> Palakkad is one of Kerala's fastest-growing residential and industrial hubs. Dreamlands Properties bridges traditional Kerala architectural grandeur with state-of-the-art sustainable engineering.

---

## ✨ Key Features

- 💎 **Luxury Property Showcase**: Browse curated villa projects, eco-estates, and residential plots complete with high-res render galleries, pricing estimates, floor areas, and key amenities.
- 🔍 **Interactive Project Modal**: Deep-dive into specific project details, architectural specs, blueprint highlights, and location advantage maps.
- 🛠️ **Comprehensive Services Hub**: 
  - *Custom Villa Construction* (Turnkey engineering & construction)
  - *Plot Acquisition & Land Development* (K-RERA verified clear title land)
  - *Architectural & Interior Design* (Contemporary & Traditional Kerala Fusion)
  - *Property Management & Legal Assistance* (End-to-end documentation)
- 📍 **Palakkad Regional Focus**: Dedicated section featuring top investment corridors including Kanjikode Industrial Belt, Kalpathy Heritage Corridor, Yakkara Town Extension, and Malampuzha Foothills.
- 📸 **Cinematic Media Lightbox**: High-definition image showcase with category filtering (Villas, Interiors, Progress, Exteriors).
- 💬 **Instant WhatsApp & Direct Enquiry**: Seamless inquiry modal pre-populating property selection and triggering real-time WhatsApp messaging (`+91 6282844739`).
- ⚡ **Ultra-Fast Performance**: Built on React 19 + Vite 8 with Framer Motion animations and responsive glassmorphism UI.

---

## 🛠️ Tech Stack & Architecture

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend Framework** | `React 19` | Modern UI component rendering |
| **Build Tooling** | `Vite 8` | High-performance dev server & production bundler |
| **Language** | `TypeScript 6` | End-to-end type safety and interface definitions |
| **Styling** | `Tailwind CSS v4` | Utility-first CSS framework with custom luxury tokens |
| **Animations** | `Framer Motion 13` | Micro-interactions, modal transitions & scroll triggers |
| **Routing** | `React Router 7` | Smooth client-side route navigation |
| **Icons** | `Lucide React` | Clean visual icon library |
| **Code Quality** | `Oxlint` | Ultra-fast JS/TS linter |
| **Deployment** | `gh-pages` | Automated deployment pipeline to GitHub Pages |

---

## 📁 Repository Structure

```
dreamlandsproperties/
├── public/                 # Static assets, favicon, sitemap & robots.txt
├── src/
│   ├── assets/             # Brand logos & media assets
│   ├── components/         # Modular React UI components
│   │   ├── Header.tsx           # Main header navigation bar
│   │   ├── Hero.tsx             # High-impact hero section
│   │   ├── BrandIntroduction.tsx# Brand vision & legacy statement
│   │   ├── FeaturedProjects.tsx # Filterable project portfolio grid
│   │   ├── PropertyCategory.tsx # Services & property types grid
│   │   ├── WhyDreamlands.tsx    # Value proposition & trust pillars
│   │   ├── PalakkadSection.tsx  # Strategic location breakdown
│   │   ├── Gallery.tsx          # Media gallery with lightbox preview
│   │   ├── Process.tsx          # 4-Step home building process
│   │   ├── AboutCompany.tsx     # Company story & leadership note
│   │   ├── LeadershipTeam.tsx   # Executive & engineering team
│   │   ├── TrustSection.tsx     # K-RERA compliance & guarantees
│   │   ├── EnquirySection.tsx   # Interactive booking & contact form
│   │   ├── ProjectModal.tsx     # Project details viewport modal
│   │   └── Footer.tsx           # Comprehensive footer links
│   ├── data/               # Structured data stores & types
│   │   ├── projects.ts          # Project portfolio list & metadata
│   │   ├── categories.ts        # Real estate service categories
│   │   ├── gallery.ts           # Media lightbox collection
│   │   ├── palakkadLocations.ts # Geographic location highlights
│   │   ├── process.ts           # Building process milestones
│   │   ├── whyUs.ts             # Company value points
│   │   └── trustPrinciples.ts   # Core principles & commitments
│   ├── App.tsx             # Root application orchestrator
│   ├── index.css           # Global Tailwind CSS imports & theme directives
│   └── main.tsx            # Application entry point
├── dist/                   # Production build output
├── package.json            # Project dependencies and script commands
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite configuration
```

---

## 🚀 Getting Started

Follow these steps to run Dreamlands Properties locally on your machine.

### Prerequisites

- **Node.js** (v18.0.0 or higher recommended)
- **npm** (v9.0.0 or higher)

### 1. Clone the Repository

```bash
git clone https://github.com/ResmalMubarakV/dreamlands-properties.git
cd dreamlandsproperties
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

---

## 📜 Available Scripts

In the project directory, you can run:

- `npm run dev` — Launches the local Vite development server with HMR.
- `npm run build` — Runs TypeScript type-checks and compiles the production bundle into `dist/`.
- `npm run preview` — Locally previews the built production application in `dist/`.
- `npm run lint` — Runs `oxlint` to check for syntax and style issues.
- `npm run deploy` — Compiles the app and pushes the output to the `gh-pages` branch.

---

## 📍 Geographic Coverage (Palakkad Region)

Dreamlands Properties actively develops luxury residential projects and land across:

- **Kanjikode Corridor**: Industrial & residential growth zone near national highway.
- **Kalpathy Heritage Quarter**: Traditional cultural preserve with modern access.
- **Yakkara & Fort Area**: Prime urban city center living.
- **Pudussery & Olavakkode**: Rapidly expanding suburban villa enclaves.
- **Malampuzha Foothills**: Eco-friendly scenic living spaces.

---

## 📞 Get In Touch

Have inquiries about land availability, villa pricing, or custom construction?

- 📍 **Office Address**: Palakkad, Kerala 678001, India
- 📞 **Direct Phone / WhatsApp**: [+91 62828 44739](https://wa.me/916282844739)
- ✉️ **Email**: info@dreamlandsproperties.com

---

<div align="center">

Made with ❤️ for **Dreamlands Properties** • *Constructing Dreams with Integrity & Elegance*

</div>
