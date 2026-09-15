/* TICKETOVA's colour system.
 *
 * Black on white, as ticketova.com sets it: a white sheet, near-black ink,
 * grey hairlines between them. No colour is decoration. Green is the tick
 * (a ticket that is valid, a payment that went through), red is the
 * refusal and the one red in the mark; neither is ever a brand fill. Built
 * on the same shape as Internal's and Januna's — scales of ten steps with
 * the same ten roles, the same semantic names on top — so an agent writes
 * every system with one vocabulary. The pinned values are the site's:
 * #fafafa, #e5e7eb, #9ca3af, #0a0a0a, the tick green #065f46 and the
 * strike red #991b1b.
 *
 * Light only. This file is the source of truth; scripts/gen-foundations.ts
 * turns it into colors.css. */

export type Step = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 1000;
export const STEPS: Step[] = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

export type Role = { steps: Step[]; name: string; use: string; each: string[] };
export const ROLES: Role[] = [
  { steps: [100, 200, 300], name: "Component backgrounds", use: "The fills of UI components: 1 at rest, 2 on hover, 3 when active.", each: ["Default background", "Hover background", "Active background"] },
  { steps: [400, 500, 600], name: "Borders", use: "The strokes of UI components: 4 at rest, 5 on hover, 6 when active or focused.", each: ["Default border", "Hover border", "Active border"] },
  { steps: [700, 800], name: "High contrast backgrounds", use: "Solid fills that carry light text: 7 at rest, 8 on hover.", each: ["High contrast background", "Hover high contrast background"] },
  { steps: [900, 1000], name: "Text and icons", use: "The two ink levels: 9 secondary, 10 primary. Both pass 4.5:1 on either background.", each: ["Secondary text and icons", "Primary text and icons"] },
];

export type Scale = { id: string; name: string; note: string; steps: Record<Step, string> };

const L: Record<Step, number> = { 100: 0.972, 200: 0.952, 300: 0.925, 400: 0.885, 500: 0.83, 600: 0.745, 700: 0.58, 800: 0.5, 900: 0.42, 1000: 0.28 };
const C: Record<Step, number> = { 100: 0.12, 200: 0.2, 300: 0.3, 400: 0.42, 500: 0.58, 600: 0.78, 700: 1, 800: 0.94, 900: 0.84, 1000: 0.6 };
const oklch = (l: number, c: number, h: number) => `oklch(${l.toFixed(3)} ${c.toFixed(3)} ${h})`;
type Lift = Partial<Record<Step, number>>;
function scale(id: string, name: string, note: string, hue: number, peak: number, pin: Partial<Record<Step, string>> = {}, lift: Lift = {}): Scale {
  const steps = Object.fromEntries(STEPS.map((s) => [s, pin[s] ?? oklch(L[s] + (lift[s] ?? 0), peak * C[s], hue)])) as Record<Step, string>;
  return { id, name, note, steps };
}

export const BACKGROUNDS = {
  100: { name: "Background 1", use: "The sheet. White; the page, the ticket, every element on it.", value: "#ffffff" },
  200: { name: "Background 2", use: "A quieter sheet: a panel, a sidebar, a well. The site's #fafafa.", value: "#fafafa" },
};

const alpha = (base: string, steps: number[]) =>
  Object.fromEntries(STEPS.map((s, i) => [s, `${base} / ${steps[i]}%)`])) as Record<Step, string>;

