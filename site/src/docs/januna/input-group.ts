import type { Doc } from "../../types";

export default {
  description:
    "An input with something inside its edge: an icon, a currency, a button, a shortcut. For separate controls that only touch, use [Button Group](/januna/button-group).",
  usage: `<InputGroup>
  <InputGroupInput placeholder="Search guests" />
  <InputGroupAddon>
    <HugeiconsIcon icon={Search01Icon} strokeWidth={2} />
  </InputGroupAddon>
</InputGroup>`,
  composition: `InputGroup
├── InputGroupInput
└── InputGroupAddon
    ├── InputGroupText
    └── InputGroupButton`,
  sections: [
    {
      title: "Align",
      text: "`align` on `InputGroupAddon` places it: `inline-start` (the default) or `inline-end` beside the text, `block-start` or `block-end` above or below it. Write the addon after the control; `align` moves it, and the input stays first in the tab order.",
      example: "align",
    },
    {
      title: "Icon",
      text: "An icon in an addon is drawn at 16px in `text-content-secondary`. A click on the addon focuses the input.",
      example: "icon",
    },
    {
      title: "Text",
      text: "`InputGroupText` for a prefix or a unit in `text-label-14`: a currency, a number of minutes.",
      example: "text",
    },
    {
      title: "Button",
      text: '`InputGroupButton` is a ghost button sized to sit inside the edge: `xs` (28px) with a label, `icon-xs` for an icon alone, with an `aria-label`. It is `type="button"`, so it does not submit the form around it.',
      example: "button",
    },
    {
      title: "Kbd",
      text: "A `Kbd` in an addon names the shortcut that focuses the field; the addon gives it its fill and a little more room.",
      example: "kbd",
    },
    {
      title: "Dropdown",
      text: "An `InputGroupButton` as the `render` of a `DropdownMenuTrigger` switches what the input searches for.",
      example: "dropdown",
    },
    {
      title: "Spinner",
      text: "A `Spinner` and a word in the addon while the value is being checked.",
      example: "spinner",
    },
    {
      title: "Textarea",
      text: "`InputGroupTextarea` in place of the input lets the group grow with the text; a `block-end` addon holds its count and its action.",
      example: "textarea",
    },
    {
      title: "Disabled",
      text: '`disabled` on the input dims only the input. Set `data-disabled="true"` on `InputGroup` as well, and its addons dim with it.',
      example: "disabled",
    },
    {
      title: "Invalid",
      text: "`aria-invalid` on the input draws the red edge around the group; `data-invalid` on the `Field` colours the label, and `FieldError` says what is wrong.",
      example: "invalid",
    },
  ],
  api: [
    {
      name: "InputGroup",
      text: 'The 40px row with the small material\'s hairline, a `<div role="group">`. It shows the focus ring and the red edge of the control inside it, and dims its addons under `data-disabled="true"`.',
    },
    {
      name: "InputGroupAddon",
      text: "What sits inside the edge. A click on it that does not land on a button focuses the input.",
      props: [["align", `"inline-start" | "inline-end" | "block-start" | "block-end"`, `"inline-start"`]],
    },
    {
      name: "InputGroupButton",
      text: "A `Button` with its own, smaller sizes: `xs` and `icon-xs` are 28px, `icon-sm` 32px. Every other prop is the Button's.",
      props: [
        ["size", `"xs" | "sm" | "icon-xs" | "icon-sm"`, `"xs"`],
        ["variant", `"default" | "outline" | "secondary" | "ghost" | "destructive" | "link"`, `"ghost"`],
        ["type", `"button" | "submit" | "reset"`, `"button"`],
      ],
    },
    { name: "InputGroupText", text: "A `<span>` in `text-label-14` and the secondary colour, for a prefix, a unit or a count." },
    { name: "InputGroupInput", text: "An `Input` without its own hairline and ring, marked as the group's control." },
    { name: "InputGroupTextarea", text: "A `Textarea` without its own hairline and ring, marked as the group's control." },
  ],
} satisfies Doc;
