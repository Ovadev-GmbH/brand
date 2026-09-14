import type { Doc } from "../../types";

export default {
  description:
    "A list of actions or options behind a button: a row's actions, a table's columns, the account. To choose one value in a form use [Select](/ovadev/select); for actions on right-click, [Context Menu](/ovadev/context-menu).",
  usage: `<DropdownMenu>
  <DropdownMenuTrigger render={<Button variant="outline" />}>Post actions</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Edit</DropdownMenuItem>
    <DropdownMenuItem>Duplicate</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`,
  composition: `DropdownMenu
├── DropdownMenuTrigger
└── DropdownMenuContent
    ├── DropdownMenuGroup
    │   ├── DropdownMenuLabel
    │   └── DropdownMenuItem
    │       └── DropdownMenuShortcut
    ├── DropdownMenuSeparator
    ├── DropdownMenuCheckboxItem
    ├── DropdownMenuRadioGroup
    │   └── DropdownMenuRadioItem
    └── DropdownMenuSub
        ├── DropdownMenuSubTrigger
        └── DropdownMenuSubContent
            └── DropdownMenuItem`,
  sections: [
    {
      title: "Align",
      text: "`align` on `DropdownMenuContent` lines the menu up with the trigger's `start` edge; use `end` for a trigger at the end of a row. The menu is as wide as its trigger and at least 128px, unless `className` gives it a width.",
      example: "align",
    },
    {
      title: "Groups",
      text: "`DropdownMenuGroup` with a `DropdownMenuLabel` names a set of items, and `DropdownMenuSeparator` rules it off from the next.",
      example: "groups",
    },
    { title: "Icons", text: "An icon before the label is sized to 16px and takes the item's colour.", example: "icons" },
    {
      title: "Shortcuts",
      text: "`DropdownMenuShortcut` shows a key at the end of the item, in mono. It only shows the key; bind it yourself.",
      example: "shortcuts",
    },
    {
      title: "Submenu",
      text: "`DropdownMenuSub` pairs a `DropdownMenuSubTrigger`, which draws the chevron, with a `DropdownMenuSubContent` that opens to its right.",
      example: "submenu",
    },
    {
      title: "Checkboxes",
      text: "`DropdownMenuCheckboxItem` with `checked` and `onCheckedChange` turns one option on or off, with the check at the end of the row. The menu stays open while you change several.",
      example: "checkboxes",
    },
    {
      title: "Radio Group",
      text: "`DropdownMenuRadioGroup` holds the `value`, and each `DropdownMenuRadioItem` is one choice.",
      example: "radio-group",
    },
    {
      title: "Inset",
      text: "`inset` indents an item or a label by an icon's width, so rows without an icon line up with the rows that have one.",
      example: "inset",
    },
    {
      title: "Disabled",
      text: "`disabled` on an item dims it and keeps it from being chosen. When the reason is not obvious, say it in the row.",
      example: "disabled",
    },
    {
      title: "Destructive",
      text: '`variant="destructive"` turns the item red. Put it last, after a separator, and confirm it in an [Alert Dialog](/ovadev/alert-dialog).',
      example: "destructive",
    },
  ],
  api: [
    {
      name: "DropdownMenuContent",
      text: "The menu, with its portal and positioner. Takes Base UI's Popup props.",
      props: [
        ["side", `"top" | "bottom" | "left" | "right" | "inline-start" | "inline-end"`, `"bottom"`],
        ["sideOffset", "number", "4"],
        ["align", `"start" | "center" | "end"`, `"start"`],
        ["alignOffset", "number", "0"],
      ],
    },
    {
      name: "DropdownMenuItem",
      text: "One action. `inset` works the same on `DropdownMenuLabel`, `DropdownMenuSubTrigger`, `DropdownMenuCheckboxItem` and `DropdownMenuRadioItem`.",
      props: [
        ["variant", `"default" | "destructive"`, `"default"`],
        ["inset", "boolean", "false"],
      ],
    },
    {
      name: "DropdownMenuSubContent",
      text: "The submenu. Takes the same props as `DropdownMenuContent`, with its own defaults.",
      props: [
        ["side", `"top" | "bottom" | "left" | "right" | "inline-start" | "inline-end"`, `"right"`],
        ["sideOffset", "number", "0"],
        ["align", `"start" | "center" | "end"`, `"start"`],
        ["alignOffset", "number", "-3"],
      ],
    },
    {
      name: "DropdownMenuShortcut",
      text: "A `<span>` pushed to the end of the item, in Label 12 Mono.",
    },
  ],
  links: { doc: "https://base-ui.com/react/components/menu", api: "https://base-ui.com/react/components/menu#api-reference" },
} satisfies Doc;
