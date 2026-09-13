import type { Doc } from "../../types";

export default {
  description:
    "One answer from a few options that should all be in view at once: a shift, a seating area, how long a table is held. When the options would not fit, use [Select](/januna/select).",
  usage: `<RadioGroup defaultValue="dinner" aria-label="Shift">
  <div className="flex items-center gap-3">
    <RadioGroupItem id="shift-lunch" value="lunch" />
    <Label htmlFor="shift-lunch">Lunch</Label>
  </div>
  <div className="flex items-center gap-3">
    <RadioGroupItem id="shift-dinner" value="dinner" />
    <Label htmlFor="shift-dinner">Dinner</Label>
  </div>
</RadioGroup>`,
  composition: `RadioGroup
└── Field
    ├── RadioGroupItem
    └── FieldContent
        ├── FieldLabel
        └── FieldDescription`,
  sections: [
    {
      title: "Description",
      text: "When an option needs a line of explanation, put its `FieldLabel` and `FieldDescription` in a `FieldContent` beside the `RadioGroupItem`, inside a horizontal `Field`.",
      example: "description",
    },
    {
      title: "Choice Card",
      text: "Wrap the horizontal `Field` in a `FieldLabel` and the whole card becomes the target; the chosen card takes the selected shade.",
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
      text: "`value` and `onValueChange` when the answer changes something else on the screen, such as the deposit a party pays.",
      example: "controlled",
    },
  ],
  api: [
    {
      name: "RadioGroup",
      text: "Base UI's RadioGroup, laid out as a grid with 12px between the options. Every prop is Base UI's.",
    },
    {
      name: "RadioGroupItem",
      text: "Base UI's Radio with its indicator inside: a 20px circle on the sheet, filled with the green and a taupe dot when chosen.",
    },
  ],
  links: {
    doc: "https://base-ui.com/react/components/radio-group",
    api: "https://base-ui.com/react/components/radio-group#api-reference",
  },
} satisfies Doc;
