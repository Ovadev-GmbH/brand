import type { Doc } from "../../types";

export default {
  description:
    "The browser's own `<select>`, styled to match. It opens the platform's picker, which is what a guest's phone should show. When options need descriptions or search, use [Select](/januna/select) or [Combobox](/januna/combobox).",
  usage: `<NativeSelect defaultValue="4" aria-label="Party size">
  <NativeSelectOption value="2">2 guests</NativeSelectOption>
  <NativeSelectOption value="4">4 guests</NativeSelectOption>
  <NativeSelectOption value="6">6 guests</NativeSelectOption>
</NativeSelect>`,
  composition: `NativeSelect
├── NativeSelectOption
└── NativeSelectOptGroup
    └── NativeSelectOption`,
  sections: [
    { title: "Size", text: '`size="sm"` is 28px tall, for a toolbar; the default is 40px.', example: "size" },
    {
      title: "Groups",
      text: "`NativeSelectOptGroup` gathers options under its `label`, which the browser draws as a heading that cannot be chosen.",
      example: "groups",
    },
    {
      title: "Disabled",
      text: "`disabled` on `NativeSelect` dims the whole control; on a `NativeSelectOption` it keeps that one option from being chosen.",
      example: "disabled",
    },
    {
      title: "Invalid",
      text: "`aria-invalid` on `NativeSelect` draws the red ring; `data-invalid` on the `Field` colours the label, and `FieldError` says what is missing.",
      example: "invalid",
    },
    {
      title: "Native Select vs Select",
      text: "Take `NativeSelect` for the guest's booking form on a phone, for long plain lists where the platform's picker is faster, and where the form must work before the page's JavaScript has loaded. Take `Select` when an option carries more than its text, or the open list must look the same on the lectern's tablet and the manager's laptop.",
    },
  ],
  api: [
    {
      name: "NativeSelect",
      text: "A `<select>` inside a wrapper that draws the up-down chevron. `className` goes to the wrapper, so a width set there reaches the select; every other prop goes to the `<select>`.",
      props: [["size", `"default" | "sm"`, `"default"`]],
    },
    { name: "NativeSelectOption", text: "An `<option>`, drawn in the platform's own colours." },
    { name: "NativeSelectOptGroup", text: "An `<optgroup>`; its `label` is the heading of the group." },
  ],
} satisfies Doc;
