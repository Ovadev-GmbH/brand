/* Januna's measure and motion: the spacing set, the corners, and how things
 * move. Taken from the marketing site: big soft corners, one easing, nothing
 * abrupt.
 *
 * scripts/gen-foundations.ts turns this into layout.css. */

export type Token = { token: string; value: string; use: string };

/** The spacing set. Tailwind's 4px grid stays available; these are the
 *  steps a layout should be made of. */
export const SPACING: Token[] = [
  { token: "space-1", value: "4px", use: "Inside a control: icon to label." },
  { token: "space-2", value: "8px", use: "Between controls in a row." },
  { token: "space-3", value: "12px", use: "A control's padding." },
  { token: "space-4", value: "16px", use: "Inside a card." },
  { token: "space-6", value: "24px", use: "Between cards; a dialog's padding." },
  { token: "space-8", value: "32px", use: "Between sections of a page." },
  { token: "space-12", value: "48px", use: "Between chapters of a page." },
  { token: "space-section", value: "8rem", use: "Above a marketing section." },
  { token: "space-section-end", value: "10.25rem", use: "Below a marketing section." },
];

export const RADIUS: Token[] = [
  { token: "radius-small", value: "8px", use: "Badges, kbd, small chips." },
  { token: "radius-regular", value: "12px", use: "Controls, cards, inputs. The default." },
  { token: "radius-large", value: "16px", use: "Menus, larger cards." },
  { token: "radius-modal", value: "24px", use: "Dialogs and sheets." },
  { token: "radius-section", value: "4rem", use: "A marketing section's corner." },
  { token: "radius-pill", value: "9999px", use: "Buttons and toggles: fully round ends." },
];

export const MOTION: Token[] = [
  { token: "ease-out", value: "cubic-bezier(0.215, 0.61, 0.355, 1)", use: "Everything that moves: an ease-out cubic, quick to start and soft to settle." },
  { token: "duration-fast", value: "150ms", use: "Hover, press, a colour change." },
  { token: "duration-base", value: "300ms", use: "A popover, a toggle, a row appearing." },
  { token: "duration-slow", value: "450ms", use: "A page section, a dialog, a marketing reveal." },
];

export const PRACTICES = [
  "Default to stillness. Add motion only when it explains a state change, keeps continuity, or confirms an action.",
  "One easing for everything. Different curves in one screen read as different products.",
  "Respect prefers-reduced-motion: durations drop to zero, the state change stays.",
];
