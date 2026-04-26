// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Pass-through image service: never re-encode imported raster sources.
  // We do format/quality decisions outside Astro (lossless WebP via ffmpeg
  // for PNG sources; JPGs served as-is). Astro still hashes filenames for
  // cache-busting but the bytes are byte-identical to the source.
  image: { service: passthroughImageService() },
  vite: {
    plugins: [tailwindcss()],
  },
});
