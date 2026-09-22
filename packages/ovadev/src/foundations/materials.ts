/* Ovadev's materials: cut, not moulded. A surface is a hairline and
 * nothing else; corners are hard; and the one shadow in the system is a
 * hard offset — 8px right, 8px down, no blur, no spread — because a
 * blurred shadow is a bevel with extra steps. Only what floats casts it.
 * Its colour is the `cut` token: black on dark paper, a grey of the ink
 * on light. What is lifted sits on `surface-raised`, which is the
 * surface in dark and white in light.
 *
 * scripts/gen-foundations.ts turns this into materials.css. */

export type Material = { cls: string; name: string; radius: number; fill: string; stroke: string; shadow: string; use: string };

const line = `0 0 0 1px var(--ova-divider)`;
const edge = `0 0 0 1px var(--ova-divider-strong)`;
const cut = `8px 8px 0 var(--ova-cut)`;

export const SURFACE: Material[] = [
  { cls: "material-base", name: "Base", radius: 0, fill: "var(--ova-surface-primary)", stroke: line, shadow: "none", use: "Everything at rest: cards, list containers, tables. One hairline on paper." },
  { cls: "material-small", name: "Small", radius: 0, fill: "var(--ova-surface-primary)", stroke: edge, shadow: "none", use: "Inputs, selects, resting outline buttons: the strong hairline, so a control reads as a control." },
  { cls: "material-medium", name: "Medium", radius: 0, fill: "var(--ova-surface-raised)", stroke: line, shadow: "none", use: "A cell lifted off the page: a band, a plate, a card that invites a click." },
  { cls: "material-large", name: "Large", radius: 0, fill: "var(--ova-surface-raised)", stroke: line, shadow: cut, use: "The one thing on the page that must be found first: lifted, and cut." },
];

export const FLOATING: Material[] = [
  { cls: "material-tooltip", name: "Tooltip", radius: 0, fill: "var(--ova-gray-1000)", stroke: "none", shadow: "none", use: "Ink, paper text, no stem." },
  { cls: "material-menu", name: "Menu", radius: 0, fill: "var(--ova-surface-raised)", stroke: edge, shadow: cut, use: "Menus, popovers, comboboxes: a lifted surface, the strong hairline, the cut." },
  { cls: "material-modal", name: "Modal", radius: 0, fill: "var(--ova-surface-raised)", stroke: edge, shadow: cut, use: "Dialogs and sheets." },
  { cls: "material-fullscreen", name: "Fullscreen", radius: 0, fill: "var(--ova-surface-primary)", stroke: "none", shadow: "none", use: "Takeovers: paper, edge to edge." },
];

export const TINTS: Material[] = [
  { cls: "material-accent", name: "Accent", radius: 0, fill: "var(--ova-surface-primary)", stroke: "0 0 0 1px var(--ova-gray-1000)", shadow: "none", use: "A card in focus, the recommended row: the ink hairline." },
  { cls: "material-active", name: "Active", radius: 0, fill: "var(--ova-surface-active)", stroke: "0 0 0 1px var(--ova-gray-1000)", shadow: "none", use: "A selected card, a focused control." },
  { cls: "material-danger", name: "Danger", radius: 0, fill: "var(--ova-surface-primary)", stroke: "0 0 0 1px var(--ova-status-danger)", shadow: "none", use: "A card in error." },
];

export const PRACTICES = [
  { name: "When to use", items: ["Use a material instead of hand-rolling radius, fill, stroke and shadow; the name encodes the elevation.", "Base for almost everything; small for controls; medium for a band or plate. Large only for the one object on a page that must be found first.", "Never stack two materials on one element; never add a border to one; never round a corner."] },
  { name: "Behaviour", items: ["The hairline is the edge. Corners are hard.", "Only what floats is cut, and the cut is always the same: 8px, 8px, no blur.", "No glow, no gradient, no inner shadow, no bevel."] },
  { name: "Accessibility", items: ["A material is chrome; semantics live on the wrapper.", "Selection is a fill and a word, never the ring alone."] },
];
