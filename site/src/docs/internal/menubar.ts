import type { Doc } from "../../types";

export default {
  description:
    "A row of menus for a workspace with many commands, the way a desktop application has one: an editor, a console, a log viewer. A page with a handful of actions needs a [Dropdown Menu](/internal/dropdown-menu) instead.",
  usage: `<Menubar>
  <MenubarMenu>
    <MenubarTrigger>Invoice</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>New invoice</MenubarItem>
      <MenubarItem>Duplicate</MenubarItem>
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
    { title: "Icons", text: "An icon before the label is sized to 16px and takes the item's colour.", example: "icons" },
    {
      title: "Groups",
      text: "`MenubarGroup` with a `MenubarLabel` names a set of items, and `MenubarSeparator` rules it off from the next.",
      example: "groups",
    },
    {
      title: "Submenu",
      text: "`MenubarSub` pairs a `MenubarSubTrigger`, which draws the chevron, with a `MenubarSubContent` that opens to its right.",
      example: "submenu",
    },
    {
      title: "Checkbox Items",
      text: "`MenubarCheckboxItem` with `checked` and `onCheckedChange`. In a menubar the check sits at the start of the row, where a desktop menu puts it.",
      example: "checkbox",
    },
    {
      title: "Radio Items",
      text: "`MenubarRadioGroup` holds the `value`, and each `MenubarRadioItem` is one choice. Two groups, each with a label, set a sort and its direction.",
      example: "radio",
    },
    {
      title: "Inset",
      text: "`inset` on a `MenubarItem` or `MenubarLabel` indents it to the text of the checkbox and radio items beside it.",
      example: "inset",
    },
    {
      title: "Destructive",
      text: '`variant="destructive"` on `MenubarItem` turns it red. Put it last in its menu, after a separator.',
      example: "destructive",
    },
  ],
  api: [
    {
      name: "Menubar",
      text: "The row, 32px tall on the base material. Takes Base UI's Menubar props.",
    },
    {
      name: "MenubarContent",
      text: "One menu, with its portal and positioner. Takes Base UI's Popup props.",
      props: [
        ["side", `"top" | "bottom" | "left" | "right" | "inline-start" | "inline-end"`, `"bottom"`],
        ["sideOffset", "number", "8"],
        ["align", `"start" | "center" | "end"`, `"start"`],
        ["alignOffset", "number", "-4"],
      ],
    },
    {
      name: "MenubarItem",
      text: "One action. `inset` works the same on `MenubarLabel`, `MenubarSubTrigger`, `MenubarCheckboxItem` and `MenubarRadioItem`.",
      props: [
        ["variant", `"default" | "destructive"`, `"default"`],
        ["inset", "boolean", "false"],
      ],
    },
    {
      name: "MenubarSubContent",
      text: "The submenu. Takes the same props as `MenubarContent`, with its own defaults.",
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
