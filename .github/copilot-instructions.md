# Portfolio-2026 AI Assistant Guidelines

## Project Overview

**Portfolio-2026** is a showcase project for distinctive, production-grade frontend interfaces and web design. This workspace uses a custom **frontend-design** skill that guides creation of visually memorable, intentionally designed web components and applications.

## Frontend Design Workflow

When building frontend components, pages, or interfaces:

1. **Use the frontend-design skill** — Type `/frontend-design` or describe the UI you want to build. This skill provides:
   - Design thinking framework (purpose, tone, constraints, differentiation)
   - Aesthetics guidelines (typography, color, motion, spatial composition, backgrounds)
   - Anti-patterns: Avoid generic AI-generated aesthetics, overused font families (Inter, Roboto, Arial), clichéd color schemes, and cookie-cutter layouts

2. **Commit to a bold aesthetic direction** — Pick one: brutally minimal, maximalist, retro-futuristic, organic, luxury, playful, editorial, brutalist, art deco, soft/pastel, industrial, etc. Intentionality > intensity.

3. **Implement working code** — Production-grade and functional, with visual sophistication. Match implementation complexity to vision (maximalist designs need elaborate animations; minimalist designs need restrained precision).

4. **Avoid "AI slop"** — Generic fonts, predictable layouts, lack of context-specific character. Each design should feel genuinely designed for its specific purpose.

## Code Style & Standards

- **Frontend Tech Stack**: HTML/CSS/JavaScript, React, Vue, or other modern frameworks welcomed
- **Production-ready**: Code must be functional, optimized, and ready to deploy
- **Semantic HTML**: Prefer semantic elements over divs
- **CSS Architecture**: Use CSS variables for theme consistency; avoid inline styles where possible
- **Accessibility**: Design with WCAG guidelines in mind (semantic markup, color contrast, keyboard navigation)

## Architecture & Conventions

- **Skills**: Domain-specific workflows live in `skills/`
- **Components** (future): Frontend components will live in `src/components/` using a consistent naming convention
- **Styling**: Use CSS modules, Tailwind, or CSS-in-JS—document the choice in project config

## Build & Deployment

When setting up the project:
- Create `package.json` for dependency management
- Define build scripts: `npm run build`, `npm run dev`, `npm run preview`
- Include accessibility and design testing tools if applicable

## Design Principles (Quick Reference)

See [skills/front-end-skill.md](../skills/front-end-skill.md) for full design guidelines. Key points:

- **Typography**: Distinctive, characterful fonts (avoid generics); pair display + body fonts
- **Color**: Cohesive palette; dominant colors + sharp accents outperform timid schemes
- **Motion**: CSS-only or Motion library (React); prioritize high-impact moments over scattered micro-interactions
- **Composition**: Unexpected layouts, asymmetry, overlap, generous negative space or controlled density
- **Details**: Gradients, textures, patterns, layered transparencies, custom cursors, grain overlays

## When to Ask Questions

- Purpose & audience of the interface you're building
- Specific aesthetic direction preferences
- Technical constraints or framework requirements
- Revision guidance or refinement requests

The AI assistant will ask clarifying questions or suggest bold directions if constraints are vague.
