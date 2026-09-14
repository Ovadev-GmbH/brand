import type { Doc } from "../../types";

export default {
  description:
    "A row of toggles whose pressed items are the current choice: a time range, an environment, the log levels to show. For actions that do not stay pressed, use [Button Group](/internal/button-group).",
  usage: `<ToggleGroup variant="outline" defaultValue={["24h"]}>
  <ToggleGroupItem value="24h">24h</ToggleGroupItem>
  <ToggleGroupItem value="7d">7d</ToggleGroupItem>
</ToggleGroup>`,
  sections: [
    {
      title: "Outline",
      text: '`variant="outline"` on `ToggleGroup` gives every item a hairline; the items take it from the group.',
      example: "outline",
    },
    { title: "Size", text: "`size` on the group sets the height of every item: `sm`, the default, or `lg`.", example: "size" },
    {
      title: "Spacing",
      text: "`spacing` is the gap between items in Tailwind spacing steps, `2` by default. `spacing={0}` joins the items into one control with shared edges.",
      example: "spacing",
    },
    {
      title: "Multiple",
      text: "Without `multiple`, pressing an item releases the one before. With it, each item is on or off by itself, as for the log levels to show.",
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
      text: "Base UI's ToggleGroup, which hands its variant and size to every item.",
      props: [
        ["variant", `"default" | "outline"`, `"default"`],
        ["size", `"default" | "sm" | "lg"`, `"default"`],
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
