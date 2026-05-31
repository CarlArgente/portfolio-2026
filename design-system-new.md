# Design System Inspired by Oluwadara Emmanuel Ebeh

> Auto-extracted from `https://emmanuelebeh.dev/en` on 2026-05-31

## 1. Visual Theme & Atmosphere

Clean, minimal, and product-focused with deliberate use of whitespace.

The hero section leads with "My Skills".

**Key Characteristics:**
- Baufra as the heading font (custom web font loaded via @font-face)
- Baufra as the body font for all running text
- Light/white background (#f6f5ef) as the primary canvas
- Primary accent `#c8c19d` used for CTAs and brand highlights
- 2 shadow level(s) detected — tinted shadows
- Moderate border-radius (6px) — balanced and professional
- Tags: light, soft, monochrome, sans-serif

## 2. Color Palette & Roles

### Primary
- **Primary Accent** (`#c8c19d`) · `--color-primary`: Brand color, CTA backgrounds, link text, interactive highlights.
- **Background** (`#f6f5ef`) · `--color-bg`: Page background, primary canvas.
- **Background Secondary** (`#c8c19d`) · `--color-bg-secondary`: Cards, surfaces, alternating sections.

### Text
- **Text Primary** (`#000000`) · `--color-text`: Headings and body text.
- **Text Secondary** (`#9ca3af`) · `--color-text-secondary`: Muted text, captions, placeholders.

### Borders & Surfaces
- **Border** (`#9ca3af`) · `--color-border`: Dividers, outlines, input borders.

### Full Extracted Palette

| # | Hex | CSS Variable | Role | Area | Contrast |
|---|---|---|---|---|---|
| 1 | `#9ca3af` | `--palette-1` | section | large | text-dark |
| 2 | `#c8c19d` | `--palette-2` | block | large | text-dark |

## 3. Typography Rules

- **Heading Font:** `Baufra` (web font)
- **Body Font:** `Baufra` (web font)

### Type Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing |
|---|---|---|---|---|---|
| H2 | Baufra | 48px | 700 | 48px | -1.2px |
| H3 | Baufra | 16px | 600 | 24px | normal |
| Body | Baufra | 20px | 400 | 28px | normal |
| Small | Baufra | 14px | 500 | 20px | normal |

### Type Scale

| Token | Size | Suggested Usage |
|---|---|---|
| Display | `48px` | headings |
| H1 | `36px` | headings |
| H2 | `25px` | headings |
| H3 | `24px` | headings |
| H4 | `20px` | headings |
| Body L | `18px` | body / supporting text |
| Body | `16px` | body / supporting text |
| Small | `14px` | body / supporting text |

## 4. Component Stylings

### Primary Button

```css
.btn-primary {
  background: transparent;
  color: #000000;
  border-radius: 0px;
  padding: 0px 0px;
  font-size: 16px;
  font-weight: 400;
  border: none;
  cursor: pointer;
}
```

### Filled Button

```css
.btn-filled {
  background: transparent;
  color: #ffffff;
  border-radius: 6px;
  padding: 0px 32px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  cursor: pointer;
}
```

### Pill Button

```css
.btn-pill {
  background: transparent;
  color: #000000;
  border-radius: 33554400px;
  padding: 0px 0px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  cursor: pointer;
}
```

### Card

```css
.card {
  background: #000000;
  border-radius: 6px;
  padding: 12px;
}
```

## 5. Layout Principles

- **Base spacing unit:** `12px` — use multiples (24px, 36px, 48px, etc.)

### Spacing Scale (extracted from real elements)

| Token | Value | Role |
|---|---|---|
| spacing-1 | `12px` | element |
| spacing-2 | `24px` | card |
| spacing-3 | `4px` | element |
| spacing-4 | `6px` | element |
| spacing-5 | `72px` | section |
| spacing-6 | `10px` | element |
| spacing-7 | `8px` | element |
| spacing-8 | `16px` | element |

### Border Radius Scale

| Token | Value | Element |
|---|---|---|
| radius-button | `6px` | button |
| radius-subtle | `4px` | subtle |
| radius-button | `8px` | button |

## 6. Depth & Elevation

| Level | Shadow | Usage |
|---|---|---|
| Low | `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0...` | Cards, subtle elevation |
| Low | `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0...` | Cards, subtle elevation |


## 7. Do's and Don'ts

### Do
- Use `#f6f5ef` as the primary background color
- Use `Baufra` for all headings and `Baufra` for body text
- Use `#c8c19d` as the single dominant accent/CTA color
- Maintain `12px` as the base spacing unit — all gaps should be multiples
- Stick to grayscale + `#c8c19d` accent — avoid color overload
- Apply the shadow system for elevation — use the extracted shadow values

### Don't
- Don't use colors outside the extracted palette without justification
- Don't substitute Baufra/Baufra with generic alternatives
- Don't use irregular spacing — stick to 12px grid
- Don't use dark/black backgrounds — this is a light-themed design
- Don't add additional saturated colors beyond the primary accent
- Don't use pure black (#000000) for text — use `#000000` instead
- Don't add decorative elements not present in the original design — no badges, ribbons, banners, or ornaments unless the source site uses them
- Don't invent UI patterns the source site doesn't have — if the original has no NEW badge, don't add one just because a red is in the palette

## 8. Responsive Behavior

| Breakpoint | Width | Notes |
|---|---|---|
| Mobile | < 640px | Single column, stack sections, reduce font sizes ~80% |
| Tablet | 640–1024px | 2-column where appropriate, maintain spacing ratios |
| Desktop | 1024–1440px | Full layout as designed |
| Wide | > 1440px | Max-width container, center content |

- Touch targets: minimum 44×44px on mobile
- Maintain 12px base unit across breakpoints — only scale multipliers

## 9. Agent Prompt Guide

### Quick Color Reference

```
Background:  #f6f5ef
Text:        #000000
Accent:      #c8c19d
Border:      #9ca3af
```

### Example Prompts

1. "Build a hero section with a `#f6f5ef` background, `Baufra` heading in `#000000`, and a `#c8c19d` CTA button."
2. "Create a pricing card using background `#c8c19d`, border `#9ca3af`, `Baufra` for text, and 36px padding."
3. "Design a navigation bar — `#f6f5ef` background, `#000000` links, `#c8c19d` for active state."
4. "Build a feature grid with 3 columns, 36px gap, each card using the card component style."
5. "Create a footer with `#000000` background, `#f6f5ef` text, and 24px padding."

### Iteration Guide

1. Start with layout structure (sections, grid, spacing)
2. Apply colors from the palette — background first, then text, then accents
3. Set typography — font families, sizes from the type scale, weights
4. Add components — buttons, cards, inputs using the specs above
5. Apply border-radius consistently across all elements
6. Add shadows for depth — use the extracted shadow values, not defaults
7. Check responsive behavior — test mobile and tablet layouts
8. Final pass — verify all colors match, spacing is consistent, fonts are correct
