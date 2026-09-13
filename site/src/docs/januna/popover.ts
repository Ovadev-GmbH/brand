import type { Doc } from "../../types";

export default {
  description:
    "A small panel that opens from a button and holds a few details or controls for it: a table's seats, a covers limit, a note on a fee. For a preview on hover use [Hover Card](/januna/hover-card); for a task that needs the whole screen's attention, [Dialog](/januna/dialog).",
  usage: `<Popover>
  <PopoverTrigger render={<Button variant="outline" />}>Covers limit</PopoverTrigger>
  <PopoverContent>
    <PopoverHeader>
      <PopoverTitle>Covers for lunch</PopoverTitle>
      <PopoverDescription>Online booking closes once 40 covers are taken.</PopoverDescription>
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
      text: "`PopoverHeader` stacks a `PopoverTitle` in Heading 16 over a `PopoverDescription`. The title also names the popup for screen readers.",
      example: "header",
    },
    {
      title: "Form",
      text: "A few fields and the action that applies them. The panel is 288px wide with 16px between its parts; give it a width with `className` when the fields need more.",
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
      text: "The panel on the menu material, 288px wide, with its portal and positioner. Takes Base UI's Popup props.",
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
