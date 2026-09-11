/* Januna's colour system.
 *
 * Built the way Geist builds its own: named scales of ten steps, and the
 * same ten roles on every scale, so "step 4 is a border" holds for gray,
 * green and red alike. Two page backgrounds sit outside the scales.
 *
 * Every scale is computed from a hue and a chroma curve along one shared
 * lightness ladder, with the brand's fixed colours pinned to their steps
 * (green 700 and 1000 are Januna's two greens, red 700 its red, and the
 * whole Gray scale is the taupe family the marketing site is built from).
 * Change the ladder and every scale moves together; change a hue and only
 * that scale does.
 *
 * Light only. Januna has one room, and it is lit.
 *
 * This file is the source of truth. scripts/gen-foundations.ts turns it
 * into colors.css (custom properties and Tailwind colour names), and the
 * catalog's Colors page renders it directly. Values are oklch, so P3
 * displays get the wider gamut and sRGB ones clamp gracefully. */

export type Step = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 1000;
export const STEPS: Step[] = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

/** What each step is for. The same on every scale. */
export type Role = { steps: Step[]; name: string; use: string; each: string[] };
export const ROLES: Role[] = [
  {
    steps: [100, 200, 300],
    name: "Component backgrounds",
    use: "The fills of UI components. On Background 1, use 1 as the resting fill, 2 for hover, 3 for active. Small elements like badges can start at 2 or 3.",
    each: ["Default background", "Hover background", "Active background"],
  },
  {
    steps: [400, 500, 600],
    name: "Borders",
    use: "The strokes of UI components: 4 at rest, 5 on hover, 6 when active or focused.",
    each: ["Default border", "Hover border", "Active border"],
  },
  {
    steps: [700, 800],
    name: "High contrast backgrounds",
    use: "Solid fills that carry light text: primary buttons, progress, the selected row. 7 at rest, 8 on hover.",
    each: ["High contrast background", "Hover high contrast background"],
  },
  {
    steps: [900, 1000],
    name: "Text and icons",
    use: "The two ink levels. 9 is secondary text and icons, 10 is primary. Both pass 4.5:1 on Background 1 and 2.",
    each: ["Secondary text and icons", "Primary text and icons"],
  },
];

export type Scale = {
  /** The token name: gray, gray-alpha, green … */
  id: string;
  name: string;
  /** One line on the Colors page. */
  note: string;
  steps: Record<Step, string>;
};

/* ── the ladder ─────────────────────────────────────────────────────────
   Lightness per step, light theme. Steps 1–6 stay close to the page so
   fills and borders read as tints; 7 is the saturated working colour; 9
   and 10 are dark enough for text. */
const L: Record<Step, number> = {
  100: 0.972, 200: 0.952, 300: 0.925, 400: 0.885, 500: 0.83,
  600: 0.745, 700: 0.58, 800: 0.52, 900: 0.45, 1000: 0.29,
};
/** Chroma as a fraction of the scale's peak, per step. Peaks at 7. */
const C: Record<Step, number> = {
  100: 0.12, 200: 0.2, 300: 0.3, 400: 0.42, 500: 0.58,
  600: 0.78, 700: 1, 800: 0.94, 900: 0.84, 1000: 0.6,
};

const oklch = (l: number, c: number, h: number) => `oklch(${l.toFixed(3)} ${c.toFixed(3)} ${h})`;

/** A hue's own lightness, where the shared ladder reads wrong: the yellow
 *  side of the wheel is dark and muddy at the ladder's 7–10, so those steps
 *  are lifted. Keyed by step, added to the ladder. */
type Lift = Partial<Record<Step, number>>;

function scale(
  id: string,
  name: string,
  note: string,
  hue: number,
  peak: number,
  pin: Partial<Record<Step, string>> = {},
  lift: Lift = {},
): Scale {
  const steps = Object.fromEntries(
    STEPS.map((s) => [s, pin[s] ?? oklch(L[s] + (lift[s] ?? 0), peak * C[s], hue)]),
  ) as Record<
    Step,
    string
  >;
  return { id, name, note, steps };
}

