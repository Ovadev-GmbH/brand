/* Januna's materials.
 *
 * A material is what a surface is made of: its radius, fill, stroke and
 * shadow, chosen together for where it sits. Surface materials rest on the
 * page; floating materials sit above it. One class each — material-base,
 * material-menu — so an app never hand-rolls a shadow.
 *
 * The shadows are the ink at low opacity, so they sit correctly on either
 * background. scripts/gen-foundations.ts turns this into materials.css. */

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
const ring = (alpha: number) => `0 0 0 1px ${ink(alpha)}`;

export const SURFACE: Material[] = [
  { cls: "material-base", name: "Base", radius: 8, fill: "var(--jan-background-100)", stroke: ring(16), shadow: "none", use: "Everyday use: cards at rest, list containers." },
  { cls: "material-small", name: "Small", radius: 8, fill: "var(--jan-background-100)", stroke: ring(12), shadow: `0 1px 2px ${ink(6)}`, use: "Slightly raised: an input, a resting button." },
  { cls: "material-medium", name: "Medium", radius: 12, fill: "var(--jan-background-100)", stroke: ring(10), shadow: `0 2px 8px ${ink(8)}`, use: "Further raised: a card that invites a click." },
  { cls: "material-large", name: "Large", radius: 12, fill: "var(--jan-background-100)", stroke: ring(8), shadow: `0 4px 16px ${ink(10)}`, use: "The most raised thing on the page." },
];

export const FLOATING: Material[] = [
  { cls: "material-tooltip", name: "Tooltip", radius: 8, fill: "var(--jan-background-100)", stroke: ring(12), shadow: `0 2px 8px ${ink(10)}`, use: "The lightest lift. Tooltips are the only floating element with a stem." },
  { cls: "material-menu", name: "Menu", radius: 12, fill: "var(--jan-background-100)", stroke: ring(10), shadow: `0 8px 24px ${ink(12)}`, use: "Menus, popovers, comboboxes: lifted from the page." },
  { cls: "material-modal", name: "Modal", radius: 12, fill: "var(--jan-background-100)", stroke: ring(8), shadow: `0 16px 48px ${ink(16)}`, use: "Dialogs and sheets: further lift." },
  { cls: "material-fullscreen", name: "Fullscreen", radius: 16, fill: "var(--jan-background-100)", stroke: ring(6), shadow: `0 24px 80px ${ink(24)}`, use: "Takeovers: the biggest lift." },
];

export const PRACTICES = [
  {
    name: "When to use",
    items: [
      "Use a material instead of hand-rolling radius, fill, stroke and shadow; the name encodes the elevation.",
      "Pick by where the element sits: base for resting cards, small to large for raised content, tooltip and menu for popovers, modal for dialogs, fullscreen for takeovers.",
      "Never stack two materials on one element. A child that needs more lift gets its own, one step higher.",
    ],
  },
  {
    name: "Behaviour",
    items: [
      "Keep the material and the z-index band in step, so a tooltip never sits visually below a card.",
      "Prefer the lowest lift that still reads as lifted. Over-elevating is the usual source of noise.",
      "Let the material carry the chrome and layout carry the spacing; do not override a shadow on the same element.",
    ],
  },
  {
    name: "Accessibility",
    items: [
      "A material is chrome. The semantics live on the wrapper: role=\"dialog\" on a modal, role=\"tooltip\" on a tooltip.",
      "Never let the shadow alone say something is raised; pair it with the focus ring on the focusable children.",
    ],
  },
];
