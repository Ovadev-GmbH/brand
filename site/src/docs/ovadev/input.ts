import type { Doc } from "../../types";

export default {
  description:
    "One line of text: a slug, an e-mail address, an amount. Inside a `Field` it gets a label, help text and an error.",
  usage: `<Input placeholder="Page slug" />`,
  sections: [
    { title: "Basic", text: "On its own an input fills its container; set the width on the container.", example: "basic" },
    {
      title: "Field",
      text: "`Field` stacks `FieldLabel`, the input and `FieldDescription`, and ties the label to the input through `htmlFor`.",
      example: "field",
    },
    { title: "Field Group", text: "`FieldGroup` spaces several fields as one form.", example: "field-group" },
    {
      title: "Disabled",
      text: "`disabled` on the input; `data-disabled` on the `Field` dims its label and description with it.",
      example: "disabled",
    },
    {
      title: "Invalid",
      text: "`aria-invalid` on the input draws the red ring; `data-invalid` on the `Field` colours the label, and `FieldError` says what is wrong.",
      example: "invalid",
    },
    { title: "File", text: '`type="file"` styles the picker button to match.', example: "file" },
    {
      title: "Inline",
      text: '`orientation="horizontal"` lays a field out in a row, for a search with its button.',
      example: "inline",
    },
    { title: "Grid", text: "A grid on the `FieldGroup` puts short fields side by side.", example: "grid" },
    { title: "Required", text: "`required` on the input, and a mark in the label so it is visible before submitting.", example: "required" },
    { title: "Badge", text: "A `Badge` in the label flags a field that is new or changes behaviour.", example: "badge" },
    {
      title: "Input Group",
      text: "Text, icons or buttons inside the input's edge go in an `InputGroup`. See [Input Group](/ovadev/input-group).",
      example: "input-group",
    },
    {
      title: "Button Group",
      text: "An input and a button that act together sit in a `ButtonGroup`. See [Button Group](/ovadev/button-group).",
      example: "button-group",
    },
    { title: "Form", text: "Fields, a select and the form's actions, as a page is created.", example: "form" },
  ],
  api: [
    {
      name: "Input",
      text: "Base UI's Input, which renders an `<input>` and passes every prop to it.",
    },
  ],
  links: { doc: "https://base-ui.com/react/components/input", api: "https://base-ui.com/react/components/input#api-reference" },
} satisfies Doc;
