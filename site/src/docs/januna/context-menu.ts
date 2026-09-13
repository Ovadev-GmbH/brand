import type { Doc } from "../../types";

export default {
  description:
    "Actions on the thing under the pointer, opened with a right-click or a long press: a table on the floor plan, a row of tonight's bookings. Nobody sees the menu before it opens, so offer the same actions somewhere visible too, such as a [Dropdown Menu](/januna/dropdown-menu) in the row.",
  usage: `<ContextMenu>
  <ContextMenuTrigger>Table 12</ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>New booking here</ContextMenuItem>
    <ContextMenuItem>Edit table</ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuItem variant="destructive">Remove table</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`,
  composition: `ContextMenu
├── ContextMenuTrigger
└── ContextMenuContent
    ├── ContextMenuGroup
    │   ├── ContextMenuLabel
    │   └── ContextMenuItem
    │       └── ContextMenuShortcut
    ├── ContextMenuSeparator
    ├── ContextMenuCheckboxItem
    ├── ContextMenuRadioGroup
    │   └── ContextMenuRadioItem
    └── ContextMenuSub
        ├── ContextMenuSubTrigger
        └── ContextMenuSubContent`,
  sections: [
    {
      title: "Table Row",
      text: "`render={<TableRow />}` on `ContextMenuTrigger` makes the row itself the trigger, with one `ContextMenu` per booking.",
      example: "table-row",
    },
    {
      title: "Groups",
      text: "`ContextMenuGroup` with a `ContextMenuLabel` names a set of items in Label 12, and `ContextMenuSeparator` rules it off from the next.",
      example: "groups",
    },
    {
      title: "Icons",
      text: "A Hugeicons icon before the label is sized to 16px and takes the item's colour.",
      example: "icons",
    },
    {
      title: "Shortcuts",
      text: "`ContextMenuShortcut` shows a key at the end of the item, in mono. It only shows the key; bind it yourself.",
      example: "shortcuts",
    },
    {
      title: "Submenu",
      text: "`ContextMenuSub` pairs a `ContextMenuSubTrigger`, which draws the arrow, with a `ContextMenuSubContent` that opens to its right.",
      example: "submenu",
    },
    {
      title: "Checkboxes",
      text: "`ContextMenuCheckboxItem` with `checked` and `onCheckedChange` turns one option on or off, with the tick at the end of the row. The menu stays open while you change it.",
      example: "checkboxes",
    },
    {
      title: "Radio Group",
      text: "`ContextMenuRadioGroup` holds the `value`, and each `ContextMenuRadioItem` is one choice.",
      example: "radio-group",
    },
    {
      title: "Destructive",
      text: '`variant="destructive"` on `ContextMenuItem` turns it red, with a red tint under the pointer. Put it last, after a separator.',
      example: "destructive",
    },
  ],
  api: [
    {
      name: "ContextMenuTrigger",
      text: "The area that listens for the right-click and the long press. Renders a `<div>` whose text cannot be selected.",
    },
    {
      name: "ContextMenuContent",
      text: "The menu on the menu material, at least 144px wide, placed at the pointer, with its portal and positioner. Takes Base UI's Popup props.",
      props: [
        ["side", `"top" | "bottom" | "left" | "right" | "inline-start" | "inline-end"`, `"right"`],
        ["sideOffset", "number", "0"],
        ["align", `"start" | "center" | "end"`, `"start"`],
        ["alignOffset", "number", "4"],
      ],
    },
    {
      name: "ContextMenuItem",
      text: "One action, in Label 14. `inset` works the same on `ContextMenuLabel`, `ContextMenuSubTrigger`, `ContextMenuCheckboxItem` and `ContextMenuRadioItem`.",
      props: [
        ["variant", `"default" | "destructive"`, `"default"`],
        ["inset", "boolean", "false"],
      ],
    },
    {
      name: "ContextMenuSubContent",
      text: "The submenu, opening to the right of its trigger. Takes the same props and defaults as `ContextMenuContent`.",
    },
  ],
  links: {
    doc: "https://base-ui.com/react/components/context-menu",
    api: "https://base-ui.com/react/components/context-menu#api-reference",
  },
} satisfies Doc;
