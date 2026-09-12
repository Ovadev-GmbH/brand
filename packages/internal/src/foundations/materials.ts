/* Internal's materials: quiet. A surface is a grey hairline and nothing
 * else; only what floats casts a shadow, and even that stays short. Corners
 * are square: this is the lyra shape, and a tool wears it well.
 *
 * scripts/gen-foundations.ts turns this into materials.css. */

export type Material = { cls: string; name: string; radius: number; fill: string; stroke: string; shadow: string; use: string };

const ink = (alpha: number) => `oklch(0 0 0 / ${alpha}%)`;
const line = `0 0 0 1px var(--int-gray-300)`;
const edge = `0 0 0 1px var(--int-gray-400)`;

export const SURFACE: Material[] = [
  { cls: "material-base", name: "Base", radius: 0, fill: "var(--int-surface-primary)", stroke: line, shadow: "none", use: "Everything at rest: cards, list containers, tables. One grey hairline." },
  { cls: "material-small", name: "Small", radius: 0, fill: "var(--int-surface-primary)", stroke: edge, shadow: "none", use: "Inputs, selects, resting outline buttons: a hairline one step stronger, so a control reads as a control." },
  { cls: "material-medium", name: "Medium", radius: 0, fill: "var(--int-surface-primary)", stroke: line, shadow: `0 2px 8px ${ink(6)}`, use: "A card that invites a click." },
  { cls: "material-large", name: "Large", radius: 0, fill: "var(--int-surface-primary)", stroke: line, shadow: `0 4px 16px ${ink(8)}`, use: "The one thing on the page that must be found first." },
];

export const FLOATING: Material[] = [
  { cls: "material-tooltip", name: "Tooltip", radius: 0, fill: "var(--int-gray-1000)", stroke: "none", shadow: "none", use: "Black, white text, no stem." },
  { cls: "material-menu", name: "Menu", radius: 0, fill: "var(--int-surface-primary)", stroke: line, shadow: `0 8px 24px ${ink(12)}`, use: "Menus, popovers, comboboxes: the hairline and a short lift." },
  { cls: "material-modal", name: "Modal", radius: 0, fill: "var(--int-surface-primary)", stroke: line, shadow: `0 16px 48px ${ink(16)}`, use: "Dialogs and sheets." },
  { cls: "material-fullscreen", name: "Fullscreen", radius: 0, fill: "var(--int-surface-primary)", stroke: line, shadow: `0 24px 80px ${ink(24)}`, use: "Takeovers." },
];

export const TINTS: Material[] = [
  { cls: "material-accent", name: "Accent", radius: 0, fill: "var(--int-surface-primary)", stroke: "0 0 0 1px var(--int-blue-800)", shadow: "none", use: "A card in focus, the recommended row." },
  { cls: "material-active", name: "Active", radius: 0, fill: "var(--int-blue-100)", stroke: "0 0 0 1px var(--int-blue-800)", shadow: "none", use: "A selected card, a focused control." },
  { cls: "material-danger", name: "Danger", radius: 0, fill: "var(--int-surface-primary)", stroke: "0 0 0 1px var(--int-red-800)", shadow: "none", use: "A card in error." },
];

export const PRACTICES = [
  { name: "When to use", items: ["Use a material instead of hand-rolling radius, fill, stroke and shadow; the name encodes the elevation.", "Base for almost everything; small for controls. Medium and large only for the one object on a page that must be found first.", "Never stack two materials on one element; never add a border to one."] },
  { name: "Behaviour", items: ["The hairline is the edge. Corners are square.", "Only what floats lifts, and it lifts little."] },
  { name: "Accessibility", items: ["A material is chrome; semantics live on the wrapper.", "Selection is a fill and a word, never the ring alone."] },
];
