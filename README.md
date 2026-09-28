# Aman Patel — Portfolio

A premium, art-directed personal portfolio site for **Aman Patel** — software engineer specializing in resilient backend systems and distributed platforms. Built with a modern React stack and a design system inspired by Apple, Linear, and Vercel.

## ✨ Highlights

- **Dark-first premium aesthetic** with a curated violet → cyan → rose accent palette, layered glass surfaces, and animated aurora backgrounds
- **Space Grotesk + Inter** typography for a strong editorial voice
- **Framer Motion** driven micro-interactions: masked heading reveals, staggered word entrances, magnetic buttons, mouse-following spotlight, spotlight cards, and floating parallax blobs
- **Bento layouts** for skills and highlights with mixed card sizes
- **Sticky glass navigation** that transforms as you scroll, with active-section indicator
- **Timeline experience section** with subtle scroll animations
- **Editorial project cards** with animated gradient stages and per-project accent tokens
- **Marquee tech ticker** for scannable skill overview
- **Prefers-reduced-motion** support throughout
- Fully responsive from mobile → ultra-wide desktop, keyboard accessible, semantic HTML

## 🧱 Tech Stack

- [Vite](https://vitejs.dev/) + [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 3](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [lucide-react](https://lucide.dev/) icons
- Google Fonts: Space Grotesk, Inter, JetBrains Mono

## 🚀 Getting Started

```bash
# 1. install dependencies
npm install

# 2. run the dev server (http://localhost:5173)
npm run dev

# 3. type-check + production build
npm run build

# 4. preview the production build locally
npm run preview
```

> Requires Node.js 18+ (Node 20 or 22 recommended).

## 📁 Project Structure

```
my-portfolio/
├── public/
│   ├── favicon.svg
│   └── resume/               # drop your résumé PDF here as Aman-Patel-Resume.pdf
├── src/
│   ├── components/
│   │   ├── effects/          # Aurora background, mouse spotlight
│   │   ├── layout/           # Navbar, Footer
│   │   └── ui/               # Reveal, AnimatedHeading, SpotlightCard, MagneticButton
│   ├── data/
│   │   └── portfolio.ts      # ← single source of truth for résumé-driven content
│   ├── hooks/                # useTheme, useScrollProgress
│   ├── sections/             # Hero, About, Skills, Experience, Projects, Highlights, Contact
│   ├── styles/
│   │   └── globals.css       # Tailwind layers + design tokens
│   ├── utils/                # cn helper
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── vite.config.ts
└── package.json
```

## ✏️ Updating Content

All résumé-derived content (name, role, positioning statement, skills, experience, projects, education, highlights, and contact info) lives in a **single file**:

- `src/data/portfolio.ts`

Edit that file to keep the site in sync with your latest résumé — the components read from it directly.

## 📄 Résumé Download

The hero includes a **Download résumé** button that points to `/resume/Aman-Patel-Resume.pdf`. Drop the file into `public/resume/` and it will be served automatically.

## 🌗 Theming

- Ships **dark-first** with a smooth animated theme toggle in the navbar
- Design tokens are defined as CSS custom properties in [globals.css](src/styles/globals.css)
- Tailwind palette lives in [tailwind.config.js](tailwind.config.js)

## ♿ Accessibility & Performance

- Semantic landmarks (`<header>`, `<main>`, `<footer>`, `<nav>`, `<section>`), skip-friendly headings
- Visible focus rings, ARIA labels on icon-only controls
- `prefers-reduced-motion` disables non-essential animations
- Transform/opacity-based animations, throttled scroll listeners via `requestAnimationFrame`
- Google Fonts preconnected + `display=swap`

## 📜 License

Personal portfolio — © Aman Patel. Feel free to use the code as inspiration for your own site; please do not reuse the personal content.
