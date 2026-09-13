import type { Doc } from "../../types";

export default {
  description:
    "One value from a short list that is known in advance: a shift, a table, the server for a section. When the list is long enough that people would rather type, use [Combobox](/januna/combobox).",
  usage: `const shifts = [
  { label: "Lunch", value: "lunch" },
  { label: "Dinner", value: "dinner" },
  { label: "Late night", value: "late" },
];

<Select items={shifts}>
  <SelectTrigger className="w-48">
    <SelectValue placeholder="Shift" />
  </SelectTrigger>
  <SelectContent>
    {shifts.map((shift) => (
      <SelectItem key={shift.value} value={shift.value}>
        {shift.label}
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
    {
      title: "Scrollable",
      text: "A list taller than the space it has scrolls, with arrows at its top and bottom edges.",
      example: "scrollable",
    },
    {
      title: "Small",
      text: '`size="sm"` on `SelectTrigger` is 32px tall, to sit beside the small buttons in a toolbar; the default is 40px.',
      example: "small",
    },
    { title: "Disabled", text: "`disabled` on `Select` for the whole control, on `SelectItem` for one option.", example: "disabled" },
    {
      title: "Invalid",
      text: "`aria-invalid` on `SelectTrigger`, `data-invalid` on the `Field` around it, and a `FieldError`.",
      example: "invalid",
    },
    {
      title: "Controlled",
      text: "`value` and `onValueChange` when the choice drives something else on the screen.",
      example: "controlled",
    },
  ],
  api: [
    {
      name: "SelectTrigger",
      text: "The button that shows the value and opens the list, with an up-down chevron at its end.",
      props: [["size", `"default" | "sm"`, `"default"`]],
    },
    {
      name: "SelectContent",
      text: "The list on the menu material, positioned against the trigger and at least as wide as it.",
      props: [
        ["side", `"top" | "bottom" | "left" | "right" | "inline-start" | "inline-end"`, `"bottom"`],
        ["sideOffset", "number", "4"],
        ["align", `"start" | "center" | "end"`, `"center"`],
        ["alignOffset", "number", "0"],
        ["alignItemWithTrigger", "boolean", "true"],
      ],
    },
    { name: "SelectItem", text: "One option in Label 14, shaded under the pointer, with a tick at its end when chosen." },
  ],
  links: { doc: "https://base-ui.com/react/components/select", api: "https://base-ui.com/react/components/select#api-reference" },
} satisfies Doc;
