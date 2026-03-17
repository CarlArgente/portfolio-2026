# Portfolio Content Guide

All portfolio content is centralized in **`src/data/portfolio.json`**. Edit this single file to update your entire portfolio without touching component code.

## Quick Edit Guide

### 📄 Metadata
```json
"metadata": {
  "name": "Carl Argente",
  "title": "Full Stack .NET Developer",
  "email": "hello@example.com"
}
```
Update your name, title, and contact email here.

---

### 🧭 Navigation Links
```json
"navigation": [
  "Home",
  "Projects",
  "About",
  "Contact"
]
```
Edit this array to add/remove/rename navigation items.

---

### 🎯 Hero Section
```json
"hero": {
  "title": "Full Stack",
  "titleHighlight": ".NET",
  "subtitle": "Developer",
  "description": "Your tagline here...",
  "ctas": [
    {
      "label": "View My Work",
      "href": "#projects",
      "variant": "primary"    // or "secondary"
    }
  ]
}
```

---

### 💼 Projects Section
```json
"projects": {
  "title": "Featured Projects",
  "subtitle": "Showcase of my recent work",
  "items": [
    {
      "title": "Project Name",
      "description": "What does it do?",
      "tags": ["Tech1", "Tech2", "Tech3"],
      "links": {
        "demo": "https://...",     // Optional
        "github": "https://..."    // Optional
      }
    }
  ]
}
```
Add or remove projects here. Both `demo` and `github` links are optional.

---

### 👤 About Section
```json
"about": {
  "title": "About Me",
  "biography": [
    "First paragraph...",
    "Second paragraph...",
    "Third paragraph..."
  ],
  "skills": {
    "Backend": ["C#", "ASP.NET Core", ...],
    "Frontend": ["React", "TypeScript", ...],
    "Tools": ["Git", "Docker", ...]
  }
}
```
- Add/remove bio paragraphs in the `biography` array
- Add/remove skill categories (Backend, Frontend, etc.)
- Add/remove individual skills within each category

---

### 📞 Footer / Contact Section
```json
"footer": {
  "cta": {
    "title": "Let's Work Together",
    "description": "Your pitch here...",
    "button": "Send Me an Email"
  },
  "socialLinks": [
    {
      "name": "GitHub",
      "url": "https://github.com/yourprofile",
      "icon": "→"
    }
  ],
  "copyright": "Built with React, TypeScript, and Tailwind CSS."
}
```
Update social links with your actual profiles, CTA text, and copyright info.

---

## 🔄 Workflow

1. **Edit** `src/data/portfolio.json`
2. **Save** the file
3. **Refresh** your browser (dev server auto-updates)
4. Changes appear instantly!

## 🚀 Build & Deploy

When ready to deploy:
```bash
npm run build
```
This creates an optimized `dist/` folder ready for production.

---

## 💡 Tips

- **Keep JSON valid**: Use proper formatting (matching quotes, commas, brackets)
- **URLs**: Make sure links start with `http://` or `https://`
- **Optional fields**: `demo` and `github` links in projects are optional—remove them if not needed
- **Array order**: The order of items in arrays determines display order (projects, skills, nav items)
