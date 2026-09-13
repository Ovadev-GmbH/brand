import type { Doc } from "../../types";

export default {
  description:
    "Several lines of text: a special request, a note for the kitchen, the reason for a refund. For a single line, use [Input](/januna/input).",
  usage: `<Textarea placeholder="Special requests" />`,
  sections: [
    {
      title: "Field",
      text: "`Field` stacks `FieldLabel`, the textarea and `FieldDescription`, and ties the label to the textarea through `htmlFor`.",
      example: "field",
    },
    {
      title: "Height",
      text: "The textarea starts at 96px and grows with its content; it has no resize handle. A `min-h-*` class gives it more room to start with, a `max-h-*` class makes it scroll past that height.",
      example: "height",
    },
    {
      title: "Disabled",
      text: "`disabled` on the textarea; `data-disabled` on the `Field` dims its label with it.",
      example: "disabled",
    },
    {
      title: "Invalid",
      text: "`aria-invalid` on the textarea draws a 1px red edge; `data-invalid` on the `Field` colours the label, and `FieldError` says what is wrong.",
      example: "invalid",
    },
    { title: "Button", text: "The textarea and the button that sends it, with the button at the end.", example: "button" },
    {
      title: "Controlled",
      text: "`value` and `onChange` when something on the page depends on the text, such as a count against the 160 characters of a text message.",
      example: "controlled",
    },
  ],
  api: [
    {
      name: "Textarea",
      text: "A `<textarea>` with the small material's hairline that grows with its content. Its text is `text-copy-16` on a phone and `text-copy-14` from `md`. It takes that element's props.",
    },
  ],
} satisfies Doc;
