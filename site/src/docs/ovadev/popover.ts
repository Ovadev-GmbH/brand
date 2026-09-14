import type { Doc } from "../../types";

export default {
  description:
    "A small panel that opens from a button and holds a few details or controls for it: a filter, a limit, a note on a term. For a preview on hover use [Hover Card](/internal/hover-card); for a task that needs full attention, [Dialog](/internal/dialog).",
  usage: `<Popover>
  <PopoverTrigger render={<Button variant="outline" />}>Seat limit</PopoverTrigger>
  <PopoverContent>
    <PopoverHeader>
      <PopoverTitle>Seat limit</PopoverTitle>
      <PopoverDescription>Overrides the plan's default for this tenant.</PopoverDescription>
    </PopoverHeader>
  </PopoverContent>
</Popover>`,
  composition: `Popover
├── PopoverTrigger
└── PopoverContent
    └── PopoverHeader
        ├── PopoverTitle
        └── PopoverDescription`,
  sections: [
    {
      title: "Side",
      text: "`side` on `PopoverContent` opens the panel below the trigger by default, or `top`, `left` or `right` of it. Where there is no room, it flips to the opposite side.",
      example: "side",
    },
    {
      title: "Align",
      text: "`align` lines the panel up with the trigger's `start`, `center` or `end` edge. Centred is the default.",
      example: "align",
    },
    {
      title: "Header",
      text: "`PopoverHeader` stacks a `PopoverTitle` over a `PopoverDescription`. The title also names the popup for screen readers.",
      example: "header",
    },
    {
      title: "Form",
      text: "A few fields and the action that applies them. The panel is 288px wide; give it a width with `className` when the fields need more.",
      example: "form",
    },
    {
      title: "Controlled",
      text: "`open` and `onOpenChange` on `Popover` let a save close the panel. The package exports no close part, so this is how an action inside it closes it.",
      example: "controlled",
    },
  ],
  api: [
    {
      name: "PopoverContent",
      text: "The panel, 288px wide, with its portal and positioner. Takes Base UI's Popup props.",
      props: [
        ["side", `"top" | "bottom" | "left" | "right" | "inline-start" | "inline-end"`, `"bottom"`],
        ["sideOffset", "number", "4"],
        ["align", `"start" | "center" | "end"`, `"center"`],
        ["alignOffset", "number", "0"],
      ],
    },
    {
      name: "PopoverHeader",
      text: "A `<div>` that spaces the title over the description.",
    },
  ],
  links: { doc: "https://base-ui.com/react/components/popover", api: "https://base-ui.com/react/components/popover#api-reference" },
} satisfies Doc;
