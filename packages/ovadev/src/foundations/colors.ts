/* Ovadev's colour system.
 *
 * The house identity: one ground, one ink, one red. Paper is near-black,
 * ink near-white, and everything between them is a step on one neutral
 * ramp; red is the single chromatic colour, a signal, one block per
 * screen. Built on the same shape as Januna's and Internal's — scales of
 * ten steps with the same ten roles, the same semantic names on top — so
 * an agent writes all three systems with one vocabulary. The values are
 * ova.dev's, as its stylesheet sets them: paper #0E0F12, ink #ECEEF2, red
 * #E8202A, stone #8B9098, mist #2A2E36, the two surfaces, the two
 * hairlines and the reject red.
 *
 * Dark only: there is no light palette, no switcher, no theme cookie. The
 * scales run from the ground up, so step 1 is the darkest fill and step 10
 * the brightest ink — the roles read the same as in the light systems.
 * This file is the source of truth; scripts/gen-foundations.ts turns it
 * into colors.css. */

export type Step = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 1000;
export const STEPS: Step[] = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

export type Role = { steps: Step[]; name: string; use: string; each: string[] };
export const ROLES: Role[] = [
  { steps: [100, 200, 300], name: "Component backgrounds", use: "The fills of UI components, lifted off paper: 1 at rest, 2 on hover, 3 when active.", each: ["Default background", "Hover background", "Active background"] },
  { steps: [400, 500, 600], name: "Borders", use: "The strokes of UI components: 4 at rest, 5 on hover, 6 when active or focused.", each: ["Default border", "Hover border", "Active border"] },
  { steps: [700, 800], name: "High contrast backgrounds", use: "Solid fills that carry dark text: 7 at rest, 8 on hover.", each: ["High contrast background", "Hover high contrast background"] },
  { steps: [900, 1000], name: "Text and icons", use: "The two ink levels: 9 secondary, 10 primary. Both pass 4.5:1 on paper and on a surface.", each: ["Secondary text and icons", "Primary text and icons"] },
];

export type Scale = { id: string; name: string; note: string; steps: Record<Step, string> };

/* A dark ramp: lightness climbs from the ground, chroma peaks where the
   colour is a fill and thins out where it is a line or an ink. */
const L: Record<Step, number> = { 100: 0.22, 200: 0.25, 300: 0.29, 400: 0.34, 500: 0.4, 600: 0.48, 700: 0.62, 800: 0.7, 900: 0.8, 1000: 0.92 };
const C: Record<Step, number> = { 100: 0.25, 200: 0.35, 300: 0.45, 400: 0.55, 500: 0.7, 600: 0.85, 700: 1, 800: 0.94, 900: 0.7, 1000: 0.4 };
const oklch = (l: number, c: number, h: number) => `oklch(${l.toFixed(3)} ${c.toFixed(3)} ${h})`;
function scale(id: string, name: string, note: string, hue: number, peak: number, pin: Partial<Record<Step, string>> = {}): Scale {
  const steps = Object.fromEntries(STEPS.map((s) => [s, pin[s] ?? oklch(L[s], peak * C[s], hue)])) as Record<Step, string>;
  return { id, name, note, steps };
}

export const BACKGROUNDS = {
  100: { name: "Paper", use: "The ground. Near-black; the page, and what shows through the mark's counter.", value: "#0e0f12" },
  200: { name: "Surface", use: "A cell lifted off the page: a band, a plate, a panel.", value: "#16181c" },
};

const alpha = (base: string, steps: number[]) =>
  Object.fromEntries(STEPS.map((s, i) => [s, `${base} / ${steps[i]}%)`])) as Record<Step, string>;

export const SCALES: Scale[] = [
  {
    id: "gray",
    name: "Gray",
    note: "The neutral ramp, from the surface up to the ink: surface, surface 2, mist, the two hairlines composited, then stone at 9 and ink at 10.",
    steps: { 100: "#16181c", 200: "#1c1e24", 300: "#2a2e36", 400: "#292b30", 500: "#484a4f", 600: "#5a5e66", 700: "#6a6e76", 800: "#7c8189", 900: "#8b9098", 1000: "#eceef2" },
  },
  { id: "white-alpha", name: "White alpha", note: "Ink at increasing opacity: 3 is the hairline (12%), 5 the strong hairline (26%), for what must sit on either ground.", steps: alpha("oklch(0.945 0.004 265", [4, 8, 12, 18, 26, 36, 55, 72, 90, 100]) },
  { id: "black-alpha", name: "Black alpha", note: "Black at increasing opacity: scrims, and what sits on ink.", steps: alpha("oklch(0 0 0", [4, 8, 12, 18, 26, 36, 55, 72, 90, 100]) },
  scale("red", "Red", "The identity's one colour. 7 is the red block, #E8202A, locked; the rest is its ramp on paper. Type on red is white, never ink.", 25, 0.21, { 700: "#e8202a" }),
  scale("green", "Green", "Done, confirmed, live.", 150, 0.16),
  scale("blue", "Blue", "Links and information; never the accent.", 262, 0.17),
  scale("yellow", "Yellow", "Pending, attention needed.", 85, 0.15),
];

