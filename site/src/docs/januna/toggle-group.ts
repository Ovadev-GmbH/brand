import type { Doc } from "../../types";

export default {
  description:
    "A row of toggles whose pressed items are the current choice: a shift, an area of the floor, the booking states to show. For actions that do not stay pressed, use [Button Group](/januna/button-group).",
  usage: `<ToggleGroup variant="outline" defaultValue={["dinner"]}>
  <ToggleGroupItem value="lunch">Lunch</ToggleGroupItem>
  <ToggleGroupItem value="dinner">Dinner</ToggleGroupItem>
</ToggleGroup>`,
  sections: [
    {
      title: "Outline",
      text: '`variant="outline"` on `ToggleGroup` gives every item a hairline; the items take it from the group.',
      example: "outline",
    },
    {
      title: "Size",
      text: "`size` on the group sets the height of every item: `sm` (32px), the default 40px, or `lg` (48px).",
      example: "size",
    },
    {
      title: "Spacing",
      text: "`spacing` is the gap between items in Tailwind spacing steps, `2` (8px) by default. `spacing={0}` joins the items into one control with shared edges and rounded ends.",
      example: "spacing",
    },
    {
      title: "Multiple",
      text: "Without `multiple`, pressing an item releases the one before. With it, each item is on or off by itself, as for the booking states to show.",
      example: "multiple",
    },
    {
      title: "Vertical",
      text: '`orientation="vertical"` stacks the items, stretches them to the width of the group, and moves between them with the up and down arrow keys.',
      example: "vertical",
    },
    { title: "Disabled", text: "`disabled` on `ToggleGroup` for every item, on `ToggleGroupItem` for one.", example: "disabled" },
    {
      title: "Controlled",
      text: "`value` and `onValueChange` hold the pressed items as an array. When one item must always stay pressed, ignore the change that would leave the array empty.",
      example: "controlled",
    },
  ],
  api: [
    {
      name: "ToggleGroup",
      text: "Base UI's ToggleGroup, which hands its variant, size and spacing to every item.",
      props: [
        ["variant", `"default" | "outline"`, "–"],
        ["size", `"default" | "sm" | "lg"`, "–"],
        ["spacing", "number", "2"],
        ["orientation", `"horizontal" | "vertical"`, `"horizontal"`],
      ],
    },
    {
      name: "ToggleGroupItem",
      text: "Base UI's Toggle inside the group. Its own `variant` and `size` apply only when the group sets none.",
      props: [
        ["variant", `"default" | "outline"`, `"default"`],
        ["size", `"default" | "sm" | "lg"`, `"default"`],
      ],
    },
  ],
  links: {
    doc: "https://base-ui.com/react/components/toggle-group",
    api: "https://base-ui.com/react/components/toggle-group#api-reference",
  },
} satisfies Doc;
