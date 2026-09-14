import type { Doc } from "../../types";

export default {
  description:
    "Turns one setting on or off, and the change applies at once: maintenance mode, the blog, the newsletter. When the choice only counts after a Save, use [Checkbox](/ovadev/checkbox).",
  usage: `<div className="flex items-center gap-3">
  <Switch id="publish-blog" />
  <Label htmlFor="publish-blog">Publish blog</Label>
</div>`,
  sections: [
    {
      title: "Size",
      text: '`size="sm"` draws a 24 × 16px switch for dense rows and table cells; the default is 32 × 20px.',
      example: "size",
    },
    {
      title: "Description",
      text: "A horizontal `Field` with a `FieldContent` puts the label and its `FieldDescription` on one side and the switch on the other.",
      example: "description",
    },
    {
      title: "Choice Card",
      text: "Wrap the `Field` in a `FieldLabel` and the whole card toggles the switch, taking the selected fill while it is on.",
      example: "choice-card",
    },
    {
      title: "Disabled",
      text: "`disabled` on the switch; `data-disabled` on its `Field` dims the label and description with it. Say why it is locked.",
      example: "disabled",
    },
    {
      title: "Invalid",
      text: "`aria-invalid` on the switch draws the red ring; `data-invalid` on the `Field` colours the label, and `FieldError` says what is required.",
      example: "invalid",
    },
    {
      title: "In a Table",
      text: 'In a row, use `size="sm"` and give each switch an `aria-label`: the column header is not its label.',
      example: "table",
    },
    {
      title: "Controlled",
      text: "`checked` and `onCheckedChange` hand the state to you, so the switch can wait for the request to go through before it moves.",
      example: "controlled",
    },
  ],
  api: [
    {
      name: "Switch",
      text: "Base UI's Switch with its thumb inside. Every other prop is Base UI's.",
      props: [["size", `"default" | "sm"`, `"default"`]],
    },
  ],
  links: { doc: "https://base-ui.com/react/components/switch", api: "https://base-ui.com/react/components/switch#api-reference" },
} satisfies Doc;
