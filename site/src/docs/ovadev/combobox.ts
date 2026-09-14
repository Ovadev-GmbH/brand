import type { Doc } from "../../types";

export default {
  description:
    "A text field that filters a list as you type, for picking from more options than a menu can show: customers, team members, time zones. For a short list known in advance, use [Select](/ovadev/select).",
  usage: `const cantons = ["Zug", "Zürich", "Luzern", "Schwyz"];

<Combobox items={cantons}>
  <ComboboxInput placeholder="Search cantons" />
  <ComboboxContent>
    <ComboboxEmpty>No canton matches.</ComboboxEmpty>
    <ComboboxList>
      {(canton) => (
        <ComboboxItem key={canton} value={canton}>
          {canton}
        </ComboboxItem>
      )}
    </ComboboxList>
  </ComboboxContent>
</Combobox>`,
  composition: `Combobox
├── ComboboxInput
└── ComboboxContent
    ├── ComboboxEmpty
    └── ComboboxList
        ├── ComboboxItem
        └── ComboboxGroup
            ├── ComboboxLabel
            ├── ComboboxCollection
            │   └── ComboboxItem
            └── ComboboxSeparator`,
  sections: [
    {
      title: "Clear Button",
      text: "`showClear` on `ComboboxInput` adds a × that empties the field and the value. While it shows, it takes the chevron's place.",
      example: "clear-button",
    },
    {
      title: "Groups",
      text: "Pass `items` as groups, each with its own `items`. Render every group as a `ComboboxGroup` with a `ComboboxLabel` and a `ComboboxCollection`, with a `ComboboxSeparator` between groups.",
      example: "groups",
    },
    {
      title: "Custom Items",
      text: "Items can be objects. `itemToStringLabel` says what the field shows for the chosen one, and a `ComboboxItem` can lay out more than the name.",
      example: "custom-items",
    },
    {
      title: "Multiple",
      text: "`multiple` keeps the list open for more. Show the choices as `ComboboxChip`s in `ComboboxChips`, type in `ComboboxChipsInput`, and hand `ComboboxContent` the chips as `anchor` through `useComboboxAnchor`.",
      example: "multiple",
    },
    {
      title: "Auto Highlight",
      text: "`autoHighlight` on `Combobox` highlights the first match as you type, so Enter takes it without an arrow key.",
      example: "auto-highlight",
    },
    {
      title: "Popup",
      text: "For a control that reads like a select, render `ComboboxTrigger` as an outline `Button` and put the `ComboboxInput`, with `showTrigger={false}`, at the top of `ComboboxContent`.",
      example: "popup",
    },
    {
      title: "Disabled",
      text: "`disabled` on `ComboboxInput` locks the field and its buttons; on a `ComboboxItem` it keeps that option from being picked.",
      example: "disabled",
    },
    {
      title: "Invalid",
      text: "`aria-invalid` on `ComboboxInput` rings the field in red; `data-invalid` on the `Field` and a `FieldError` finish it.",
      example: "invalid",
    },
    {
      title: "Controlled",
      text: "`value` and `onValueChange` when the chosen item fills in something else on the page.",
      example: "controlled",
    },
  ],
  api: [
    {
      name: "ComboboxInput",
      text: "The field: Base UI's Input inside an `InputGroup`, with the chevron and the clear button at its end. Its children are added to the group.",
      props: [
        ["showTrigger", "boolean", "true"],
        ["showClear", "boolean", "false"],
        ["disabled", "boolean", "false"],
      ],
    },
    {
      name: "ComboboxContent",
      text: "The list's popup, positioned against the field and at least as wide as it.",
      props: [
        ["side", `"top" | "bottom" | "left" | "right" | "inline-start" | "inline-end"`, `"bottom"`],
        ["sideOffset", "number", "6"],
        ["align", `"start" | "center" | "end"`, `"start"`],
        ["alignOffset", "number", "0"],
        ["anchor", "Element | RefObject<Element | null> | VirtualElement | null", "the field"],
      ],
    },
    {
      name: "ComboboxChip",
      text: "One chosen value inside `ComboboxChips`.",
      props: [["showRemove", "boolean", "true"]],
    },
    { name: "ComboboxTrigger", text: "Base UI's Trigger, with a chevron after its children." },
    {
      name: "useComboboxAnchor",
      text: "Returns a ref for `ComboboxChips`. Pass the same ref to `ComboboxContent` as `anchor`, so the list opens under the chips.",
    },
  ],
  links: { doc: "https://base-ui.com/react/components/combobox", api: "https://base-ui.com/react/components/combobox#api-reference" },
} satisfies Doc;