export const scaleById = (id: string) => SCALES.find((s) => s.id === id);

export type Semantic = { token: string; ref: string; use: string };
export type SemanticGroup = { name: string; note: string; tokens: Semantic[] };
const ref = (scale: string, step: Step | 100 | 200) => `${scale}-${step}`;

export const SEMANTIC: SemanticGroup[] = [
  {
    name: "Surface",
    note: "What things sit on.",
    tokens: [
      { token: "surface-primary", ref: ref("background", 100), use: "Paper. Pages, cards, inputs." },
      { token: "surface-secondary", ref: ref("gray", 100), use: "A cell lifted off the page: a table header, a band." },
      { token: "surface-tertiary", ref: ref("background", 200), use: "Sidebars and panels." },
      { token: "surface-quaternary", ref: ref("gray", 200), use: "A cell lifted off a surface: a card inside a band, a code block." },
      { token: "surface-hover", ref: ref("white-alpha", 100), use: "A row, option or button under the pointer: ink at 4%." },
      { token: "surface-active", ref: ref("white-alpha", 300), use: "The selected row, the pressed toggle, the current page: ink at 12%." },
      { token: "surface-modal", ref: ref("black-alpha", 700), use: "The scrim behind a dialog." },
      { token: "surface-danger", ref: ref("red", 100), use: "A destructive callout's fill." },
      { token: "surface-success", ref: ref("green", 100), use: "A success callout's fill." },
      { token: "surface-warning", ref: ref("yellow", 100), use: "A warning callout's fill." },
      { token: "surface-info", ref: ref("blue", 100), use: "An information callout's fill." },
    ],
  },
  {
    name: "Content",
    note: "What is written and drawn.",
    tokens: [
      { token: "content-primary", ref: ref("gray", 1000), use: "Ink. Headings, body, icons that matter, the mark's cells." },
      { token: "content-secondary", ref: ref("gray", 900), use: "Stone. Ledes, captions, table values, secondary icons." },
      { token: "content-tertiary", ref: ref("gray", 700), use: "Placeholders, timestamps, the least important line." },
      { token: "content-inverse", ref: ref("background", 100), use: "Paper: type on ink, in a solid button." },
      { token: "content-brand", ref: ref("gray", 1000), use: "Links. The accent resolves to ink on purpose, so a stray accent cannot spend red." },
      { token: "content-disabled", ref: ref("gray", 700), use: "Disabled labels and icons." },
    ],
  },
  {
    name: "Brand",
    note: "The one colour that acts is the ink. Red is a signal, not an accent: one block per screen, seated into a corner or an edge.",
    tokens: [
      { token: "brand", ref: ref("gray", 1000), use: "The primary button, the current item: ink." },
      { token: "brand-hover", ref: ref("white-alpha", 900), use: "The primary button under the pointer: ink at 90%." },
      { token: "brand-subtle", ref: ref("white-alpha", 200), use: "A tint behind a selected control." },
      { token: "brand-bright", ref: ref("gray", 1000), use: "The focus ring: ink, one hairline." },
      { token: "brand-signal", ref: ref("red", 700), use: "The red block. Never type, never a button, never twice." },
    ],
  },
  {
    name: "Status",
    note: "Four meanings, four colours, each with a fill of its own. Danger is the reject red, not the identity's.",
    tokens: [
      { token: "status-danger", ref: ref("red", 800), use: "Errors, destructive actions." },
      { token: "status-success", ref: ref("green", 800), use: "Done, confirmed, live." },
      { token: "status-warning", ref: ref("yellow", 800), use: "Pending, attention needed." },
      { token: "status-info", ref: ref("blue", 800), use: "Neutral information." },
    ],
  },
  {
    name: "Stroke",
    note: "Lines. One weight, one colour: the hairline is ink at 12%, everywhere; the strong one at 26% where it has to survive a lifted surface.",
    tokens: [
      { token: "divider", ref: ref("white-alpha", 300), use: "Every cell division and rail edge: between rows, inside a component, a card's edge." },
      { token: "divider-strong", ref: ref("white-alpha", 500), use: "A line that must be seen: an input's edge, a section's end." },
      { token: "divider-inverse", ref: ref("black-alpha", 400), use: "A line on ink." },
    ],
  },
];
