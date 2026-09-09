/* What the shell needs to wear one brand's clothes. The values are copied
   from the packages' own token files (packages/<id>/src/tokens.css) and, for
   internal, from the vendored design system — nothing here is invented, so a
   swatch on the Colors page and the CSS a component ships are the same
   string. The chrome tokens these map onto live in styles/tokens.css under
   [data-brand="<id>"]. */

import type { PkgId } from "./types";

export type Swatch = { name: string; token: string; value: string; note?: string };

/** One drawing the brand owns, as it sits in public/brand. The studio recolours
 *  and frames it, so only the black artwork is kept — one file, not a variant
 *  per colour. */
export type Mark = {
  /** public/brand/<file>.svg */
  file: string;
  /** What it is called on the page. */
  name: string;
  /** LGO or ICO in the filename the studio builds. */
  kind: "logo" | "icon";
  /** One line under the name, if the drawing needs one. */
  note?: string;
};
export type TypeRow = { name: string; family: string; weight: number; size: string; note: string };

export type BrandChrome = {
  /** The mark: a wordmark, since none of the brands has an SVG in this repo yet. */
  mark: string;
  /** Ground the examples default to. */
  dark: boolean;
  swatches: Swatch[];
  type: TypeRow[];
  /** Where the tokens came from, named on the page. */
  source: string;
  /** The letter this brand's assets are filed under. Absent for internal,
   *  which has no marks of its own — it wears Ovadev's. */
  letter?: string;
  marks?: Mark[];
};

export const CHROME: Record<PkgId, BrandChrome> = {
  ovadev: {
    letter: "O",
    marks: [
      { file: "ovadev-logo", name: "Logo", kind: "logo", note: "The OVADEV wordmark, outlined — it needs no font." },
      { file: "ovadev-icon", name: "Icon", kind: "icon", note: "The pixel O. Its red quadrant is an accent, so the monochrome cut leaves it out." },
    ],
    mark: "Ovadev",
    dark: true,
    source: "packages/ovadev/src/tokens.css — taken from Landing/apps/ova/src/styles.css",
    swatches: [
      { name: "Background", token: "--ova-bg", value: "#0e0f12" },
      { name: "Foreground", token: "--ova-fg", value: "#eceef2" },
      { name: "Accent", token: "--ova-accent", value: "#e8202a", note: "The only colour in the system that is not a grey." },
      { name: "On accent", token: "--ova-on-accent", value: "#eceef2" },
      { name: "Muted", token: "--ova-muted", value: "#8b9098" },
      { name: "Line", token: "--ova-line", value: "rgba(236, 238, 242, 0.26)" },
    ],
    type: [
      { name: "Display", family: '"Oswald", ui-sans-serif, system-ui, sans-serif', weight: 600, size: "40px", note: "--ova-font, set in caps" },
      { name: "Heading", family: '"Oswald", ui-sans-serif, system-ui, sans-serif', weight: 600, size: "24px", note: "--ova-font" },
      { name: "Body", family: "ui-sans-serif, system-ui, sans-serif", weight: 400, size: "16px", note: "system stack" },
    ],
  },
  ticketova: {
    letter: "T",
    marks: [
      { file: "ticketova-logo", name: "Logo", kind: "logo", note: "The wordmark between its two rules." },
      { file: "ticketova-icon", name: "Icon", kind: "icon", note: "The T, between the same two rules." },
    ],
    mark: "TICKETOVA",
    dark: false,
    source: "packages/ticketova/src/tokens.css — taken from Landing/apps/ticketova/src/globals.css",
    swatches: [
      { name: "Background", token: "--tova-bg", value: "#fafafa" },
      { name: "Foreground", token: "--tova-fg", value: "#0a0a0a" },
      { name: "Accent", token: "--tova-accent", value: "#065f46", note: "No colour is decoration." },
      { name: "On accent", token: "--tova-on-accent", value: "#fafafa" },
      { name: "Muted", token: "--tova-muted", value: "#9ca3af" },
      { name: "Line", token: "--tova-line", value: "#e5e7eb" },
    ],
    type: [
      { name: "Display", family: "ui-sans-serif, system-ui, sans-serif", weight: 600, size: "40px", note: "--tova-font" },
      { name: "Heading", family: "ui-sans-serif, system-ui, sans-serif", weight: 600, size: "24px", note: "--tova-font" },
      { name: "Body", family: "ui-sans-serif, system-ui, sans-serif", weight: 400, size: "16px", note: "--tova-font" },
    ],
  },
  januna: {
    letter: "J",
    marks: [
      { file: "januna-logo", name: "Logo", kind: "logo", note: "The Januna wordmark." },
      { file: "januna-icon", name: "Icon", kind: "icon", note: "The wave, placed on the square the app icon uses." },
    ],
    mark: "Januna",
    dark: false,
    source: "packages/januna/src/tokens.css — taken from the Januna repo's globals.css",
    swatches: [
      { name: "Background", token: "--jan-bg", value: "oklch(1 0 0)" },
      { name: "Foreground", token: "--jan-fg", value: "oklch(0.145 0 0)" },
      { name: "Accent", token: "--jan-accent", value: "oklch(0.527 0.154 150.069)", note: "Kept in oklch, not converted." },
      { name: "On accent", token: "--jan-on-accent", value: "oklch(0.982 0.018 155.826)" },
      { name: "Muted", token: "--jan-muted", value: "oklch(0.556 0 0)" },
      { name: "Line", token: "--jan-line", value: "oklch(0.922 0 0)" },
    ],
    type: [
      { name: "Display", family: '"Instrument Sans", ui-sans-serif, system-ui, sans-serif', weight: 600, size: "40px", note: "--jan-font" },
      { name: "Heading", family: '"Instrument Sans", ui-sans-serif, system-ui, sans-serif', weight: 600, size: "24px", note: "--jan-font" },
      { name: "Body", family: '"Instrument Sans", ui-sans-serif, system-ui, sans-serif', weight: 400, size: "16px", note: "--jan-font" },
    ],
  },
  internal: {
    mark: "INTERN",
    dark: false,
    source: "src/vendor/design-system/ovadev.css — the build INTERN ships",
    swatches: [
      { name: "Black", token: "--ovadev-c-blk", value: "#000000" },
      { name: "White", token: "--ovadev-c-wht", value: "#ffffff" },
      { name: "Neutral x", token: "--ovadev-c-ntr-x", value: "#262626" },
      { name: "Neutral y", token: "--ovadev-c-ntr-y", value: "#57534e" },
      { name: "Neutral m", token: "--ovadev-c-ntr-m", value: "#a8a29e" },
      { name: "Neutral s", token: "--ovadev-c-ntr-s", value: "#e5e5e5" },
      { name: "Red", token: "--ovadev-c-red-x", value: "#991b1b" },
      { name: "Green", token: "--ovadev-c-grn-x", value: "#166534" },
      { name: "Blue", token: "--ovadev-c-blu-x", value: "#3730a3", note: "Also the focus colour." },
      { name: "Yellow", token: "--ovadev-c-ylw-x", value: "#ca8a04" },
    ],
    type: [
      { name: "Display", family: '"Oswald", ui-sans-serif, system-ui, sans-serif', weight: 600, size: "48px", note: "--ovadev-font-display" },
      { name: "Text", family: '"Source Sans 3", ui-sans-serif, system-ui, sans-serif', weight: 400, size: "16px", note: "--ovadev-font-text" },
      { name: "Mono", family: '"JetBrains Mono", ui-monospace, monospace', weight: 400, size: "14px", note: "--ovadev-font-mono, figures only" },
    ],
  },
};
