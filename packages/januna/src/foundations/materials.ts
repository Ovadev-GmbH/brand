/* Januna's materials.
 *
 * A material is what a surface is made of: its radius, fill, stroke and
 * shadow, chosen together for where it sits. Surface materials rest on the
 * page; floating materials sit above it. One class each — material-base,
 * material-menu — so an app never hand-rolls a shadow.
 *
 * The shadows are built the way Stripe and Owner build theirs: a 1px ring
 * for the edge, a contact shadow right under it, and a soft blur for the
 * lift — all the ink at low opacity, so they sit correctly on sheet and
 * island alike, and no material draws a border. The tints put a colour in
 * the ring for a card that is selected, in focus or in error.
 *
 * scripts/gen-foundations.ts turns this into materials.css. */

export type Material = {
  /** The class: material-menu. */
  cls: string;
  name: string;
  /** Corner radius in px. */
  radius: number;
  /** The fill, as a token reference. */
  fill: string;
  /** The stroke, as a box-shadow ring. */
  stroke: string;
  shadow: string;
  use: string;
};

const ink = (alpha: number) => `oklch(0.29 0 0 / ${alpha}%)`;
/** ring, contact, lift */
const stripe = (ring: number, contact: number, blur: string, lift: number) =>
  ({ stroke: `0 0 0 1px ${ink(ring)}`, shadow: `0 1px 1px ${ink(contact)}, ${blur} ${ink(lift)}` });

export const SURFACE: Material[] = [
  { cls: "material-base", name: "Base", radius: 12, fill: "var(--jan-surface-primary)", stroke: `0 0 0 1px ${ink(12)}`, shadow: "none", use: "Everyday use: cards at rest, list containers." },
  { cls: "material-small", name: "Small", radius: 12, fill: "var(--jan-surface-primary)", stroke: `0 0 0 1px ${ink(12)}`, shadow: `0 1px 2px ${ink(6)}`, use: "Slightly raised: an input, a resting button, a card in a list. One hairline and a whisper under it." },
  { cls: "material-medium", name: "Medium", radius: 16, fill: "var(--jan-surface-primary)", ...stripe(12, 10, "0 4px 12px", 10), use: "Further raised: a card that invites a click." },
  { cls: "material-large", name: "Large", radius: 16, fill: "var(--jan-surface-primary)", ...stripe(10, 8, "0 8px 24px", 12), use: "The most raised thing on the page." },
];

export const FLOATING: Material[] = [
  { cls: "material-tooltip", name: "Tooltip", radius: 8, fill: "var(--jan-surface-primary)", ...stripe(12, 10, "0 2px 8px", 10), use: "The lightest lift. Tooltips are the only floating element with a stem." },
  { cls: "material-menu", name: "Menu", radius: 12, fill: "var(--jan-surface-primary)", ...stripe(10, 8, "0 8px 24px", 12), use: "Menus, popovers, comboboxes: lifted from the page." },
  { cls: "material-modal", name: "Modal", radius: 24, fill: "var(--jan-surface-primary)", ...stripe(8, 8, "0 16px 48px", 16), use: "Dialogs and sheets: further lift." },
  { cls: "material-fullscreen", name: "Fullscreen", radius: 24, fill: "var(--jan-surface-primary)", ...stripe(6, 6, "0 24px 80px", 24), use: "Takeovers: the biggest lift." },
];

/** The small material with a colour in its ring. */
export const TINTS: Material[] = [
  { cls: "material-accent", name: "Accent", radius: 12, fill: "var(--jan-surface-primary)", stroke: "0 0 0 1px var(--jan-green-700)", shadow: `0 1px 1px ${ink(12)}, 0 2px 5px oklch(0.548 0.171 145 / 18%)`, use: "A card in the brand: the recommended plan, the current step." },
  { cls: "material-active", name: "Active", radius: 12, fill: "var(--jan-surface-primary)", stroke: "0 0 0 1px var(--jan-green-600)", shadow: `0 1px 1px oklch(0.548 0.171 145 / 40%), 0 2px 5px oklch(0.548 0.171 145 / 28%)`, use: "A selected card, a focused control." },
  { cls: "material-danger", name: "Danger", radius: 12, fill: "var(--jan-surface-primary)", stroke: "0 0 0 1px var(--jan-red-600)", shadow: `0 1px 1px oklch(0.581 0.201 33 / 20%), 0 2px 5px oklch(0.581 0.201 33 / 20%)`, use: "A card in error, a destructive confirmation." },
];

export const PRACTICES = [
  {
    name: "When to use",
    items: [
      "Use a material instead of hand-rolling radius, fill, stroke and shadow; the name encodes the elevation.",
      "Pick by where the element sits: base for resting cards, small to large for raised content, tooltip and menu for popovers, modal for dialogs, fullscreen for takeovers.",
      "Never stack two materials on one element. A child that needs more lift gets its own, one step higher.",
      "A material draws no border. The ring in the shadow is the edge; add a border and the edge doubles.",
    ],
  },
  {
    name: "Behaviour",
    items: [
      "Keep the material and the z-index band in step, so a tooltip never sits visually below a card.",
      "Prefer the lowest lift that still reads as lifted. Over-elevating is the usual source of noise.",
      "A tint replaces the small material's ring, it does not add to it: one card is accent or active or danger, never two.",
    ],
  },
  {
    name: "Accessibility",
    items: [
      "A material is chrome. The semantics live on the wrapper: role=\"dialog\" on a modal, role=\"tooltip\" on a tooltip.",
      "Never let the shadow alone say something is raised or selected; pair it with the focus ring and a label.",
    ],
  },
];
