/* What the shell needs to wear one brand's clothes. The values are copied
   from the packages' own token files (packages/<id>/src/tokens.css) and, for
   internal, from the vendored design system — nothing here is invented, so a
   swatch on the Colors page and the CSS a component ships are the same
   string. The chrome tokens these map onto live in styles/tokens.css under
   [data-brand="<id>"]. */

import type { PkgId } from "./types";
import { colors as janunaColors, typography as janunaType, materials as janunaMaterials, layout as janunaLayout } from "@ovadev-gmbh/ui-januna";
import { colors as internColors, typography as internType, materials as internMaterials, layout as internLayout } from "@ovadev-gmbh/ui-internal";
import { colors as ovaColors, typography as ovaType, materials as ovaMaterials, layout as ovaLayout } from "@ovadev-gmbh/ui-ovadev";
import { colors as tovaColors, typography as tovaType, materials as tovaMaterials, layout as tovaLayout } from "@ovadev-gmbh/ui-ticketova";

/** A brand's foundations, as its package exports them (src/foundations). */
export type ColorSystem = typeof janunaColors;
/** The type system every brand shares: Januna's shape, with a brand face of
 *  its own (TICKETOVA's Oswald) as an optional third family. */
type Face = { name: string; stack: string };
export type TypeSystem = {
  GROUPS: {
    name: string;
    note: string;
    strong: "strong" | "subtle";
    styles: { cls: string; name: string; size: number; line: number; weight: number; tracking: string; family: "sans" | "mono" | "display"; use?: string }[];
  }[];
  FACES: { sans: Face; mono: Face; display?: Face };
};
export type MaterialSystem = typeof janunaMaterials;
export type LayoutSystem = typeof janunaLayout;

export type Swatch = { name: string; token: string; value: string; note?: string };

/** One drawing the brand owns, as it sits in public/brand. */
export type Mark = {
  /** public/brand/<file>.svg */
  file: string;
  /** What it is called on the page. */
  name: string;
  /** LGO or ICO in the filename the studio builds. */
  kind: "logo" | "icon";
  /** Pixels to move the mark on the introduction's card so its *visual*
   *  centre sits level with the others. Measured, not guessed: the Januna
   *  wordmark's letter bodies sit 12% above its box's centre (the j's
   *  descender takes the bottom), so at 48px it moves 6px down. */
  nudge?: number;
  /** One line under the name, if the drawing needs one. */
  note?: string;
  /** false keeps the mark off the introduction's card, where the marks sit
   *  side by side at 48px: a lockup repeats the icon and the wordmark that
   *  are already there and would only push them out of the frame. */
  card?: false;
  /** public/brand/<colour>.svg — the mark as it actually ships, ground and
   *  accents and all. Where it exists it is the one shown and downloaded; the
   *  currentColor drawing in `file` is the cut for anything that has to take
   *  the surrounding ink. */
  colour?: string;
  /** public/brand/<app>.svg — an icon's home-screen cut, square and opaque,
   *  for the Apple touch icon and the PWA icons. */
  app?: string;
  /** Without an `app` drawing, the colour of the full square the icon is
   *  set on for a home screen, which fills anything transparent itself. */
  ground?: string;
};
export type TypeRow = { name: string; family: string; weight: number; size: string; note: string };

/** The icon set a brand draws with, for the Icons page. */
export type IconSet = {
  /** Which package's shape the set has; the Icons page loads it accordingly. */
  kind: "hugeicons" | "lucide" | "phosphor";
  library: string;
  /** The package the icons are imported from. */
  pkg: string;
  /** The import line, as the components write it. */
  usage: string;
  /** The colour the page draws them in: the brand's green. */
  color: string;
};

export type BrandChrome = {
  /** The mark: a wordmark, since none of the brands has an SVG in this repo yet. */
  mark: string;
  swatches: Swatch[];
  type: TypeRow[];
  /** Where the tokens came from, named on the page. */
  source: string;
  /** Absent for internal, which has no marks of its own — it wears Ovadev's. */
  marks?: Mark[];
  /** public/brand/<og>.png — the brand's social card, 1200 × 630, as it
   *  ships. Absent until the brand has one. */
  og?: string;
  /** Only for a brand whose components ship with an icon set. */
  icons?: IconSet;
  /** One line per door on the introduction, where the brand has its own
   *  way of saying it. */
  lines?: { colors?: string; typography?: string; icons?: string; components?: string };
  /** Only for a brand with a colour *system*: scales and roles, read from
   *  the package. The swatches above are then the scales' working colours,
   *  for the introduction's card; the Colors page reads the system. */
  colors?: ColorSystem;
  typography?: TypeSystem;
  materials?: MaterialSystem;
  layout?: LayoutSystem;
};

