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
    design-system.css         # ds-* classes used by the brand guidelines page (reusable site-wide)
    media.css                 # Responsive / media query overrides
  assets/                     # ★ Static raster images optimized at build by `astro:assets`
    img/photos/               # About-page hero slideshow + portrait
    thumbnails/               # Homepage project card thumbnails (raster only)
    projects/
      bridge-the-gap/         # Inline case-study images (PNG/JPG/WebP)
      moralis-dashboard/
      vibe-coding-brand/

public/
  Resume/                     # Resume PDF (capital R preserved for stable external links)
  fonts/                      # Geist, Geist Mono, Crimson Pro, tiemposText woff2/otf
  icons/                      # Small inline SVG icons used inside pages
  images/                     # favicon.ico, og-image.png (need stable URLs for crawlers)
  thumbnails/                 # Homepage card thumbnails — SVGs and small VP9 webm clips
                              # (raster card thumbnails go in src/assets/thumbnails/)
  projects/[slug]/media/      # Per-project videos (no images here; raster lives in src/assets/)

_archive/                     # Files kept in the repo but NOT shipped to Netlify.
                              # Drop orphan/unreferenced media here instead of deleting,
                              # so it stays recoverable but doesn't bloat the deploy.
                              # Examples: WIP draft project assets, deprecated thumbnails.
```

## Image & video pipeline

This project uses **`astro:assets`** for all raster images. Astro generates multiple WebP variants per source image at build time, with hashed filenames for aggressive cache headers, and emits `srcset` for the browser to pick the right size.

### Where assets live

| Asset type | Location | Why |
|---|---|---|
| Raster images (PNG, JPG, WebP) used in pages | `src/assets/...` | Imported as `ImageMetadata`, optimized by Astro |
| Videos (`.webm`, `.mp4`) | `public/...` | Astro doesn't process video — referenced by absolute URL |
| SVGs used as project thumbnails | `public/*.svg` | No optimization benefit; referenced as string paths |
| Favicon, og-image, robots, etc. | `public/images/` | Crawlers/social cards need stable URLs |
| Resume PDF | `public/Resume/` | Direct download URL |

### Adding a raster image

```astro
---
import { Image } from 'astro:assets';
import myImage from '../../assets/projects/<slug>/MyImage.png';
---

<!-- Inline content image (standard quality) -->
<Image src={myImage} alt="..."
  widths={[800, 1200, 1600]}
  sizes="(min-width: 1024px) 800px, 100vw"
  quality={88} />
```

### Showcase / lightbox images (high quality)

For images that get pixel-peeped or zoomed (designers care here), use `LightboxImage`. It auto-generates a high-quality 2400px-wide WebP variant for the lightbox overlay while serving smaller variants inline.

```astro
import LightboxImage from '../../components/LightboxImage.astro';
import detailShot from '../../assets/projects/<slug>/Detail.webp';

<LightboxImage src={detailShot} alt="..." />
```

### Quality tiers in use

- **Showcase (q92, up to 2400px)** — `BeforeAfterSlider`, `LightboxImage` (lightbox variant uses q95)
- **Inline content (q88, widths 800–1600)** — case study images
- **Hero / featured (q90, up to 1600)** — case study hero shots, portrait
- **Thumbnails (q85, widths 400–1200)** — `ProjectCard` images

### Adding a new project

1. Create `src/pages/projects/[slug].astro` using `ProjectLayout`
2. Add an entry to `src/data/projects.ts`
3. Put **raster images** in `src/assets/projects/[slug]/` and import them
4. Put **videos** in `public/projects/[slug]/media/` (referenced by string path)
5. If the homepage card uses a raster thumbnail, put it in `src/assets/thumbnails/` and import it in `projects.ts`

### Component contracts

- `ProjectCard` accepts `image: ImageMetadata | string` (string fallback for SVG thumbnails)
- `LightboxImage` accepts `src: ImageMetadata` (required) — uses `getImage()` to pre-bake a 2400px quality-95 variant served via `data-lightbox-src`
- `BeforeAfterSlider` accepts `beforeSrc: ImageMetadata` and `afterSrc: ImageMetadata`

## Key Conventions

- **Design tokens**: see `src/styles/theme.css`
- **Fonts**: Geist Sans (body), Geist Mono (h4/mono), tiemposText (h1–h3), Crimson Pro (serif)
- **Custom cursor**: `CustomCursor.astro` component + `src/scripts/custom-cursor.ts`; elements use `data-cursor="pointer|email|case-study|overview|site"` attribute
- **Homepage data**: project grid and experience timeline are driven by `src/data/projects.ts` and `src/data/timeline.ts` — edit those files rather than `index.astro` directly
- **Project status**: entries in `projects.ts` use `status: "published" | "coming-soon" | "locked"` to control card visibility/behavior

## Agent Rules
- As actions are accomplished, keep updating this document to make sure it stays relevant for the next agent.