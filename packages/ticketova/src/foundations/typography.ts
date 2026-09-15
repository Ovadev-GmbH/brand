/* TICKETOVA's type.
 *
 * Two faces with two jobs. Oswald is the brand: the wordmark's face, set
 * in the large headings — a page's title, a section's title, a price, an
 * event's name — where its condensed height reads as a poster. Geist is
 * the work: every control, table, form and running line, because a till,
 * a scan list and an order table are read for hours and Oswald is not a
 * face for that. Geist Mono sets figures, ticket codes and order numbers.
 *
 * The line is drawn at 24px: Heading 24 and up is Oswald, Heading 20 and
 * below — a card's or a dialog's title — is Geist, like everything inside
 * a component. The shadcn components' own `font-heading` stays Geist.
 *
 * A fixed set of styles named the way Geist names its own: Heading for
 * titles, Copy for running text, Label for single lines, Button for what
 * renders a button. Each style is one class — text-heading-40,
 * text-copy-14 — that sets size, line height, tracking and weight together.
 * Inside a style, <strong> is the modifier: Strong in Copy and Label,
 * Subtle in Heading.
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
  family: "sans" | "mono" | "display";
  use?: string;
};

export type Group = {
  name: string;
  note: string;
  /** What <strong> does inside the group. */
  strong: "strong" | "subtle";
  styles: Style[];
};

/* Oswald for the brand's headings, Geist below 24px. */
const heading = (size: number, line: number, tracking: string, use?: string): Style => ({
  cls: `text-heading-${size}`, name: `Heading ${size}`, size, line, weight: 600, tracking, family: size >= 24 ? "display" : "sans", use,
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
    note: "Titles. Oswald from 24px up, as the site sets its headings: 600, tracked in a little as the size grows. Geist below, inside components.",
    strong: "subtle",
    styles: [
      heading(72, 76, "-0.02em", "The hero. One per site."),
      heading(56, 60, "-0.02em"),
      heading(48, 52, "-0.015em"),
      heading(40, 44, "-0.015em", "Page titles on the shop; an event's name."),
      heading(32, 36, "-0.01em", "Page titles in the dashboard."),
      heading(24, 28, "-0.005em", "Section titles; a price."),
      heading(20, 26, "-0.02em", "Geist from here down."),
      heading(16, 24, "-0.01em", "Card and dialog titles."),
      heading(14, 20, "-0.01em"),
    ],
  },
  {
    name: "Copy",
    note: "Running text, several lines at a time, in Geist. More line height than Label.",
    strong: "strong",
    styles: [
      copy(20, 30, "The sentence under a hero on the shop."),
      copy(18, 28, "The lede under a page title."),
      copy(16, 24, "Simpler, larger views like dialogs and the checkout, where text can breathe."),
      copy(14, 20, "The most common text style."),
      copy(13, 18, "Secondary text, and views where space is at a premium."),
      copy(13, 18, "Inline code mentions.", true),
    ],
  },
  {
    name: "Label",
    note: "A single line: table cells, menu rows, form labels. Enough line height to sit next to an icon. Mono for ticket codes, order numbers and amounts in a column.",
    strong: "strong",
    styles: [
      label(20, 32),
      label(18, 20),
      label(16, 20, "Titles that must read as more than regular text."),
      label(14, 20, "The most common label. Menus, rows, form labels."),
      label(14, 20, "The largest mono, to pair with text above 14.", true),
      label(13, 16, "A secondary line next to another label. Tabular figures for numbers."),
      label(13, 16, "Pairs with Label 14: an order number, a ticket code.", true),
      label(12, 16, "Tertiary text in busy views: a timestamp, the capitals in calendars."),
      label(12, 16, undefined, true),
    ],
  },
  {
    name: "Button",
    note: "Only inside components that render a button.",
    strong: "strong",
    styles: [
      button(16, 24, "The largest button: the checkout's pay button."),
      button(14, 20, "The default button."),
      button(12, 16, "Only when a tiny button sits inside an input."),
    ],
  },
];

export const FACES = {
  sans: { name: "Geist", stack: '"Geist Variable", "Geist", ui-sans-serif, system-ui, sans-serif' },
  mono: { name: "Geist Mono", stack: '"Geist Mono Variable", "Geist Mono", ui-monospace, "SF Mono", Menlo, monospace' },
  display: { name: "Oswald", stack: '"Oswald Variable", "Oswald", ui-sans-serif, system-ui, sans-serif' },
};
