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
    "description": "10.1\" display on a base with an 80 mm receipt printer. The till at the desk.",
    "width": 590,
    "height": 758,
    "bytes": 35663
  },
  {
    "file": "sunmi-v3-mix.svg",
    "slug": "sunmi-v3-mix",
    "name": "SUNMI V3 MIX",
    "kind": "Handheld till",
    "description": "6.75\" handheld with a 58 mm printer and scanner. Sells and checks on the move.",
    "width": 449,
    "height": 939,
    "bytes": 25240
  },
  {
    "file": "telpo-t20.svg",
    "slug": "telpo-t20",
    "name": "TELPO T20",
    "kind": "Countertop POS",
    "description": "15.6\" main display with a customer display and an 80 mm receipt printer in the base.",
    "width": 881,
    "height": 920,
    "bytes": 54381
  }
] as const;

export type Device = (typeof devices)[number];
export const deviceUrl = (file: string) => `${import.meta.env.BASE_URL}devices/${file}`;
