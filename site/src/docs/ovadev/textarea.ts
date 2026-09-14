import type { Doc } from "../../types";

export default {
  description:
    "Several lines of text: a note on an invoice, the reason for a refund, an incident summary. For a single line, use [Input](/internal/input).",
  usage: `<Textarea placeholder="Reason for the credit note" />`,
  sections: [
    {
      title: "Field",
      text: "`Field` stacks `FieldLabel`, the textarea and `FieldDescription`, and ties the label to the textarea through `htmlFor`.",
      example: "field",
    },
    {
      title: "Height",
      text: "The textarea grows with its content from 64px. A `min-h-*` class gives it more room to start with, a `max-h-*` class makes it scroll past that height.",
      example: "height",
    },
    {
      title: "Disabled",
      text: "`disabled` on the textarea; `data-disabled` on the `Field` dims its label with it.",
      example: "disabled",
    },
    {
      title: "Invalid",
      text: "`aria-invalid` on the textarea draws the red ring; `data-invalid` on the `Field` colours the label, and `FieldError` says what is wrong.",
      example: "invalid",
    },
    { title: "Button", text: "The textarea and the button that sends it, with the button at the end.", example: "button" },
    {
      title: "Controlled",
      text: "`value` and `onChange` when something on the page depends on the text, such as a count against a limit.",
      example: "controlled",
    },
  ],
  api: [
    {
      name: "Textarea",
      text: "A `<textarea>` that grows with its content. It takes that element's props.",
    },
  ],
} satisfies Doc;
