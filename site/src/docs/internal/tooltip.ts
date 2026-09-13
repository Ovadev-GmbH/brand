import type { Doc } from "../../types";

export default {
  description:
    "A short label for a control that has none of its own, or the exact value behind a shortened one: an icon button's name, a relative time's timestamp. For anything longer, or anything to click, use [Popover](/internal/popover).",
  usage: `<Tooltip>
  <TooltipTrigger render={<Button variant="outline" size="icon" aria-label="Redeploy" />}>
    <RefreshCwIcon />
  </TooltipTrigger>
  <TooltipContent>Redeploy</TooltipContent>
</Tooltip>`,
  composition: `TooltipProvider
└── Tooltip
    ├── TooltipTrigger
    └── TooltipContent`,
  sections: [
    {
      title: "Provider",
      text: "Put one `TooltipProvider` around the app. Its tooltips open at once, and moving from one trigger to the next skips the wait; without it each trigger waits its own `delay` of 600ms.",
      code: `<TooltipProvider>
  <App />
</TooltipProvider>`,
    },
    {
      title: "Side",
      text: "`side` on `TooltipContent` puts the tooltip above the trigger by default, or `right`, `bottom` or `left` of it. Where there is no room, it flips.",
      example: "side",
    },
    {
      title: "Keyboard Shortcut",
      text: "A `Kbd` inside the content names the key that does the same thing, and turns light on the black.",
      example: "keyboard-shortcut",
    },
    {
      title: "Exact Time",
      text: "A relative time carries the exact one, with its zone, in a tooltip. Render the trigger as a focusable `<time>` so the keyboard reaches it too.",
      example: "exact-time",
    },
    {
      title: "Disabled Button",
      text: "A disabled `Button` takes no pointer events, so its own tooltip never opens. Put the trigger on a focusable `<span>` around it, and say why the action is unavailable.",
      example: "disabled-button",
    },
  ],
  api: [
    {
      name: "TooltipProvider",
      text: "Shares the timing between the tooltips inside it. Takes Base UI's Provider props.",
      props: [["delay", "number", "0"]],
    },
    {
      name: "TooltipContent",
      text: "The tooltip, black with white text and an arrow toward the trigger, with its portal and positioner. Takes Base UI's Popup props.",
      props: [
        ["side", `"top" | "bottom" | "left" | "right" | "inline-start" | "inline-end"`, `"top"`],
        ["sideOffset", "number", "4"],
        ["align", `"start" | "center" | "end"`, `"center"`],
        ["alignOffset", "number", "0"],
      ],
    },
  ],
  links: { doc: "https://base-ui.com/react/components/tooltip", api: "https://base-ui.com/react/components/tooltip#api-reference" },
} satisfies Doc;
