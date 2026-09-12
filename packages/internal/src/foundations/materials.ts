/* Internal's materials: flat. A surface is a black hairline and nothing else;
 * only what floats casts a shadow, and even that stays short. The identity
 * is the rule, not the lift.
 *
 * scripts/gen-foundations.ts turns this into materials.css. */

export type Material = { cls: string; name: string; radius: number; fill: string; stroke: string; shadow: string; use: string };

const ink = (alpha: number) => `oklch(0 0 0 / ${alpha}%)`;
const rule = `0 0 0 1px var(--int-gray-1000)`;

export const SURFACE: Material[] = [
  { cls: "material-base", name: "Base", radius: 2, fill: "var(--int-surface-primary)", stroke: rule, shadow: "none", use: "Everything at rest: cards, inputs, list containers. One black hairline." },
  { cls: "material-small", name: "Small", radius: 2, fill: "var(--int-surface-primary)", stroke: rule, shadow: "none", use: "The same rule; kept as a name so components read like Januna's." },
  { cls: "material-medium", name: "Medium", radius: 2, fill: "var(--int-surface-primary)", stroke: rule, shadow: `2px 2px 0 var(--int-gray-1000)`, use: "A card that invites a click: the rule, and a hard 2px offset." },
  { cls: "material-large", name: "Large", radius: 2, fill: "var(--int-surface-primary)", stroke: rule, shadow: `4px 4px 0 var(--int-gray-1000)`, use: "The one thing on the page that must be found: a 4px offset." },
];

export const FLOATING: Material[] = [
  { cls: "material-tooltip", name: "Tooltip", radius: 2, fill: "var(--int-gray-1000)", stroke: "none", shadow: "none", use: "Black, white text, no stem." },
  { cls: "material-menu", name: "Menu", radius: 2, fill: "var(--int-surface-primary)", stroke: rule, shadow: `0 8px 24px ${ink(12)}`, use: "Menus, popovers, comboboxes: the rule and a short lift." },
  { cls: "material-modal", name: "Modal", radius: 4, fill: "var(--int-surface-primary)", stroke: rule, shadow: `0 16px 48px ${ink(16)}`, use: "Dialogs and sheets." },
  { cls: "material-fullscreen", name: "Fullscreen", radius: 4, fill: "var(--int-surface-primary)", stroke: rule, shadow: `0 24px 80px ${ink(24)}`, use: "Takeovers." },
];

export const TINTS: Material[] = [
  { cls: "material-accent", name: "Accent", radius: 2, fill: "var(--int-surface-primary)", stroke: "0 0 0 1px var(--int-blue-800)", shadow: "none", use: "A card in focus, the recommended row." },
  { cls: "material-active", name: "Active", radius: 2, fill: "var(--int-blue-100)", stroke: "0 0 0 1px var(--int-blue-800)", shadow: "none", use: "A selected card, a focused control." },
  { cls: "material-danger", name: "Danger", radius: 2, fill: "var(--int-surface-primary)", stroke: "0 0 0 1px var(--int-red-800)", shadow: "none", use: "A card in error." },
];

export const PRACTICES = [
  { name: "When to use", items: ["Use a material instead of hand-rolling radius, fill, stroke and shadow; the name encodes the elevation.", "Base for almost everything. Medium and large only for the one object on a page that must be found first.", "Never stack two materials on one element; never add a border to one."] },
  { name: "Behaviour", items: ["The rule is the edge. Nothing in Internal has a soft edge.", "Only what floats lifts, and it lifts little."] },
  { name: "Accessibility", items: ["A material is chrome; semantics live on the wrapper.", "Selection is a fill and a word, never the ring alone."] },
];
