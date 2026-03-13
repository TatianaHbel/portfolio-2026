# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Important: This is a Static Build

This directory contains the **compiled/built output** of a Next.js portfolio website for Tatiana Hernandez (Product Designer + Engineer). The original source code (TypeScript/JSX components, configuration files) is **not present** — only the static export is here. Changes must be made directly to the HTML/CSS files.

## File Structure

```
index.html                  # Homepage — edit this to change personal info, project cards
images/                     # Site-wide images (favicon, OG image)
assets/
  css/2623a6d9593d5087.css  # All styles: Tailwind utilities + @font-face + custom CSS vars
  fonts/                    # Font files referenced by the CSS via url(../fonts/...)
  js/                       # Webpack-bundled JS chunks (shared across all pages)
projects/
  project-1/                # First project case study (rename the folder to match the project)
    index.html              # Project page markup
    images/                 # Project-specific images (image_1.png … image_29.png, SVGs)
    media/                  # Project-specific videos (15 MP4 files)
```

## Adding a New Project

1. Copy `projects/project-1/` to `projects/your-project-name/`
2. Replace `images/` and `media/` with the new project's assets
3. Edit the new `index.html` — asset paths are already set to `../../assets/`
4. Add a card linking to `projects/your-project-name/` in the root `index.html`

## Key Asset Details

- **CSS** uses `url(../fonts/[file])` — font files must stay in `assets/fonts/`
- **JS chunks** are webpack bundles; the page-specific bundles are `page-f0366764e7e720ce.js` (homepage) and `page-570291552226d15a.js` (project-1)
- Font preloads in HTML point to `assets/fonts/` (fixed from the original `/_next/static/media/` paths)

## Tech Stack (from build artifacts)

- **Framework**: Next.js (App Router, static export) + Webpack
- **Styling**: Tailwind CSS v4.1.5
- **Fonts**: Geist Sans, Geist Mono, Crimson Pro, tiemposText
- **Design tokens**: `--background`, `--foreground`, `--primary` (#e65f2e orange accent)

## Preview Locally

```bash
npx serve .
# or
python3 -m http.server 8080
```
