import type { Doc } from "../../types";

export default {
  description:
    "One answer from a few options that should all be in view at once: a plan, a region, a deployment strategy. When the options would not fit, use [Select](/ticketova/select).",
  usage: `<RadioGroup defaultValue="team" aria-label="Plan">
  <div className="flex items-center gap-3">
    <RadioGroupItem id="plan-starter" value="starter" />
    <Label htmlFor="plan-starter">Starter</Label>
  </div>
  <div className="flex items-center gap-3">
    <RadioGroupItem id="plan-team" value="team" />
    <Label htmlFor="plan-team">Team</Label>
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
      text: "`value` and `onValueChange` when the answer changes something else on the screen, such as the amount that will be invoiced.",
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
      text: "Base UI's Radio with its indicator inside: a 16px circle, black with a white dot when chosen.",
    },
  ],
  links: {
    doc: "https://base-ui.com/react/components/radio-group",
    api: "https://base-ui.com/react/components/radio-group#api-reference",
  },
} satisfies Doc;
