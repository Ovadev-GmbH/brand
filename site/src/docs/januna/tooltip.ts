import type { Doc } from "../../types";

export default {
  description:
    "A short label for a control that has none of its own, or the exact value behind a shortened one: an icon button's name, the time behind \"4 min ago\". For anything longer, or anything to click, use [Popover](/januna/popover).",
  usage: `<Tooltip>
  <TooltipTrigger render={<Button variant="outline" size="icon" aria-label="Print run sheet" />}>
    <HugeiconsIcon icon={PrinterIcon} strokeWidth={2} />
  </TooltipTrigger>
  <TooltipContent>Print run sheet</TooltipContent>
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
      text: "`side` on `TooltipContent` puts the tooltip above the trigger by default, or `right`, `bottom` or `left` of it, with its stem pointing back. Where there is no room, it flips.",
      example: "side",
    },
    {
      title: "Keyboard Shortcut",
      text: "A `Kbd` after the label names the key that does the same thing. The tooltip tightens its end padding around it.",
      example: "keyboard-shortcut",
    },
    {
      title: "Exact Time",
      text: "A relative time carries the exact one in a tooltip. Render the trigger as a focusable `<time>` so the keyboard reaches it too.",
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
      text: "The tooltip on the tooltip material: the sheet with a hairline, ink text in Label 12, 320px at most, and a stem toward the trigger. Takes Base UI's Popup props.",
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
