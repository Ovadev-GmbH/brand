/* Ovadev's measure and motion: the one ladder, corners that are not there,
 * and motion on one axis that is over in a quarter second. */

export type Token = { token: string; value: string; use: string };

/** The one ladder. A 4px grid to 16, then doubling, so two neighbouring
 *  steps are always visibly different. No value off this ladder. */
export const SPACING: Token[] = [
  { token: "space-1", value: "4px", use: "Inside a control: icon to label." },
  { token: "space-2", value: "8px", use: "Between controls in a row." },
  { token: "space-3", value: "12px", use: "A control's padding." },
  { token: "space-4", value: "16px", use: "Inside a card." },
  { token: "space-6", value: "24px", use: "Between cards; a dialog's padding." },
  { token: "space-8", value: "32px", use: "Between sections of a page." },
  { token: "space-12", value: "48px", use: "Between chapters of a page." },
  { token: "space-16", value: "64px", use: "Between bands on the site." },
  { token: "space-24", value: "96px", use: "The site's section rhythm at its widest." },
];

export const RADIUS: Token[] = [
  { token: "radius-small", value: "0px", use: "Menu items, cells, chips: hard." },
  { token: "radius-regular", value: "0px", use: "Controls, cards, inputs: hard." },
  { token: "radius-large", value: "0px", use: "Menus, larger cards: hard." },
  { token: "radius-modal", value: "0px", use: "Dialogs and sheets: hard." },
  { token: "radius-section", value: "0px", use: "Sections and panels: hard." },
  { token: "radius-pill", value: "9999px", use: "Switches only. Not avatars, not chips, not the mark." },
];

export const MOTION: Token[] = [
  { token: "ease-out", value: "cubic-bezier(0.22, 1, 0.36, 1)", use: "Everything that moves: the site's push, fast to start, settling." },
  { token: "duration-fast", value: "120ms", use: "Hover, press, a colour change." },
  { token: "duration-base", value: "260ms", use: "The push: a panel, a popover, a page. One axis." },
  { token: "duration-slow", value: "320ms", use: "A block seating: a dialog, a sheet." },
];

export const PRACTICES = [
  "Move on one axis, as a translate. Nothing fades, blurs, scales, bounces, rotates or dissolves.",
  "One easing, three durations, none longer than a third of a second.",
  "Respect prefers-reduced-motion: durations drop to zero, the state change stays.",
];
