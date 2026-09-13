import type { Doc } from "../../types";

export default {
  description:
    "One setting that is on or off, or one item picked from many: a reminder to send, a request on a booking, a table to close. For a setting that takes effect the moment it changes, use [Switch](/januna/switch).",
  usage: `<Checkbox id="send-reminder" />
<Label htmlFor="send-reminder">Send the guest a reminder</Label>`,
  composition: `Field
├── Checkbox
└── FieldContent
    ├── FieldLabel
    └── FieldDescription`,
  sections: [
    {
      title: "Description",
      text: "In a horizontal `Field`, `FieldContent` puts a `FieldDescription` under the label, and the 20px box lines up with the label's first line.",
      example: "description",
    },
    {
      title: "Group",
      text: 'Checkboxes that answer one question go in a `FieldSet` with a `FieldLegend`; `data-slot="checkbox-group"` on their `FieldGroup` brings them to 12px apart.',
      example: "group",
    },
    {
      title: "Choice Card",
      text: "Wrap the horizontal `Field` in a `FieldLabel` and the whole card toggles the box. A checked card takes the selected shade, not a colour.",
      example: "choice-card",
    },
    {
      title: "Indeterminate",
      text: "`indeterminate` marks a parent whose children are partly checked. Work it out from the children, and let a click on the parent check or clear them all.",
      example: "indeterminate",
    },
    {
      title: "Disabled",
      text: "`disabled` on the checkbox and `data-disabled` on its `Field`, which dims the box and the label together. Say why it is locked.",
      example: "disabled",
    },
    {
      title: "Invalid",
      text: "`aria-invalid` on the checkbox draws the red ring; `data-invalid` on the `Field` colours the label, and `FieldError` says what depends on it.",
      example: "invalid",
    },
    {
      title: "Controlled",
      text: "`checked` and `onCheckedChange` when the box decides something else on the screen, such as whether a booking can be cancelled.",
      example: "controlled",
    },
  ],
  api: [
    {
      name: "Checkbox",
      text: "Base UI's Checkbox with its tick inside: a 20px box on the sheet, filled with the green and a taupe tick once checked. Every prop is Base UI's.",
    },
  ],
  links: { doc: "https://base-ui.com/react/components/checkbox", api: "https://base-ui.com/react/components/checkbox#api-reference" },
} satisfies Doc;
