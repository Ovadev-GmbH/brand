# Ticketova SVG illustrations

The library contains one transparent, black-only SVG for each of the 14 motifs. White areas, including object interiors, are transparent. No WebP copies or exports are kept here.

- Nine `*-vector.svg` files are traced from the original WebPs in `Landing/apps/ticketova/public/illustrations/` using 4× Catrom upsampling, a 50% threshold and Potrace (`--opttolerance 0.15 --turdsize 8 --unit 10`). These contain real Bézier paths and no embedded bitmaps; tracing approximates the original raster contours.
- The four municipality SVGs come from that same landing-page directory.
- `illustration.svg` comes from `Landing/apps/ova/public/previews/ticketova-illustration.svg`.

Gallery metadata lives in `site/src/lib/illustrations.ts`. Regenerate the nine traced SVGs with `python3 scripts/vectorize-ticketova.py [source-directory]` from the brand directory (requires ImageMagick and Potrace). Original landing-page files remain in the Landing project.

The nine `events-*.svg` motifs were drawn for the `/events` page (TICKETOVA for events): generated with an image model (Gemini 3 Pro Image via OpenRouter), using three of the traced drawings above as style references, then traced with Potrace (2× Catrom, 55% threshold, `--opttolerance 0.2 --turdsize 10`). The same files live in `Landing/apps/ticketova/public/illustrations/`.