export const CHROME: Record<PkgId, BrandChrome> = {
  ovadev: {
    marks: [
      {
        file: "ovadev-lockup",
        name: "Lockup",
        kind: "logo",
        card: false,
        colour: "ovadev-lockup-colour",
        note: "The icon in its colours and the wordmark in the plate's ink, on one field — the default. Cap height five cells of the mark, three cells between them, the cap box centred on the mark: the geometry ova.dev prints.",
      },
      { file: "ovadev-logo", name: "Logo", kind: "logo", note: "The Ovadev wordmark, outlined — it needs no font." },
      {
        file: "ovadev-icon",
        name: "Icon",
        kind: "icon",
        colour: "ovadev-icon-colour",
        app: "ovadev-app-icon",
        note: "The pixel O in the app icon's colours: light cells and the red block on ink, edge to edge.",
      },
      {
        file: "ovadev-app-icon",
        name: "App icon",
        kind: "icon",
        note: "The pixel O on its plate, as the home-screen icons ship: light cells and the red block on ink, with a launcher's margin.",
      },
    ],
    mark: "Ovadev",
    source: "packages/ovadev/src/foundations/colors.ts — paper, ink and one red, as ova.dev sets them, as scales",
    lines: {
      colors: "One ground, one ink, one red.",
      typography: "One face, three jobs: Geist.",
      icons: "Lucide, in the ink.",
      components: "Building blocks for the site, on Base UI.",
    },
    colors: ovaColors,
    typography: ovaType,
    materials: ovaMaterials,
    layout: ovaLayout,
    swatches: ovaColors.SCALES.filter((sc) => !sc.id.endsWith("-alpha")).map((sc) => ({
      name: sc.name,
      token: `--ova-${sc.id}-${sc.id === "red" ? 700 : 1000}`,
      value: sc.steps[sc.id === "red" ? 700 : 1000],
    })),
    type: [
      { name: "Display", family: '"Geist Variable", "Geist", system-ui, Arial, sans-serif', weight: 900, size: "54px", note: "text-heading-54, tight" },
      { name: "Text", family: '"Geist Variable", "Geist", system-ui, Arial, sans-serif', weight: 400, size: "15px", note: "text-copy-15" },
      { name: "Meta", family: '"Geist Variable", "Geist", ui-monospace, monospace', weight: 600, size: "11px", note: "text-label-11-caps-mono, caps and wide" },
    ],
    icons: {
      kind: "lucide",
      library: "Lucide",
      pkg: "lucide-react",
      usage: 'import { PlusIcon } from "@ovadev-gmbh/ui-ovadev/icons";  <PlusIcon className="size-4" />',
      color: "#eceef2",
    },
  },
  ticketova: {
    marks: [
      { file: "ticketova-logo", name: "Logo", kind: "logo", note: "The wordmark between its two rules." },
      {
        file: "ticketova-icon",
        name: "Icon",
        kind: "icon",
        colour: "ticketova-icon-colour",
        ground: "#ffffff",
        note: "The ticket booth, as the landing page ships it: black line art on its white disc.",
      },
    ],
    og: "ticketova-og",
    mark: "TICKETOVA",
    source: "packages/ticketova/src/foundations/colors.ts — ticketova.com's black, white, hairline grey, tick green and strike red, as scales",
    lines: {
      colors: "Black on white; green is the tick, red the refusal.",
      typography: "Oswald for the brand, Geist for the work.",
      icons: "Phosphor, in the ink.",
      components: "Building blocks for ticketing, on Base UI.",
    },
    colors: tovaColors,
    typography: tovaType,
    materials: tovaMaterials,
    layout: tovaLayout,
    swatches: tovaColors.SCALES.filter((sc) => !sc.id.endsWith("-alpha")).map((sc) => ({
      name: sc.name,
      token: `--tova-${sc.id}-${sc.id === "gray" ? 1000 : 800}`,
      value: sc.steps[sc.id === "gray" ? 1000 : 800],
    })),
    type: [
      { name: "Display", family: '"Oswald Variable", "Oswald", ui-sans-serif, system-ui, sans-serif', weight: 600, size: "40px", note: "text-heading-40, the brand" },
      { name: "Text", family: '"Geist Variable", "Geist", ui-sans-serif, system-ui, sans-serif', weight: 400, size: "14px", note: "text-copy-14, the work" },
      { name: "Mono", family: '"Geist Mono Variable", "Geist Mono", ui-monospace, monospace', weight: 400, size: "13px", note: "text-label-13-mono, codes and amounts" },
    ],
    icons: {
      kind: "phosphor",
      library: "Phosphor",
      pkg: "@phosphor-icons/react",
      usage: 'import { TicketIcon } from "@ovadev-gmbh/ui-ticketova/icons";  <TicketIcon className="size-4" />',
      color: "#0a0a0a",
    },
  },
  januna: {
    marks: [
      { file: "januna-logo", name: "Logo", kind: "logo", note: "The Januna wordmark.", nudge: 6 },
      {
        file: "januna-icon",
        name: "Icon",
        kind: "icon",
        colour: "januna-icon-colour",
        ground: "#094413",
        note: "The wave on its green badge, as the app icon ships it.",
      },
    ],
    mark: "Januna",
    source: "packages/januna/src/foundations/colors.ts — nine scales, generated into colors.css",
    lines: {
      colors: "A warm, high-contrast colour system.",
      typography: "One face, set in a fixed scale.",
      icons: "Hugeicons, in the brand's green.",
      components: "Building blocks for the product, on Base UI.",
    },
    colors: janunaColors,
    typography: janunaType,
    materials: janunaMaterials,
    layout: janunaLayout,
    swatches: janunaColors.SCALES.filter((sc) => !sc.id.endsWith("-alpha")).map((sc) => ({
      name: sc.name,
      token: `--jan-${sc.id}-700`,
      value: sc.steps[700],
    })),
    type: [
      { name: "Display", family: '"Geist Variable", "Geist", ui-sans-serif, system-ui, sans-serif', weight: 600, size: "40px", note: "--jan-font" },
      { name: "Heading", family: '"Geist Variable", "Geist", ui-sans-serif, system-ui, sans-serif', weight: 600, size: "24px", note: "--jan-font" },
      { name: "Body", family: '"Geist Variable", "Geist", ui-sans-serif, system-ui, sans-serif', weight: 400, size: "16px", note: "--jan-font" },
    ],
    icons: {
      kind: "hugeicons",
      library: "Hugeicons",
      pkg: "@hugeicons/core-free-icons",
      usage: 'import { HugeiconsIcon, Add01Icon } from "@ovadev-gmbh/ui-januna/icons";',
      color: "#094413",
    },
  },
  internal: {
    /* INTERN is Ovadev's own tool, so it wears Ovadev's mark; only the word
       changes. The wordmark is cut from the same setting as Ovadev's. */
    marks: [
      {
        file: "intern-lockup",
        name: "Lockup",
        kind: "logo",
        card: false,
        colour: "intern-lockup-colour",
        note: "Ovadev's icon in its colours with the Intern wordmark in the plate's ink, on the Ovadev lockup's geometry: cap height five cells, gap three, cap box centred on the mark.",
      },
      { file: "intern-logo", name: "Logo", kind: "logo", note: "The Intern wordmark — Geist 900, the same setting as Ovadev's, outlined." },
      {
        file: "ovadev-icon",
        name: "Icon",
        kind: "icon",
        colour: "ovadev-icon-colour",
        app: "ovadev-app-icon",
        note: "The pixel O in the app icon's colours: light cells and the red block on ink, edge to edge. Ovadev's, unchanged.",
      },
      {
        file: "ovadev-app-icon",
        name: "App icon",
        kind: "icon",
        note: "The pixel O on its plate, as the home-screen icons ship: light cells and the red block on ink, with a launcher's margin. Ovadev's, unchanged.",
      },
    ],
    mark: "INTERN",
    source: "packages/internal/src/foundations/colors.ts — INTERN's black, white, neutrals and four colours, as scales",
    lines: {
      colors: "Black, white, and one colour per meaning.",
      typography: "Geist, dense, figures in mono.",
      icons: "Lucide, in the ink.",
      components: "Building blocks for the tools, on Base UI.",
    },
    colors: internColors,
    typography: internType,
    materials: internMaterials,
    layout: internLayout,
    swatches: internColors.SCALES.filter((sc) => !sc.id.endsWith("-alpha")).map((sc) => ({
      name: sc.name,
      token: `--int-${sc.id}-800`,
      value: sc.steps[800],
    })),
    type: [
      { name: "Display", family: '"Geist Variable", "Geist", ui-sans-serif, system-ui, sans-serif', weight: 600, size: "40px", note: "text-heading-40" },
      { name: "Text", family: '"Geist Variable", "Geist", ui-sans-serif, system-ui, sans-serif', weight: 400, size: "14px", note: "text-copy-14" },
      { name: "Mono", family: '"Geist Mono Variable", "Geist Mono", ui-monospace, monospace', weight: 400, size: "13px", note: "text-label-13-mono, figures and IDs" },
    ],
    icons: {
      kind: "lucide",
      library: "Lucide",
      pkg: "lucide-react",
      usage: 'import { PlusIcon } from "@ovadev-gmbh/ui-internal/icons";  <PlusIcon className="size-4" />',
      color: "#000000",
    },
  },
};

const TOKEN_PREFIX: Partial<Record<PkgId, string>> = { internal: "int", januna: "jan", ovadev: "ova", ticketova: "tova" };

/** A brand's colour tokens as custom properties, for the element that draws
 *  with them. The catalog's pages do not load the packages' stylesheets (two
 *  brands' utilities share class names), so a material whose stroke is
 *  var(--int-gray-300) would otherwise resolve to nothing and draw nothing. */
export function tokenVars(id: PkgId): Record<string, string> {
  const colors = CHROME[id].colors;
  const p = TOKEN_PREFIX[id];
  if (!colors || !p) return {};
  const vars: Record<string, string> = {};
  for (const [step, bg] of Object.entries(colors.BACKGROUNDS)) vars[`--${p}-background-${step}`] = (bg as { value: string }).value;
  for (const scale of colors.SCALES) {
    for (const [step, value] of Object.entries(scale.steps)) vars[`--${p}-${scale.id}-${step}`] = value as string;
  }
  for (const group of colors.SEMANTIC) {
    for (const t of group.tokens) vars[`--${p}-${t.token}`] = `var(--${p}-${t.ref})`;
  }
  return vars;
}
