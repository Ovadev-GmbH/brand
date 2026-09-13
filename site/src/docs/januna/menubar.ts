import type { Doc } from "../../types";

export default {
  description:
    "A row of menus for a workspace with many commands, the way a desktop application has one: the manager's floor plan editor, the week's shift schedule. A screen with a handful of actions needs a [Dropdown Menu](/januna/dropdown-menu) instead.",
  usage: `<Menubar>
  <MenubarMenu>
    <MenubarTrigger>Bookings</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>New booking</MenubarItem>
      <MenubarItem>Walk-in</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>`,
  composition: `Menubar
└── MenubarMenu
    ├── MenubarTrigger
    └── MenubarContent
        ├── MenubarGroup
        │   ├── MenubarLabel
        │   └── MenubarItem
        │       └── MenubarShortcut
        ├── MenubarSeparator
        ├── MenubarCheckboxItem
        ├── MenubarRadioGroup
        │   └── MenubarRadioItem
        └── MenubarSub
            ├── MenubarSubTrigger
            └── MenubarSubContent`,
  sections: [
    {
      title: "Shortcuts",
      text: "`MenubarShortcut` shows a key at the end of an item, in mono. It only shows the key; bind it yourself.",
      example: "shortcuts",
    },
    {
      title: "Icons",
      text: "A Hugeicons icon before the label is sized to 16px and takes the item's colour.",
      example: "icons",
    },
    {
      title: "Groups",
      text: "`MenubarGroup` with a `MenubarLabel` names a set of items in Label 12, and `MenubarSeparator` rules it off from the next.",
      example: "groups",
    },
    {
      title: "Submenu",
      text: "`MenubarSub` pairs a `MenubarSubTrigger`, which draws the arrow, with a `MenubarSubContent` that opens to its right.",
      example: "submenu",
    },
    {
      title: "Checkbox Items",
      text: "`MenubarCheckboxItem` with `checked` and `onCheckedChange`. In a menubar the tick sits at the start of the row, where a desktop menu puts it.",
      example: "checkbox",
    },
    {
      title: "Radio Items",
      text: "`MenubarRadioGroup` holds the `value`, and each `MenubarRadioItem` is one choice, ticked at the start. Two groups, each with a label, set a sort and its direction.",
      example: "radio",
    },
    {
      title: "Inset",
      text: "`inset` on a `MenubarItem` or `MenubarLabel` indents it to the text of the checkbox and radio items beside it.",
      example: "inset",
    },
    {
      title: "Destructive",
      text: '`variant="destructive"` on `MenubarItem` turns it red, with a red tint under the pointer. Put it last in its menu, after a separator.',
      example: "destructive",
    },
  ],
  api: [
    {
      name: "Menubar",
      text: "The row, 40px tall, on the sheet with the base shadow and 12px corners. Takes Base UI's Menubar props.",
    },
    {
      name: "MenubarContent",
      text: "One menu on the menu material, at least 144px wide, with its portal and positioner. Takes Base UI's Popup props.",
      props: [
        ["side", `"top" | "bottom" | "left" | "right" | "inline-start" | "inline-end"`, `"bottom"`],
        ["sideOffset", "number", "8"],
        ["align", `"start" | "center" | "end"`, `"start"`],
        ["alignOffset", "number", "-4"],
      ],
    },
    {
      name: "MenubarItem",
      text: "One action, in Label 14. `inset` works the same on `MenubarLabel`, `MenubarSubTrigger`, `MenubarCheckboxItem` and `MenubarRadioItem`.",
      props: [
        ["variant", `"default" | "destructive"`, `"default"`],
        ["inset", "boolean", "false"],
      ],
    },
    {
      name: "MenubarSubContent",
      text: "The submenu, at least 128px wide. Takes the same props as `MenubarContent`, with its own defaults.",
      props: [
        ["side", `"top" | "bottom" | "left" | "right" | "inline-start" | "inline-end"`, `"right"`],
        ["sideOffset", "number", "0"],
        ["align", `"start" | "center" | "end"`, `"start"`],
        ["alignOffset", "number", "-3"],
      ],
    },
  ],
  links: { doc: "https://base-ui.com/react/components/menubar", api: "https://base-ui.com/react/components/menubar#api-reference" },
} satisfies Doc;
