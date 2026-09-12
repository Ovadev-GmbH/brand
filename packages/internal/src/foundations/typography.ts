/* Intern's type.
 *
 * One face, Geist, with Geist Mono for figures, codes and paths, and a fixed set of
 * styles named the way Geist names its own: Heading for titles, Copy for
 * running text, Label for single lines, Button for what renders a button.
 * Each style is one class — text-heading-24, text-copy-14 — that sets the
 * size, line height, tracking and weight together, so an app never picks
 * those four apart.
 *
 * Inside a style, <strong> is the modifier: Strong in Copy and Label,
 * Subtle in Heading (a lighter weight and ink, for the second half of a
 * title).
 *
 * scripts/gen-foundations.ts turns this into typography.css; the catalog's
 * Typography page renders it directly. */

export type Style = {
  /** The class: text-heading-24. */
  cls: string;
  name: string;
  size: number;
  line: number;
  weight: number;
  tracking: string;
  family: "sans" | "mono";
  use?: string;
};

export type Group = {
  name: string;
  note: string;
  /** What <strong> does inside the group. */
  strong: "strong" | "subtle";
  styles: Style[];
};

const heading = (size: number, line: number, tracking: string, use?: string): Style => ({
  cls: `text-heading-${size}`, name: `Heading ${size}`, size, line, weight: 600, tracking, family: "sans", use,
});
const copy = (size: number, line: number, use?: string, mono = false): Style => ({
  cls: `text-copy-${size}${mono ? "-mono" : ""}`, name: `Copy ${size}${mono ? " Mono" : ""}`,
  size, line, weight: 400, tracking: "0", family: mono ? "mono" : "sans", use,
});
const label = (size: number, line: number, use?: string, mono = false): Style => ({
  cls: `text-label-${size}${mono ? "-mono" : ""}`, name: `Label ${size}${mono ? " Mono" : ""}`,
  size, line, weight: 400, tracking: "0", family: mono ? "mono" : "sans", use,
});
const button = (size: number, line: number, use?: string): Style => ({
  cls: `text-button-${size}`, name: `Button ${size}`, size, line, weight: 500, tracking: "0", family: "sans", use,
});

export const GROUPS: Group[] = [
  {
    name: "Heading",
    note: "Titles for pages and sections. Tight, with the tracking pulled in as the size grows.",
    strong: "subtle",
    styles: [
      heading(72, 72, "-0.058em"),
      heading(64, 64, "-0.056em"),
      heading(56, 56, "-0.05em"),
      heading(48, 56, "-0.04em"),
      heading(40, 48, "-0.04em", "Page titles."),
      heading(32, 40, "-0.03em"),
      heading(24, 32, "-0.02em", "Section titles."),
      heading(20, 26, "-0.02em"),
      heading(16, 24, "-0.01em", "Card and dialog titles."),
      heading(14, 20, "-0.01em"),
    ],
  },
  {
    name: "Copy",
    note: "Running text, several lines at a time. More line height than Label.",
    strong: "strong",
    styles: [
      copy(24, 36, "Hero areas on marketing pages."),
      copy(20, 30, "Hero areas on marketing pages."),
      copy(18, 28, "Marketing, big quotes."),
      copy(16, 24, "Simpler, larger views like dialogs, where text can breathe."),
      copy(14, 20, "The most common text style."),
      copy(13, 18, "Secondary text, and views where space is at a premium."),
      copy(13, 18, "Inline code mentions.", true),
    ],
  },
  {
    name: "Label",
    note: "A single line: table cells, menu rows, form labels. Enough line height to sit next to an icon.",
    strong: "strong",
    styles: [
      label(20, 32),
      label(18, 20),
      label(16, 20, "Titles that must read as more than regular text."),
      label(14, 20, "The most common label. Menus, rows, form labels."),
      label(14, 20, "The largest mono, to pair with text above 14.", true),
      label(13, 16, "A secondary line next to another label. Tabular figures for numbers."),
      label(13, 16, "Pairs with Label 14.", true),
      label(12, 16, "Tertiary text in busy views: comments, show more, the capitals in calendars."),
      label(12, 16, undefined, true),
    ],
  },
  {
    name: "Button",
    note: "Only inside components that render a button.",
    strong: "strong",
    styles: [
      button(16, 24, "The largest button."),
      button(14, 20, "The default button."),
      button(12, 16, "Only when a tiny button sits inside an input."),
    ],
  },
];

export const FACES = {
  sans: { name: "Geist", stack: '"Geist Variable", "Geist", ui-sans-serif, system-ui, sans-serif' },
  mono: { name: "Geist Mono", stack: '"Geist Mono Variable", "Geist Mono", ui-monospace, "SF Mono", Menlo, monospace' },
};
