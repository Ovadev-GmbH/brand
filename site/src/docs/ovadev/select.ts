import type { Doc } from "../../types";

export default {
  description:
    "One value from a short list that is known in advance. When the list is long enough that people would rather type, use [Combobox](/ovadev/combobox).",
  usage: `const topics = [
  { label: "TICKETOVA", value: "ticketova" },
  { label: "JANUNA", value: "januna" },
  { label: "Something else", value: "other" },
];

<Select items={topics}>
  <SelectTrigger className="w-48">
    <SelectValue placeholder="Topic" />
  </SelectTrigger>
  <SelectContent>
    {topics.map((topic) => (
      <SelectItem key={topic.value} value={topic.value}>
        {topic.label}
      </SelectItem>
    ))}
  </SelectContent>
</Select>`,
  composition: `Select
├── SelectTrigger
│   └── SelectValue
└── SelectContent
    ├── SelectGroup
    │   ├── SelectLabel
    │   └── SelectItem
    ├── SelectSeparator
    └── SelectGroup
        ├── SelectLabel
        └── SelectItem`,
  sections: [
    {
      title: "Align Item With Trigger",
      text: "By default the list opens so the chosen item sits over the trigger. `alignItemWithTrigger={false}` on `SelectContent` opens it below the trigger instead.",
      example: "align-item",
    },
    { title: "Groups", text: "`SelectGroup` with a `SelectLabel`, and `SelectSeparator` between groups.", example: "groups" },
    { title: "Scrollable", text: "A list taller than the space it has scrolls, with arrows at its edges.", example: "scrollable" },
    { title: "Small", text: '`size="sm"` on `SelectTrigger` matches the small buttons in a toolbar.', example: "small" },
    { title: "Disabled", text: "`disabled` on `Select` for the whole control, on `SelectItem` for one option.", example: "disabled" },
    {
      title: "Invalid",
      text: "`aria-invalid` on `SelectTrigger`, `data-invalid` on the `Field` around it, and a `FieldError`.",
      example: "invalid",
    },
    { title: "Controlled", text: "`value` and `onValueChange` when the choice drives something else on the page.", example: "controlled" },
  ],
  api: [
    {
      name: "SelectTrigger",
      text: "The button that shows the value and opens the list.",
      props: [["size", `"default" | "sm"`, `"default"`]],
    },
    {
      name: "SelectContent",
      text: "The list, positioned against the trigger.",
      props: [
        ["side", `"top" | "bottom" | "left" | "right" | "inline-start" | "inline-end"`, `"bottom"`],
        ["sideOffset", "number", "4"],
        ["align", `"start" | "center" | "end"`, `"center"`],
        ["alignOffset", "number", "0"],
        ["alignItemWithTrigger", "boolean", "true"],
      ],
    },
  ],
  links: { doc: "https://base-ui.com/react/components/select", api: "https://base-ui.com/react/components/select#api-reference" },
} satisfies Doc;
