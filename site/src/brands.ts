/* What the shell needs to wear one brand's clothes. The values are copied
   from the packages' own token files (packages/<id>/src/tokens.css) and, for
   internal, from the vendored design system — nothing here is invented, so a
   swatch on the Colors page and the CSS a component ships are the same
   string. The chrome tokens these map onto live in styles/tokens.css under
   [data-brand="<id>"]. */

import type { PkgId } from "./types";
import { colors as janunaColors } from "@ovadev-gmbh/ui-januna";

/** A brand's colour system, as its package exports it (foundations/colors). */
export type ColorSystem = typeof janunaColors;

export type Swatch = { name: string; token: string; value: string; note?: string };

/** One drawing the brand owns, as it sits in public/brand. */
export type Mark = {
  /** public/brand/<file>.svg */
  file: string;
  /** What it is called on the page. */
  name: string;
  /** LGO or ICO in the filename the studio builds. */
  kind: "logo" | "icon";
  /** One line under the name, if the drawing needs one. */
  note?: string;
  /** public/brand/<colour>.svg — the mark as it actually ships, ground and
   *  accents and all. Where it exists it is the one shown and downloaded; the
   *  currentColor drawing in `file` is the cut for anything that has to take
   *  the surrounding ink. */
  colour?: string;
};
export type TypeRow = { name: string; family: string; weight: number; size: string; note: string };

/** The icon set a brand draws with, for the Icons page. */
export type IconSet = {
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
  /** Only for a brand whose components ship with an icon set. */
  icons?: IconSet;
  /** Only for a brand with a colour *system*: scales and roles, read from
   *  the package. The swatches above are then the scales' working colours,
   *  for the introduction's card; the Colors page reads the system. */
  colors?: ColorSystem;
};

export const CHROME: Record<PkgId, BrandChrome> = {
  ovadev: {
    marks: [
      { file: "ovadev-logo", name: "Logo", kind: "logo", note: "The OVADEV wordmark, outlined — it needs no font." },
      {
        file: "ovadev-icon",
        name: "Icon",
        kind: "icon",
        colour: "ovadev-icon-colour",
        note: "The pixel O, as it ships: paper, ink and the red block.",
      },
    ],
    mark: "Ovadev",
    source: "packages/ovadev/src/tokens.css — taken from Landing/apps/ova/src/styles.css",
    swatches: [
      { name: "Background", token: "--ova-bg", value: "#0e0f12" },
      { name: "Foreground", token: "--ova-fg", value: "#eceef2" },
      { name: "Accent", token: "--ova-accent", value: "#e8202a" },
    ],
    type: [
      { name: "Display", family: '"Oswald", ui-sans-serif, system-ui, sans-serif', weight: 600, size: "40px", note: "--ova-font, set in caps" },
      { name: "Heading", family: '"Oswald", ui-sans-serif, system-ui, sans-serif', weight: 600, size: "24px", note: "--ova-font" },
      { name: "Body", family: "ui-sans-serif, system-ui, sans-serif", weight: 400, size: "16px", note: "system stack" },
    ],
  },
  ticketova: {
    marks: [
      { file: "ticketova-logo", name: "Logo", kind: "logo", note: "The wordmark between its two rules." },
      { file: "ticketova-icon", name: "Icon", kind: "icon", note: "The T, between the same two rules." },
    ],
    mark: "TICKETOVA",
    source: "packages/ticketova/src/tokens.css — taken from Landing/apps/ticketova/src/globals.css",
    swatches: [
      { name: "Background", token: "--tova-bg", value: "#fafafa" },
      { name: "Foreground", token: "--tova-fg", value: "#0a0a0a" },
    ],
    type: [
      { name: "Display", family: "Oswald, ui-sans-serif, system-ui, sans-serif", weight: 700, size: "40px", note: "--tova-font" },
      { name: "Heading", family: "Oswald, ui-sans-serif, system-ui, sans-serif", weight: 700, size: "24px", note: "--tova-font" },
      { name: "Body", family: "Oswald, ui-sans-serif, system-ui, sans-serif", weight: 400, size: "16px", note: "--tova-font, the only other weight" },
    ],
  },
  januna: {
    marks: [
      { file: "januna-logo", name: "Logo", kind: "logo", note: "The Januna wordmark." },
      {
        file: "januna-icon",
        name: "Icon",
        kind: "icon",
        colour: "januna-icon-colour",
        note: "The wave on its green badge, as the app icon ships it.",
      },
    ],
    mark: "Januna",
    source: "packages/januna/src/foundations/colors.ts — nine scales, generated into colors.css",
    colors: janunaColors,
    swatches: janunaColors.SCALES.filter((sc) => sc.id !== "gray-alpha").map((sc) => ({
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
      library: "Hugeicons",
      pkg: "@hugeicons/core-free-icons",
      usage: 'import { HugeiconsIcon } from "@hugeicons/react"; import { Add01Icon } from "@hugeicons/core-free-icons";',
      color: "#094413",
    },
  },
  internal: {
    mark: "INTERN",
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
