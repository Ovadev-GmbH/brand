/* TICKETOVA's materials: quiet, with the site's soft corner. A surface is a
 * grey hairline and nothing else; only what floats casts a shadow, and even
 * that stays short. Corners are 6px, as ticketova.com draws its cards and
 * buttons — the nova shape.
 *
 * scripts/gen-foundations.ts turns this into materials.css. */

export type Material = { cls: string; name: string; radius: number; fill: string; stroke: string; shadow: string; use: string };

const ink = (alpha: number) => `oklch(0 0 0 / ${alpha}%)`;
const line = `0 0 0 1px var(--tova-gray-300)`;
const edge = `0 0 0 1px var(--tova-gray-400)`;

export const SURFACE: Material[] = [
  { cls: "material-base", name: "Base", radius: 6, fill: "var(--tova-surface-primary)", stroke: line, shadow: "none", use: "Everything at rest: cards, list containers, tables. One grey hairline." },
  { cls: "material-small", name: "Small", radius: 6, fill: "var(--tova-surface-primary)", stroke: edge, shadow: "none", use: "Inputs, selects, resting outline buttons: a hairline one step stronger, so a control reads as a control." },
  { cls: "material-medium", name: "Medium", radius: 8, fill: "var(--tova-surface-primary)", stroke: line, shadow: `0 2px 8px ${ink(6)}`, use: "A card that invites a click: an event in the shop." },
  { cls: "material-large", name: "Large", radius: 8, fill: "var(--tova-surface-primary)", stroke: line, shadow: `0 4px 16px ${ink(8)}`, use: "The one thing on the page that must be found first: the basket." },
];

export const FLOATING: Material[] = [
  { cls: "material-tooltip", name: "Tooltip", radius: 4, fill: "var(--tova-gray-1000)", stroke: "none", shadow: "none", use: "Black, white text, no stem." },
  { cls: "material-menu", name: "Menu", radius: 8, fill: "var(--tova-surface-primary)", stroke: line, shadow: `0 8px 24px ${ink(12)}`, use: "Menus, popovers, comboboxes: the hairline and a short lift." },
  { cls: "material-modal", name: "Modal", radius: 12, fill: "var(--tova-surface-primary)", stroke: line, shadow: `0 16px 48px ${ink(16)}`, use: "Dialogs and sheets." },
  { cls: "material-fullscreen", name: "Fullscreen", radius: 0, fill: "var(--tova-surface-primary)", stroke: "none", shadow: "none", use: "Takeovers: the scan result, edge to edge." },
];

export const TINTS: Material[] = [
  { cls: "material-accent", name: "Accent", radius: 6, fill: "var(--tova-surface-primary)", stroke: "0 0 0 1px var(--tova-gray-1000)", shadow: "none", use: "A card in focus, the recommended ticket: the ink hairline." },
  { cls: "material-active", name: "Active", radius: 6, fill: "var(--tova-gray-alpha-100)", stroke: "0 0 0 1px var(--tova-gray-1000)", shadow: "none", use: "A selected card: the chosen day, the chosen ticket." },
  { cls: "material-danger", name: "Danger", radius: 6, fill: "var(--tova-surface-primary)", stroke: "0 0 0 1px var(--tova-red-800)", shadow: "none", use: "A card in error." },
];

export const PRACTICES = [
  { name: "When to use", items: ["Use a material instead of hand-rolling radius, fill, stroke and shadow; the name encodes the elevation.", "Base for almost everything; small for controls. Medium and large only for the one object on a page that must be found first.", "Never stack two materials on one element; never add a border to one."] },
  { name: "Behaviour", items: ["The hairline is the edge. Corners are 6px, 8px for what is larger, 12px for a dialog.", "Only what floats lifts, and it lifts little."] },
  { name: "Accessibility", items: ["A material is chrome; semantics live on the wrapper.", "Selection is a fill and a word, never the ring alone."] },
];
