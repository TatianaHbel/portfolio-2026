# Font asset manifest

These files are local static assets served from `/fonts/*`.

Family mapping:
- `geist-*`: Geist Sans subsets.
- `geist-mono-*`: Geist Mono subsets.
- `crimson-pro-*`: Crimson Pro subsets.
- `crimson-pro-italic-*`: Crimson Pro italic subsets.
- `tiempos-text-regular.otf`: Tiempos Text regular.
- `tiempos-text-italic.otf`: Tiempos Text italic.

Subset suffixes:
- `latin`
- `latin-ext`
- `cyrillic`
- `vietnamese`

The preload list is defined in `src/layouts/BaseLayout.astro`.
The `@font-face` declarations live in `src/styles/fonts.css`.
