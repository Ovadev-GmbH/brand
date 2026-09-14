import type { Doc } from "../../types";

export default {
  description:
    "The browser's own `<select>`, styled to match. It opens the platform's picker, which is what a phone should show. When options need icons, descriptions or search, use [Select](/internal/select) or [Combobox](/internal/combobox).",
  usage: `<NativeSelect defaultValue="team" aria-label="Plan">
  <NativeSelectOption value="starter">Starter</NativeSelectOption>
  <NativeSelectOption value="team">Team</NativeSelectOption>
  <NativeSelectOption value="scale">Scale</NativeSelectOption>
</NativeSelect>`,
  sections: [
    { title: "Size", text: '`size="sm"` is 28px tall, to sit in a toolbar beside small buttons.', example: "size" },
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
      text: "Take `NativeSelect` for forms used on phones, for long plain lists where the platform's picker is faster, and where the form must work before the page's JavaScript has loaded. Take `Select` when an option carries more than its text, or the open list must look the same everywhere.",
    },
  ],
  api: [
    {
      name: "NativeSelect",
      text: "A `<select>` inside a wrapper that draws the chevron. `className` goes to the wrapper, so a width set there reaches the select; every other prop goes to the `<select>`.",
      props: [["size", `"default" | "sm"`, `"default"`]],
    },
    { name: "NativeSelectOption", text: "An `<option>`, drawn in the platform's own colours." },
    { name: "NativeSelectOptGroup", text: "An `<optgroup>`; its `label` is the heading of the group." },
  ],
} satisfies Doc;
