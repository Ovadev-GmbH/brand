/* Ovadev's type.
 *
 * One face, three jobs. Geist sets the display, the prose and the meta;
 * there is no second family. The mono role is Geist with tabular figures
 * and a monospace fallback behind it, not a mono face — set in caps at
 * wide tracking it reads as machine text, which is the point. A fixed set
 * of styles named the way Geist names its own: Heading for titles, Copy
 * for running text, Label for single lines, Button for what renders a
 * button. Each style is one class — text-heading-54, text-copy-15 — that
 * sets size, line height, tracking and weight together.
 *
 * The big headings are the site's own steps: hero 98, display 78, section
 * 54 at weight 900 with negative tracking, because the face tightens well
 * and a large heading set loose reads as a list of words. Below 30px the
 * weight drops to 700, then 600.
 *
 * Inside a style, <strong> is the modifier: Strong in Copy and Label,
 * Subtle in Heading. scripts/gen-foundations.ts turns this into
 * typography.css; the catalog's Typography page renders it directly. */

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

const heading = (size: number, line: number, tracking: string, weight: number, use?: string): Style => ({
  cls: `text-heading-${size}`, name: `Heading ${size}`, size, line, weight, tracking, family: "sans", use,
});
const copy = (size: number, line: number, use?: string, mono = false): Style => ({
  cls: `text-copy-${size}${mono ? "-mono" : ""}`, name: `Copy ${size}${mono ? " Mono" : ""}`,
  size, line, weight: 400, tracking: "0", family: mono ? "mono" : "sans", use,
});
const label = (size: number, line: number, use?: string, mono = false): Style => ({
  cls: `text-label-${size}${mono ? "-mono" : ""}`, name: `Label ${size}${mono ? " Mono" : ""}`,
  size, line, weight: 400, tracking: "0", family: mono ? "mono" : "sans", use,
});
const caps = (size: number, line: number, tracking: string, use?: string, mono = false): Style => ({
  cls: `text-label-${size}-caps${mono ? "-mono" : ""}`, name: `Label ${size} Caps${mono ? " Mono" : ""}`,
  size, line, weight: 600, tracking, family: mono ? "mono" : "sans", use,
});
const button = (size: number, line: number, use?: string): Style => ({
  cls: `text-button-${size}`, name: `Button ${size}`, size, line, weight: 600, tracking: "0", family: "sans", use,
});

export const GROUPS: Group[] = [
  {
    name: "Heading",
    note: "Titles. 900 and tight above 30px, the site's own steps; 700 for a subheading; 600 inside a component.",
    strong: "subtle",
    styles: [
      heading(98, 90, "-0.04em", 900, "The hero. One per site."),
      heading(78, 74, "-0.035em", 900, "A page's title."),
      heading(54, 54, "-0.03em", 900, "A section's title."),
      heading(40, 44, "-0.03em", 900),
      heading(32, 36, "-0.02em", 700),
      heading(24, 28, "-0.015em", 700, "A subheading."),
      heading(20, 24, "-0.01em", 700),
      heading(16, 24, "-0.01em", 600, "Card and dialog titles."),
      heading(14, 20, "-0.01em", 600),
    ],
  },
  {
    name: "Copy",
    note: "Running text, several lines at a time. Generous leading, no tracking.",
    strong: "strong",
    styles: [
      copy(23, 32, "The sentence under a hero heading."),
      copy(18, 28, "The lede: the sentence under a heading."),
      copy(17, 27, "Prose on the site."),
      copy(15, 24, "Prose in a product; the most common text style."),
      copy(14, 20, "Secondary running text."),
      copy(13, 18, "Where space is at a premium."),
      copy(13, 18, "Inline code mentions.", true),
    ],
  },
  {
    name: "Label",
    note: "A single line: table cells, menu rows, form labels, eyebrows. Enough line height to sit next to an icon. Caps for the eyebrow and the meta line.",
    strong: "strong",
    styles: [
      label(18, 24),
      label(16, 20, "Titles that must read as more than regular text."),
      label(14, 20, "The most common label. Menus, rows, form labels."),
      label(14, 20, "The largest mono, to pair with text above 14.", true),
      label(13, 16, "A secondary line next to another label. Tabular figures for numbers."),
      label(13, 16, "Pairs with Label 14.", true),
      label(12, 16, "Tertiary text in busy views."),
      label(12, 16, undefined, true),
      caps(11, 12, "0.14em", "The eyebrow over a section: caps, wide."),
      caps(11, 12, "0.16em", "The meta line: tokens, counts, file names.", true),
    ],
  },
  {
    name: "Button",
    note: "Only inside components that render a button. 600, the display weight for a label.",
    strong: "strong",
    styles: [
      button(16, 24, "The largest button."),
      button(14, 20, "The default button."),
      button(12, 16, "Only when a tiny button sits inside an input."),
    ],
  },
];

export const FACES = {
  sans: { name: "Geist", stack: '"Geist Variable", "Geist", system-ui, Arial, sans-serif' },
  mono: { name: "Geist", stack: '"Geist Variable", "Geist", ui-monospace, "SF Mono", Menlo, monospace' },
};
