import type { Doc } from "../../types";

export default {
  description:
    "Buttons that act on the same thing, joined into one control: a split action, an input with its button, a set of row actions. For options that stay pressed, use [Toggle Group](/ovadev/toggle-group).",
  usage: `<ButtonGroup aria-label="Post: Season opening at Türlersee">
  <Button variant="outline">Edit</Button>
  <Button variant="outline">Preview</Button>
</ButtonGroup>`,
  composition: `ButtonGroup
├── ButtonGroupText
├── Button
├── ButtonGroupSeparator
└── ButtonGroup
    └── Button`,
  sections: [
    {
      title: "Orientation",
      text: '`orientation="vertical"` stacks the buttons, stretches them to the widest, and joins their top and bottom edges.',
      example: "orientation",
    },
    {
      title: "Size",
      text: "The group has no size of its own. Give every button in it the same `size`, and the icon buttons the matching `icon-` size.",
      example: "size",
    },
    {
      title: "Nested",
      text: "A `ButtonGroup` inside a `ButtonGroup` keeps its own joined edges, and the outer group puts an 8px gap between the inner ones.",
      example: "nested",
    },
    {
      title: "Separator",
      text: "`ButtonGroupSeparator` draws the line between buttons that have no border to share, such as `secondary` ones.",
      example: "separator",
    },
    {
      title: "Split",
      text: "The action, a separator and an icon button that opens a `DropdownMenu` with the other targets. After a filled button the separator inverts with it.",
      example: "split",
    },
    {
      title: "Text",
      text: "`ButtonGroupText` holds a fixed part of the control, such as a label or a unit. Pass `render` to make it a `Label` for the input beside it.",
      example: "text",
    },
    {
      title: "Input",
      text: "An `Input` in the group takes the free width; the buttons keep theirs. See [Input](/ovadev/input).",
      example: "input",
    },
    {
      title: "Select",
      text: "A `SelectTrigger` in the group is as wide as its value unless it is given a width. See [Select](/ovadev/select).",
      example: "select",
    },
  ],
  api: [
    {
      name: "ButtonGroup",
      text: 'A `<div role="group">` that joins the edges of its children. Name it with `aria-label` when the buttons alone do not say what they act on.',
      props: [["orientation", `"horizontal" | "vertical"`, `"horizontal"`]],
    },
    {
      name: "ButtonGroupSeparator",
      text: "A `Separator` between two buttons, as tall as the group.",
      props: [["orientation", `"horizontal" | "vertical"`, `"vertical"`]],
    },
    {
      name: "ButtonGroupText",
      text: "A bordered cell for text or an icon. `render` swaps its `<div>` for another element.",
    },
    {
      name: "buttonGroupVariants",
      text: "The group's classes as a function of `{ orientation }`, for an element that is not a `ButtonGroup`.",
    },
  ],
} satisfies Doc;
