<div align="center">

# Punit Kumar — Portfolio

A premium, animated, fully responsive personal portfolio built with React, TypeScript, Tailwind CSS, and Framer Motion.

</div>

---

## Overview

This repository contains the source code for Punit Kumar's personal portfolio website — a fast, animated, and fully responsive single-page application showcasing skills, projects, experience, and certifications.

## ✨ Features

- **Smooth animations** — page-load, scroll-reveal, and hover interactions powered by Framer Motion
- **Fully responsive** — optimized layouts across mobile, tablet, and desktop
- **Type-safe** — written entirely in TypeScript for reliability and maintainability
- **Centralized content** — all personal data lives in a single, easy-to-edit file
- **Performance-optimized** — lazy-loaded sections, optimized chunk splitting, and reduced-motion support
- **Client-side routing** — powered by React Router, including a custom 404 fallback

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| **React 18 + Vite** | Fast dev server and optimized production builds |
| **TypeScript** | Typed components and data structures |
| **Tailwind CSS** | Custom design tokens (colors, fonts, gradients) |
| **Framer Motion** | Page-load, scroll-reveal, and hover animations |
| **React Router** | Client-side routing |
| **Lucide React** | Icon set |

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- npm

### Installation

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

### Production Build

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```text
src/
├── components/       One component per section (Hero, About, Skills, Projects, ...)
├── data/
│   └── profile.ts    All editable content: name, skills, projects, experience, certifications
├── hooks/
│   └── useCountUp     Animated stat numbers
├── App.tsx            Routes, code-splitting, loader, cursor
└── index.css          Tailwind layers + reusable utility classes (glass, gradient-text, buttons)

public/
├── favicon.svg
├── robots.txt
└── resume-instructions.txt
```

## ✏️ Editing Your Content

Everything specific to you — name, headline, skills, projects, experience, certifications, and social links — lives in **`src/data/profile.ts`**. Update the data there and every section updates automatically.

### Adding Your Résumé

Place your résumé PDF at:

```text
public/resume.pdf
```

### Adding Project Images

Add images to:

```text
public/projects/
```

Then replace the placeholder in `src/components/Projects.tsx` with an `<img>` element.

### Contact Form

The contact form currently simulates sending. Connect it to a backend such as [Formspree](https://formspree.io/) or your own API to enable real submissions.

## 🔍 SEO

Update the Open Graph image path after adding your image at:

```text
public/og-image.png
```

## ⚡ Performance

- Lazy-loaded sections using `React.lazy`
- Optimized Vite chunk splitting
- Reduced-motion support for accessibility

## ☁️ Deploying to Vercel

### Option A — CLI

```bash
npm install -g vercel
vercel login
vercel
vercel --prod
```

### Option B — GitHub

1. Push this repository to GitHub.
2. Import it into [Vercel](https://vercel.com/new).
3. Vercel will automatically detect the Vite project.
4. Every push to `main` triggers a new deployment.

## 📄 License

This project is personal portfolio source code. Feel free to fork and adapt the structure for your own portfolio, but please replace all personal content and assets with your own.

---

<div align="center">
Built with ❤️ by Punit Kumar
</div>
