import type { Doc } from "../../types";

export default {
  description:
    "One answer from a few options that should all be in view at once: a language, a canton, a product. When the options would not fit, use [Select](/ovadev/select).",
  usage: `<RadioGroup defaultValue="de" aria-label="Language">
  <div className="flex items-center gap-3">
    <RadioGroupItem id="language-de" value="de" />
    <Label htmlFor="language-de">Deutsch</Label>
  </div>
  <div className="flex items-center gap-3">
    <RadioGroupItem id="language-en" value="en" />
    <Label htmlFor="language-en">English</Label>
  </div>
</RadioGroup>`,
  sections: [
    {
      title: "Description",
      text: "When an option needs a line of explanation, put its `FieldLabel` and `FieldDescription` in a `FieldContent` beside the `RadioGroupItem`, inside a horizontal `Field`.",
      example: "description",
    },
    {
      title: "Choice Card",
      text: "Wrap the horizontal `Field` in a `FieldLabel` and the whole card becomes the target; the chosen card takes the selected fill.",
      example: "choice-card",
    },
    {
      title: "Fieldset",
      text: "`FieldSet` with a `FieldLegend` and a `FieldDescription` names the question above its options. Point the group's `aria-labelledby` at the legend.",
      example: "fieldset",
    },
    {
      title: "Disabled",
      text: "`disabled` on `RadioGroup` locks every option, on a `RadioGroupItem` just that one. `data-disabled` on its `Field` dims the label with it.",
      example: "disabled",
    },
    {
      title: "Invalid",
      text: "`aria-invalid` on each `RadioGroupItem` draws the red ring, `data-invalid` on each `Field` colours the labels, and a `FieldError` under the group says what is missing.",
      example: "invalid",
    },
    {
      title: "Controlled",
      text: "`value` and `onValueChange` when the answer changes something else on the screen, such as the language the confirmation is sent in.",
      example: "controlled",
    },
  ],
  api: [
    {
      name: "RadioGroup",
      text: "Base UI's RadioGroup, laid out as a grid with 8px between the options. Every prop is Base UI's.",
    },
    {
      name: "RadioGroupItem",
      text: "Base UI's Radio with its indicator inside: a 16px circle, ink with a paper dot when chosen.",
    },
  ],
  links: {
    doc: "https://base-ui.com/react/components/radio-group",
    api: "https://base-ui.com/react/components/radio-group#api-reference",
  },
} satisfies Doc;