/* ── the two page backgrounds ─────────────────────────────────────────── */
export const BACKGROUNDS = {
  100: { name: "Background 1", use: "The sheet. Default page and element background.", value: "oklch(1 0 0)" },
  200: { name: "Background 2", use: "The taupe island: panels and sidebars, used sparingly for a subtle step.", value: "oklch(0.967 0.010 68)" },
};

/* ── the scales ───────────────────────────────────────────────────────── */
const INK = 0.29;

export const SCALES: Scale[] = [
  {
    id: "gray",
    name: "Gray",
    note: "The taupe family, not a grey: warm at every step. 10 is the ink.",
    steps: {
      100: "#fbf8f5", 200: "#f9f3ed", 300: "#f6eee5", 400: "#ddd6ce", 500: "#c5beb7",
      600: "#a39990", 700: "#7d7670", 800: "#6a635c", 900: "#514c49", 1000: "#2c2c2c",
    },
  },
  {
    id: "gray-alpha",
    name: "Gray alpha",
    note: "The ink at increasing opacity: the same steps as Gray, but they sit correctly on either background.",
    steps: {
      100: `oklch(${INK} 0 0 / 5%)`, 200: `oklch(${INK} 0 0 / 8%)`, 300: `oklch(${INK} 0 0 / 11%)`,
      400: `oklch(${INK} 0 0 / 16%)`, 500: `oklch(${INK} 0 0 / 24%)`, 600: `oklch(${INK} 0 0 / 36%)`,
      700: `oklch(${INK} 0 0 / 55%)`, 800: `oklch(${INK} 0 0 / 62%)`, 900: `oklch(${INK} 0 0 / 72%)`,
      1000: `oklch(${INK} 0 0)`,
    },
  },
  {
    id: "taupe-alpha",
    name: "Taupe alpha",
    note: "The taupe at increasing opacity, for what sits on the green or on a photo: translucent buttons, strokes on dark.",
    steps: {
      100: "oklch(0.967 0.010 68 / 2%)", 200: "oklch(0.967 0.010 68 / 5%)", 300: "oklch(0.967 0.010 68 / 8%)",
      400: "oklch(0.967 0.010 68 / 12%)", 500: "oklch(0.967 0.010 68 / 18%)", 600: "oklch(0.967 0.010 68 / 30%)",
      700: "oklch(0.967 0.010 68 / 50%)", 800: "oklch(0.967 0.010 68 / 70%)", 900: "oklch(0.967 0.010 68 / 90%)",
      1000: "oklch(0.967 0.010 68)",
    },
  },
  scale("green", "Green", "The brand. 7 is the bright green, 10 the dark one every filled button wears.", 145, 0.17, {
    700: "oklch(0.548 0.171 145)",
    1000: "oklch(0.339 0.098 145)",
  }),
  scale("red", "Red", "Destructive and errors. 7 is the brand's one red.", 33, 0.2, {
    700: "oklch(0.581 0.201 33)",
  }),
  scale("amber", "Amber", "Warnings and pending states.", 75, 0.16, {}, { 600: 0.06, 700: 0.16, 800: 0.14, 900: 0.08, 1000: 0.06 }),
  scale("blue", "Blue", "Information and links outside the brand green.", 255, 0.17),
  scale("teal", "Teal", "Success that must not be the brand green.", 185, 0.12),
  scale("purple", "Purple", "Highlighting and the occasional third series.", 300, 0.17),
  scale("pink", "Pink", "Attention where red would read as an error.", 350, 0.17),
];

export const scaleById = (id: string) => SCALES.find((s) => s.id === id);

