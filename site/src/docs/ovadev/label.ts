import type { Doc } from "../../types";

export default {
  description:
    "The name of a control, tied to it with `htmlFor` so a click on the words focuses or toggles it. In a form, [Field](/internal/field) uses it as `FieldLabel` and adds the description and the error.",
  usage: `<Label htmlFor="tenant-slug">Tenant slug</Label>
<Input id="tenant-slug" />`,
  sections: [
    {
      title: "With Checkbox",
      text: "Put the label after the checkbox, pointed at its `id`; a click on the words toggles the box.",
      example: "checkbox",
    },
    {
      title: "With Hint",
      text: "`Label` is a row with an 8px gap, so a short hint in the tertiary colour can follow the name.",
      example: "hint",
    },
    {
      title: "Disabled",
      text: '`Label` dims itself inside an element with the `group` class and `data-disabled="true"`. In a `Field`, `data-disabled` on the field does the same for `FieldLabel`.',
      example: "disabled",
    },
    {
      title: "Field",
      text: "In a form, use `FieldLabel` in a `Field`: the same label, spaced with the control, its description and its error. See [Field](/internal/field).",
      example: "field",
    },
  ],
  api: [
    {
      name: "Label",
      text: "A `<label>`. It takes that element's props, `htmlFor` among them.",
    },
  ],
} satisfies Doc;
