import type { Doc } from "../../types";

export default {
  description:
    "The frame around a control: its label, its help text and its error, in a column or a row. `FieldSet` and `FieldGroup` put fields together into a form.",
  usage: `<Field>
  <FieldLabel htmlFor="site-name">Site name</FieldLabel>
  <Input id="site-name" />
  <FieldDescription>Appears in the browser tab and in every e-mail the site sends.</FieldDescription>
</Field>`,
  composition: `FieldSet
├── FieldLegend
├── FieldDescription
└── FieldGroup
    ├── Field
    │   ├── FieldLabel
    │   ├── Input
    │   ├── FieldDescription
    │   └── FieldError
    ├── FieldSeparator
    └── Field
        ├── Checkbox
        └── FieldContent
            ├── FieldLabel
            └── FieldDescription`,
  sections: [
    {
      title: "Orientation",
      text: '`orientation="horizontal"` puts the control beside its label, for a switch or a checkbox. `FieldContent` keeps a label and its description together on one side.',
      example: "orientation",
    },
    {
      title: "Responsive",
      text: '`orientation="responsive"` is a column while its `FieldGroup` is narrow and a row once the group is wider than 448px.',
      example: "responsive",
    },
    {
      title: "Field Set",
      text: "`FieldSet` and `FieldLegend` name fields that belong together; a `FieldDescription` right after the legend explains the set.",
      example: "field-set",
    },
    {
      title: "Checkbox",
      text: 'Each checkbox in a horizontal `Field`, all of them in a `FieldGroup`. `data-slot="checkbox-group"` on that group spaces them closer.',
      example: "checkbox",
    },
    {
      title: "Radio Group",
      text: 'A `RadioGroup` inside a `FieldSet`, each item in a horizontal `Field`. `variant="label"` on `FieldLegend` sets the legend at label size.',
      example: "radio-group",
    },
    {
      title: "Choice Card",
      text: "A `FieldLabel` wrapped around a whole `Field` becomes a card that answers a click anywhere, shaded while its control is checked. `FieldTitle` is the card's heading.",
      example: "choice-card",
    },
    {
      title: "Separator",
      text: "`FieldSeparator` rules off one part of a form from the next, with an optional word in the middle.",
      example: "separator",
    },
    {
      title: "Disabled",
      text: "`data-disabled` on the `Field` dims its label; set `disabled` on the control as well.",
      example: "disabled",
    },
    {
      title: "Errors",
      text: "`data-invalid` on the `Field` colours its label. `FieldError` shows its children, or the messages in `errors`: one as a line, several as a list, repeats dropped.",
      example: "errors",
    },
  ],
  api: [
    {
      name: "Field",
      text: 'A `<div role="group">` that lays out one control with its label, description and error.',
      props: [["orientation", `"vertical" | "horizontal" | "responsive"`, `"vertical"`]],
    },
    { name: "FieldLabel", text: "`Label` for the field. Wrapped around a whole `Field`, it draws a choice card." },
    { name: "FieldTitle", text: "A heading at label size that is not a `<label>`, for a choice card." },
    { name: "FieldDescription", text: "Help text under the control, or under a legend." },
    {
      name: "FieldError",
      text: 'A `role="alert"` in red. It renders nothing when it has neither children nor messages.',
      props: [["errors", "Array<{ message?: string } | undefined>", "–"]],
    },
    { name: "FieldContent", text: "A label and its description, kept together beside a control." },
    { name: "FieldSet", text: "A `<fieldset>` for fields that belong together." },
    {
      name: "FieldLegend",
      text: "The name of a `FieldSet`.",
      props: [["variant", `"legend" | "label"`, `"legend"`]],
    },
    { name: "FieldGroup", text: "The column that spaces fields into a form, and the width a `responsive` field measures." },
    { name: "FieldSeparator", text: "A rule between parts of a form; its children sit in the middle of it." },
  ],
} satisfies Doc;
