import type { Doc } from "../../types";

export default {
  description:
    "A key or a shortcut as it is pressed, for the keyboard paths through the lectern and the manager's laptop. In a menu row, put the shortcut in `DropdownMenuShortcut` instead.",
  usage: `<KbdGroup>
  <Kbd>⌘</Kbd>
  <Kbd>K</Kbd>
</KbdGroup>`,
  sections: [
    { title: "Group", text: "`KbdGroup` holds the keys of one shortcut, each in its own `Kbd`, 4px apart.", example: "group" },
    {
      title: "Icon",
      text: "An icon inside `Kbd` is drawn at 12px, for keys that have a symbol rather than a name. Add the key's name for screen readers.",
      example: "icon",
    },
    {
      title: "Button",
      text: "The shortcut after the label in an outline or ghost `Button`, so the action and its key are learned together.",
      example: "button",
    },
    {
      title: "Tooltip",
      text: "The tooltip is a light material, so a `Kbd` inside it keeps its own fill, and the tooltip tightens its end padding around the key. See [Tooltip](/januna/tooltip).",
      example: "tooltip",
    },
    {
      title: "Input Group",
      text: "A `Kbd` in an `InputGroupAddon` names the key that focuses the field; the addon gives it a little more room. See [Input Group](/januna/input-group).",
      example: "input-group",
    },
  ],
  api: [
    {
      name: "Kbd",
      text: "A `<kbd>` 20px tall, the ink at 8% behind `text-label-12` with `rounded-small` corners. It takes that element's props.",
    },
    { name: "KbdGroup", text: "A `<kbd>` around the keys of one shortcut, 4px apart." },
  ],
} satisfies Doc;