export const SCALES: Scale[] = [
  {
    id: "gray",
    name: "Gray",
    note: "The site's cool neutrals: its hairline #e5e7eb at 3, its placeholder #9ca3af at 5. 10 is the ink, #0a0a0a.",
    steps: { 100: "#fafafa", 200: "#f3f4f6", 300: "#e5e7eb", 400: "#d1d5db", 500: "#9ca3af", 600: "#6b7280", 700: "#4b5563", 800: "#374151", 900: "#1f2937", 1000: "#0a0a0a" },
  },
  { id: "gray-alpha", name: "Gray alpha", note: "Black at increasing opacity, for what must sit on either sheet.", steps: alpha("oklch(0 0 0", [4, 6, 10, 16, 24, 36, 55, 62, 72, 100]) },
  { id: "white-alpha", name: "White alpha", note: "White at increasing opacity, for what sits on black: strokes, translucent buttons.", steps: alpha("oklch(1 0 0", [4, 8, 12, 16, 24, 36, 55, 72, 90, 100]) },
  scale("red", "Red", "Refusals, errors, destructive actions. 8 is the mark's red and the site's strike, #991b1b.", 25, 0.19, { 800: "#991b1b" }),
  scale("green", "Green", "The tick: valid, paid, confirmed. 8 is the site's #065f46 — line and text, never a brand fill.", 165, 0.12, { 800: "#065f46" }),
  scale("blue", "Blue", "Information only. Never a link, never an accent.", 255, 0.14),
  scale("yellow", "Yellow", "Pending, attention needed: a reservation not yet paid.", 85, 0.16, {}, { 600: 0.06, 800: 0.1, 900: 0.06, 1000: 0.04 }),
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
      { token: "surface-primary", ref: ref("background", 100), use: "The sheet. Pages, cards, inputs." },
      { token: "surface-secondary", ref: ref("gray", 100), use: "A quieter area: a table header, a well." },
      { token: "surface-tertiary", ref: ref("background", 200), use: "Sidebars and panels." },
      { token: "surface-quaternary", ref: ref("gray", 200), use: "A well inside a well, a code block." },
      { token: "surface-hover", ref: ref("gray-alpha", 100), use: "A row, option or button under the pointer: black at 4%." },
      { token: "surface-active", ref: ref("gray-alpha", 300), use: "The selected row, the pressed toggle, the current page: black at 10%." },
      { token: "surface-modal", ref: ref("gray-alpha", 500), use: "The scrim behind a dialog." },
      { token: "surface-danger", ref: ref("red", 100), use: "A refusal's fill: the scan that did not pass." },
      { token: "surface-success", ref: ref("green", 100), use: "A success callout's fill." },
      { token: "surface-warning", ref: ref("yellow", 100), use: "A warning callout's fill." },
      { token: "surface-info", ref: ref("blue", 100), use: "An information callout's fill." },
    ],
  },
  {
    name: "Content",
    note: "What is written and drawn.",
    tokens: [
      { token: "content-primary", ref: ref("gray", 1000), use: "The ink. Headings, body, icons that matter." },
      { token: "content-secondary", ref: ref("gray", 700), use: "Descriptions, helper text, secondary icons." },
      { token: "content-tertiary", ref: ref("gray", 500), use: "Placeholders, timestamps, the least important line." },
      { token: "content-inverse", ref: ref("background", 100), use: "Text on black: white." },
      { token: "content-brand", ref: ref("gray", 1000), use: "Links: the ink, underlined. No colour is decoration." },
      { token: "content-disabled", ref: ref("gray", 500), use: "Disabled labels and icons." },
    ],
  },
  {
    name: "Brand",
    note: "The one colour that acts is the ink. Green and red are meanings, not the brand.",
    tokens: [
      { token: "brand", ref: ref("gray", 1000), use: "The primary button, the current item: the ink." },
      { token: "brand-hover", ref: ref("gray", 900), use: "The primary button under the pointer." },
      { token: "brand-subtle", ref: ref("gray", 200), use: "A tint behind a selected control." },
      { token: "brand-bright", ref: ref("gray", 1000), use: "The focus ring: the ink." },
    ],
  },
  {
    name: "Status",
    note: "Four meanings, four colours, each with a fill of its own.",
    tokens: [
      { token: "status-danger", ref: ref("red", 800), use: "Refused, failed, destructive." },
      { token: "status-success", ref: ref("green", 800), use: "Valid, paid, confirmed: the tick." },
      { token: "status-warning", ref: ref("yellow", 700), use: "Pending, attention needed." },
      { token: "status-info", ref: ref("blue", 800), use: "Neutral information." },
    ],
  },
  {
    name: "Stroke",
    note: "Lines. Grey hairlines, one step apart; nothing is drawn in black.",
    tokens: [
      { token: "divider", ref: ref("gray", 300), use: "The soft line, the site's #e5e7eb: between rows, inside a component, a card's edge." },
      { token: "divider-strong", ref: ref("gray", 400), use: "A line that must be seen: an input's edge, a section's end." },
      { token: "divider-inverse", ref: ref("white-alpha", 400), use: "A line on black." },
    ],
  },
];
