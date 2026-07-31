# Punit Kumar — Portfolio

A premium, animated, fully responsive personal portfolio built with React, TypeScript, Tailwind CSS and Framer Motion.

## Stack

- **React 18 + Vite** — fast dev server, optimized production build
- **TypeScript** — typed components and data
- **Tailwind CSS** — custom design tokens (colors, fonts, gradients) in `tailwind.config.js`
- **Framer Motion** — page-load, scroll-reveal and hover animations
- **React Router** — client-side routing (`/` and a 404 fallback)
- **Lucide React** — icon set

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

```bash
npm run build
npm run preview
```

## Project structure

```text
src/
  components/     One component per section (Hero, About, Skills, Projects, ...)
  data/profile.ts All editable content: name, skills, projects, experience, certifications
  hooks/          useCountUp — animated stat numbers
  App.tsx         Routes, code-splitting, loader, cursor
  index.css       Tailwind layers + reusable utility classes (glass, gradient-text, buttons)

public/
  favicon.svg
  robots.txt
  resume-instructions.txt
```

## Editing your content

Everything specific to you—name, headline, skills, projects, experience, certifications, and social links—lives in **`src/data/profile.ts`**. Update the data there and every section updates automatically.

### Adding your resume

Place your résumé PDF in:

```text
public/resume.pdf
```

### Adding project images

Add images to:

```text
public/projects/
```

and replace the placeholder in `src/components/Projects.tsx` with an `<img>` element.

### Contact form

The contact form currently simulates sending. Connect it to a backend such as Formspree or your own API.

## SEO

Update the Open Graph image path after adding:

```text
public/og-image.png
```

## Performance

- Lazy-loaded sections using `React.lazy`
- Optimized Vite chunk splitting
- Reduced-motion support

## Deploying to Vercel

### Option A — CLI

```bash
npm install -g vercel
vercel login
vercel
vercel --prod
```

### Option B — GitHub

1. Push this repository to GitHub.
2. Import it into Vercel.
3. Vercel will detect the Vite project automatically.
4. Every push to `main` will trigger a new deployment.