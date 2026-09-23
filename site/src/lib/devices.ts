/* The hardware we sell to tenants, drawn once so every surface can show
   what a device looks like instead of only naming it. Black contours on a
   transparent background, like the illustrations; generated with an image
   model (Gemini 3 Pro Image via OpenRouter) from a written description of
   each device and the "Flexible hardware" drawing as style reference, then
   traced with Potrace (2x Catrom, 55 % threshold, --opttolerance 0.2
   --turdsize 10). Files live in public/devices/. */
export const devices = [
  {
    "file": "sunmi-flex-3.svg",
    "slug": "sunmi-flex-3",
    "name": "SUNMI FLEX 3",
    "kind": "Self-service column",
    "description": "Portrait display on a free-standing pillar with a QR scanner built into the column. Entry gate, kiosk.",
    "width": 352,
    "height": 959,
    "bytes": 14651
  },
  {
    "file": "sunmi-d3.svg",
    "slug": "sunmi-d3",
    "name": "SUNMI D3",
    "kind": "Countertop till",
    "description": "15.6\" display with a customer display on the back and an 80 mm receipt printer in the base. The till at the desk.",
    "width": 881,
    "height": 920,
    "bytes": 54381
  },
  {
    "file": "sunmi-v3-mix.svg",
    "slug": "sunmi-v3-mix",
    "name": "SUNMI V3 MIX",
    "kind": "Tablet till",
    "description": "Tablet on a round base with a printer and scanner module docked behind it.",
    "width": 911,
    "height": 781,
    "bytes": 45326
  },
  {
    "file": "telpo-t20.svg",
    "slug": "telpo-t20",
    "name": "TELPO T20",
    "kind": "Pole terminal",
    "description": "Portrait self-service terminal clamped to a pole, with a card reader and a QR scanner at the bottom. Entry or unattended sale.",
    "width": 496,
    "height": 985,
    "bytes": 28906
  }
] as const;

export type Device = (typeof devices)[number];
export const deviceUrl = (file: string) => `${import.meta.env.BASE_URL}devices/${file}`;
