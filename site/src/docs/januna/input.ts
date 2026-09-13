import type { Doc } from "../../types";

export default {
  description:
    "One line of text: a guest's name, a phone number, a voucher code. Inside a `Field` it gets a label, help text and an error.",
  usage: `<Input placeholder="Guest name" />`,
  sections: [
    {
      title: "Basic",
      text: "On its own an input is 40px tall, wears the small material's hairline and fills its container; set the width on the container.",
      example: "basic",
    },
    {
      title: "Field",
      text: "`Field` stacks `FieldLabel`, the input and `FieldDescription`, and ties the label to the input through `htmlFor`.",
      example: "field",
    },
    { title: "Field Group", text: "`FieldGroup` spaces several fields 24px apart as one form.", example: "field-group" },
    {
      title: "Disabled",
      text: "`disabled` on the input; `data-disabled` on the `Field` dims its label with it.",
      example: "disabled",
    },
    {
      title: "Invalid",
      text: "`aria-invalid` on the input draws a 1px red edge; `data-invalid` on the `Field` colours the label, and `FieldError` says what is wrong.",
      example: "invalid",
    },
    { title: "File", text: '`type="file"` sets the picker button in `text-button-14`, without a fill of its own.', example: "file" },
    {
      title: "Inline",
      text: '`orientation="horizontal"` lays a field out in a row, for a search with its button.',
      example: "inline",
    },
    { title: "Grid", text: "A grid on the `FieldGroup` puts short fields side by side.", example: "grid" },
    { title: "Required", text: "`required` on the input, and a mark in the label so it is visible before submitting.", example: "required" },
    { title: "Badge", text: "A `Badge` in the label flags a field that is new or changes behaviour.", example: "badge" },
    {
      title: "Mono",
      text: "The input's text is `text-copy-16` on a phone and `text-copy-14` from `md`, and both set the font. To show a code or an amount in Geist Mono, replace both: `text-label-14-mono md:text-label-14-mono`.",
      example: "mono",
    },
    {
      title: "Input Group",
      text: "Text, icons or buttons inside the input's edge go in an `InputGroup`. See [Input Group](/januna/input-group).",
      example: "input-group",
    },
    {
      title: "Button Group",
      text: "An input and a button that act together sit in a `ButtonGroup`. See [Button Group](/januna/button-group).",
      example: "button-group",
    },
    { title: "Form", text: "Fields, a select and the form's actions, as the host takes a booking at the lectern.", example: "form" },
  ],
  api: [
    {
      name: "Input",
      text: "Base UI's Input, which renders an `<input>` and passes every prop to it.",
    },
  ],
  links: { doc: "https://base-ui.com/react/components/input", api: "https://base-ui.com/react/components/input#api-reference" },
} satisfies Doc;
