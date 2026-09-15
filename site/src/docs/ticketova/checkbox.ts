import type { Doc } from "../../types";

export default {
  description:
    "One setting that is on or off, or one row picked from many. For a setting that takes effect the moment it changes, use [Switch](/ticketova/switch).",
  usage: `<Checkbox id="send-reminders" />
<Label htmlFor="send-reminders">Send payment reminders</Label>`,
  sections: [
    {
      title: "Description",
      text: "In a horizontal `Field`, `FieldContent` puts a description under the label, and the box lines up with the label's first line.",
      example: "description",
    },
    {
      title: "Group",
      text: 'Checkboxes that answer one question go in a `FieldSet` with a `FieldLegend`; `data-slot="checkbox-group"` on their `FieldGroup` spaces them closer.',
      example: "group",
    },
    {
      title: "Indeterminate",
      text: "`indeterminate` marks a parent whose children are partly checked. Work it out from the children, and let a click on the parent check or clear them all.",
      example: "indeterminate",
    },
    {
      title: "Disabled",
      text: "`disabled` dims the checkbox and stops it; `data-disabled` on its `Field` dims the label with it.",
      example: "disabled",
    },
    {
      title: "Invalid",
      text: "`aria-invalid` on the checkbox draws the red ring; `data-invalid` on the `Field` colours the label, and `FieldError` says why it matters.",
      example: "invalid",
    },
    {
      title: "Controlled",
      text: "`checked` and `onCheckedChange` when the box decides something else on the page, such as whether a destructive action is allowed.",
      example: "controlled",
    },
  ],
  api: [
    {
      name: "Checkbox",
      text: "Base UI's Checkbox with its check indicator inside. Every prop is Base UI's.",
    },
  ],
  links: { doc: "https://base-ui.com/react/components/checkbox", api: "https://base-ui.com/react/components/checkbox#api-reference" },
} satisfies Doc;