/* ── the semantic layer ───────────────────────────────────────────────
   What a surface, a piece of text or a status *is*, named the way an app
   talks about it, each pointing at one step of one scale. This is the
   vocabulary the components and the apps use: bg-surface-secondary,
   text-content-tertiary, text-status-danger, bg-status-danger/10. The
   scales stay reachable for the rare exact colour. */
export type Semantic = { token: string; ref: string; use: string };
export type SemanticGroup = { name: string; note: string; tokens: Semantic[] };

const ref = (scale: string, step: Step | 100 | 200) => `${scale}-${step}`;

export const SEMANTIC: SemanticGroup[] = [
  {
    name: "Surface",
    note: "What things sit on.",
    tokens: [
      { token: "surface-primary", ref: ref("background", 100), use: "The sheet. Pages, cards, inputs." },
      { token: "surface-secondary", ref: ref("gray", 100), use: "A quieter area on the sheet: a table header, a well." },
      { token: "surface-tertiary", ref: ref("background", 200), use: "The island: sidebars, panels." },
      { token: "surface-quaternary", ref: ref("gray", 300), use: "The deepest step: a pressed fill, a code block." },
      { token: "surface-hover", ref: ref("gray", 200), use: "A row or option under the pointer." },
      { token: "surface-active", ref: ref("green", 100), use: "The selected row, the current page." },
      { token: "surface-modal", ref: ref("gray-alpha", 500), use: "The scrim behind a dialog." },
      { token: "surface-danger", ref: ref("red", 100), use: "A destructive callout's fill." },
      { token: "surface-success", ref: ref("green", 100), use: "A success callout's fill." },
      { token: "surface-warning", ref: ref("amber", 100), use: "A warning callout's fill." },
      { token: "surface-info", ref: ref("blue", 100), use: "An information callout's fill." },
    ],
  },
  {
    name: "Content",
    note: "What is written and drawn.",
    tokens: [
      { token: "content-primary", ref: ref("gray", 1000), use: "The ink. Headings, body, icons that matter." },
      { token: "content-secondary", ref: ref("gray", 900), use: "Descriptions, helper text, secondary icons." },
      { token: "content-tertiary", ref: ref("gray", 700), use: "Placeholders, timestamps, the least important line." },
      { token: "content-inverse", ref: ref("background", 200), use: "Text on the green or on the ink: taupe, never white." },
      { token: "content-accent", ref: ref("green", 1000), use: "Links and emphasis in the brand." },
      { token: "content-disabled", ref: ref("gray", 600), use: "Disabled labels and icons." },
    ],
  },
  {
    name: "Accent",
    note: "The one colour that acts.",
    tokens: [
      { token: "accent", ref: ref("green", 1000), use: "The primary button, the focus, the current item." },
      { token: "accent-hover", ref: ref("gray", 1000), use: "The primary button under the pointer: the ink, as on the marketing site." },
      { token: "accent-subtle", ref: ref("green", 200), use: "A tint of the accent behind a selected control." },
      { token: "accent-bright", ref: ref("green", 700), use: "The bright green: the focus ring, a live indicator, the first chart series." },
    ],
  },
  {
    name: "Status",
    note: "Four meanings, four colours, each with a fill of its own.",
    tokens: [
      { token: "status-danger", ref: ref("red", 700), use: "Errors, destructive actions." },
      { token: "status-success", ref: ref("green", 700), use: "Done, confirmed, live." },
      { token: "status-warning", ref: ref("amber", 800), use: "Pending, attention needed." },
      { token: "status-info", ref: ref("blue", 700), use: "Neutral information." },
    ],
  },
  {
    name: "Stroke",
    note: "Lines.",
    tokens: [
      { token: "divider", ref: ref("gray-alpha", 400), use: "The border between things: the ink at 16%, so it sits on sheet and island alike." },
      { token: "divider-strong", ref: ref("gray-alpha", 600), use: "A border that must be seen: an input at rest." },
      { token: "divider-inverse", ref: ref("taupe-alpha", 400), use: "A line on the green or on the ink." },
    ],
  },
];
