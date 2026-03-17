# Portfolio 2026

A modern, distinctive Full Stack .NET Developer portfolio built with React, TypeScript, and Tailwind CSS.

## Tech Stack

- **React 18** — Modern UI library
- **TypeScript** — Type-safe JavaScript
- **Vite** — Lightning-fast build tool
- **Tailwind CSS** — Utility-first CSS framework
- **Framer Motion** — Smooth animations
- **shadcn/ui** — Accessible component library (when needed)

## Getting Started

### Prerequisites
- Node.js 16+ and npm/yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/      # React components (Header, Hero, Projects, About, Footer)
├── pages/          # Page components (future expansion)
├── lib/            # Utility functions and helpers
├── styles/         # Global styles and Tailwind config
└── main.tsx        # Entry point
```

## Design System

### Color Palette
- **Primary**: Deep slate (#0f172a) — sophisticated dark background
- **Accent**: Warm amber (#f59e0b) — electric energy and attention
- **Neutrals**: Gray scale for typography and hierarchy

### Typography
- **Display**: Syne (distinctive, bold headlines)
- **Body**: Inter (clean, readable)
- **Mono**: JetBrains Mono (code and technical details)

### Motion
- Smooth scroll-triggered reveals
- Staggered page load animations
- Hover states with subtle lift effects
- Custom scrollbar with amber accent

## Components

### Core Pages
- **Hero** — Landing section with CTA
- **Projects** — Showcase featured work with tech stacks
- **About** — Bio and skills grouped by category
- **Footer** — Contact section and social links
- **Header** — Sticky navigation

## Making It Your Own

1. Update contact links in `Footer.tsx`
2. Replace project examples in `Projects.tsx` with your actual work
3. Customize bio and skills in `About.tsx`
4. Adjust color variables in `tailwind.config.ts` if desired

## Future Enhancements

- Add blog section with MDX
- Integrate blog content
- Add contact form with email service
- Add dark/light theme toggle
- Add more interactive components with shadcn/ui

## License

MIT
