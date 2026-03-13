# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run start       # Start dev server at localhost:4321
npm run build     # Production build to dist/
npm run preview   # Preview the production build
```

## Architecture

Astro + Tailwind CSS v4 portfolio for Tatiana Hernandez (Product Designer + Engineer).

```
src/
  components/
    Header.astro        # Nav, hamburger mobile menu, TatianaLLM button
    Footer.astro        # Social links + credit
    ProjectCard.astro   # Reusable card for homepage project grid
  layouts/
    BaseLayout.astro    # HTML shell, meta/OG tags, custom cursor, Header/Footer
    ProjectLayout.astro # 3-col grid (sidebar nav | content | spacer) for case studies
  pages/
    index.astro         # Homepage: hero + experience timeline + 8-card project grid
    fun.astro           # Stub
    about.astro         # Stub
    projects/
      openai-hardware.astro  # Full case study page
  styles/
    global.css          # @import "tailwindcss", @font-face, CSS vars, base element styles
  content/              # (reserved for future MDX content collections)

public/
  fonts/                # Geist, Geist Mono, Crimson Pro, tiemposText woff2/otf
  images/               # favicon.ico, og-image.png
  projects/
    openai-hardware/
      images/           # Project images (image_1.png … image_29.png + SVGs)
      media/            # Project MP4 videos
```

## Key Conventions

- **Design tokens**: `--background: #fafcfd`, `--foreground: #32404f`, `--primary: #e65f2e` (orange)
- **Fonts**: Geist Sans (body), Geist Mono (h4/mono), tiemposText (h1–h3), Crimson Pro (serif)
- **Custom cursor**: driven by JS in BaseLayout; elements use `data-cursor="pointer|email|case-study|overview|site"` attribute
- **Project asset paths**: images/videos are served from `public/projects/[slug]/` and referenced with absolute paths like `/projects/openai-hardware/images/image_1.png`
- **Adding a new project**: create `src/pages/projects/[slug].astro` using `ProjectLayout`, add a `ProjectCard` on the homepage, put assets in `public/projects/[slug]/`
