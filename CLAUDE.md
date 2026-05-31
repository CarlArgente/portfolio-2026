# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server
npm run build      # Type-check + build for production (tsc && vite build)
npm run preview    # Preview production build
npm run lint       # ESLint with zero warnings policy
```

No test suite is configured.

## Architecture

Single-page portfolio built with React 18 + TypeScript + Vite + Tailwind CSS + Framer Motion.

**Data layer:** All content (bio, projects, skills, experience, education, testimonials) lives in `src/data/constants.js`. This is the single source of truth — edit here to update any section. TypeScript types for these exports are declared in `src/data/constants.d.ts`; update that file if you add or rename fields in `constants.js`.

**Component structure:** Each section is a standalone component in `src/components/`. They are assembled in order inside `src/App.tsx`: `Header → Hero → Projects → About → Experience → Education → Testimonials → Footer`.

**Path alias:** `@/` maps to `src/` (configured in `vite.config.ts`).

## Design System

The portfolio uses a neo-brutalist aesthetic. Key conventions to maintain:

- **Colors** (defined in `tailwind.config.ts`): Use `base-*` tokens for backgrounds/text, `accent-*` tokens (violet, pink, yellow, mint) for highlights.
- **Fonts**: `font-display` (Outfit) for headings, `font-body` (Plus Jakarta Sans) for body text, `font-mono` (JetBrains Mono) for code.
- **Brutalist shadow pattern**: `shadow-[4px_4px_0_0_#1e293b]` with `border-2 border-slate-800` — used consistently on cards and interactive elements.
- **Motion**: Framer Motion for entrance animations; keep animations purposeful, not decorative.
- **Background shapes**: Fixed decorative blobs are rendered in `App.tsx` with `pointer-events-none fixed inset-0 -z-10`.

## Frontend Design Skill

For UI work, use the `/frontend-design` skill (see `skills/front-end-skill.md`). Avoid generic fonts (Inter, Roboto), predictable layouts, and scattered micro-interactions. Commit to the existing neo-brutalist direction.
