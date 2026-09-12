/* Internal's measure and motion: the same spacing set as Januna, corners that
 * are not there, and motion that is quick and over. */

export type Token = { token: string; value: string; use: string };

export const SPACING: Token[] = [
  { token: "space-1", value: "4px", use: "Inside a control: icon to label." },
  { token: "space-2", value: "8px", use: "Between controls in a row." },
  { token: "space-3", value: "12px", use: "A control's padding." },
  { token: "space-4", value: "16px", use: "Inside a card." },
  { token: "space-6", value: "24px", use: "Between cards; a dialog's padding." },
  { token: "space-8", value: "32px", use: "Between sections of a page." },
  { token: "space-12", value: "48px", use: "Between chapters of a page." },
];

export const RADIUS: Token[] = [
  { token: "radius-small", value: "0px", use: "Menu items, cells, chips: square." },
  { token: "radius-regular", value: "0px", use: "Controls, cards, inputs: square. The lyra shape." },
  { token: "radius-large", value: "0px", use: "Menus, larger cards: square." },
  { token: "radius-modal", value: "0px", use: "Dialogs and sheets: square." },
  { token: "radius-section", value: "0px", use: "Sections and panels: square." },
  { token: "radius-pill", value: "9999px", use: "Status dots, avatars, switches. Nothing else." },
];

export const MOTION: Token[] = [
  { token: "ease-out", value: "cubic-bezier(0.2, 0, 0, 1)", use: "Everything that moves: INTERN's ease, fast to start, done quickly." },
  { token: "duration-fast", value: "120ms", use: "Hover, press, a colour change." },
  { token: "duration-base", value: "160ms", use: "A popover, a toggle, a row appearing." },
  { token: "duration-slow", value: "240ms", use: "A dialog, a panel." },
];

export const PRACTICES = [
  "Default to stillness. A tool moves only to explain a state change.",
  "One easing, three durations, none longer than a quarter second.",
  "Respect prefers-reduced-motion: durations drop to zero, the state change stays.",
];
