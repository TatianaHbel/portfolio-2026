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
    Header.astro              # Nav, hamburger mobile menu, TatianaLLM button
    Footer.astro              # Social links + credit
    ProjectCard.astro         # Reusable card for homepage project grid
    CaseStudyBlockquote.astro # Blockquote with left border accent for case study content
    CustomCursor.astro        # Custom cursor container (wraps custom-cursor.ts)
    ImagePlaceholder.astro    # Animated placeholder with color and label props
    InfoGrid.astro            # Grid layout with configurable columns (2 or 3)
    NavLink.astro             # Navigation link with active state + optional external handling
    ProjectMetadata.astro     # Displays role, timeline, team, skills for case studies
  layouts/
    BaseLayout.astro          # HTML shell, meta/OG tags, Header/Footer; includes CustomCursor
    ProjectLayout.astro       # 3-col grid (sidebar nav | content | spacer) for case studies
  pages/
    index.astro               # Homepage: hero + experience timeline + 8-card project grid
    fun.astro                 # Coming soon stub (linked in nav)
    about.astro               # Coming soon stub (linked in nav)
    projects/
      openai-hardware.astro   # Full case study — OpenAI Hardware
      account-abstraction.astro # Full case study — Redesigning Web3 Trading (Moralis)
      alexa.astro             # Full case study — Bridge the Gap (Amazon Alexa+)
      [slug].astro            # Dynamic catch-all for future project routes
  data/
    config.ts                 # Social links and resume URL
    projects.ts               # Homepage project grid config (metadata, aspect ratios, status)
    timeline.ts               # Experience timeline entries (4 roles, 2021–2026)
  scripts/
    custom-cursor.ts          # Custom cursor behavior
    header.ts                 # Header scroll/interaction logic
    media-reveal.ts           # Media reveal animation on scroll
    section-nav.ts            # Section navigation highlight behavior
  styles/
    global.css                # Entry point: @import "tailwindcss" + all partials below
    fonts.css                 # @font-face declarations
    theme.css                 # Design tokens (colors, spacing, CSS vars)
    base.css                  # Base element styles
    utilities.css             # Utility classes
    animations.css            # Keyframe animations
    components.css            # Component-specific styles
    media.css                 # Responsive / media query overrides

public/
  fonts/                      # Geist, Geist Mono, Crimson Pro, tiemposText woff2/otf
  images/                     # favicon.ico, og-image.png
  gradient_amadeus_thumbnail.webm   # Thumbnail video for openai-hardware card  ┐
  redesigning-thumbnail.gif         # Thumbnail for account-abstraction card    │ card thumbnails live here
  thumbnail-bridge-the-gap.jpg      # Thumbnail for alexa card                  ┘ (public/ root, not per-project subfolder)
  projects/
    openai-hardware/
      images/           # image.png, image_1.png … image_29.png + SVGs
      media/            # Project MP4 videos
```

> **Note:** `src/content/` is reserved for future MDX content collections but does not yet exist. Asset folders for account-abstraction, alexa, and other planned projects still need to be created under `public/projects/[slug]/`.

## Key Conventions

- **Design tokens**: see `src/styles/theme.css`
- **Fonts**: Geist Sans (body), Geist Mono (h4/mono), tiemposText (h1–h3), Crimson Pro (serif)
- **Custom cursor**: `CustomCursor.astro` component + `src/scripts/custom-cursor.ts`; elements use `data-cursor="pointer|email|case-study|overview|site"` attribute
- **Project asset paths**: images/videos are served from `public/projects/[slug]/` and referenced with absolute paths like `/projects/openai-hardware/images/image_1.png`
- **Adding a new project**: create `src/pages/projects/[slug].astro` using `ProjectLayout`, add an entry to `src/data/projects.ts` (homepage grid is data-driven), put assets in `public/projects/[slug]/`
- **Homepage data**: project grid and experience timeline are driven by `src/data/projects.ts` and `src/data/timeline.ts` — edit those files rather than `index.astro` directly
- **Project status**: entries in `projects.ts` use `status: "published" | "coming-soon" | "locked"` to control card visibility/behavior
