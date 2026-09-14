import type { Doc } from "../../types";

export default {
  description:
    "A row that shows one thing and offers one or two actions on it: a page with Edit, a product with its status, a pending invitation. For many rows with the same columns, use a [Table](/ovadev/table).",
  usage: `<Item variant="outline">
  <ItemContent>
    <ItemTitle>TICKETOVA</ItemTitle>
    <ItemDescription>Online ticketing, live since 2024</ItemDescription>
  </ItemContent>
  <ItemActions>
    <Button variant="outline" size="sm">Open</Button>
  </ItemActions>
</Item>`,
  composition: `ItemGroup
├── Item
│   ├── ItemHeader
│   ├── ItemMedia
│   ├── ItemContent
│   │   ├── ItemTitle
│   │   └── ItemDescription
│   ├── ItemActions
│   └── ItemFooter
└── ItemSeparator`,
  sections: [
    {
      title: "Variant",
      text: '`variant` sets the edge: none by default, a hairline with `"outline"`, the quieter surface with `"muted"`.',
      example: "variant",
    },
    {
      title: "Size",
      text: '`size="xs"` is the tight row for menus and dense lists. `"sm"` keeps the default padding but shrinks an image in `ItemMedia` to 32px and draws an `ItemGroup` closer together.',
      example: "size",
    },
    {
      title: "Icon",
      text: '`ItemMedia` with `variant="icon"` sizes one Lucide icon to 16px and, when the item has a description, aligns it with the title.',
      example: "icon",
    },
    {
      title: "Avatar",
      text: "An `Avatar` in a default `ItemMedia`, for a row about a person.",
      example: "avatar",
    },
    {
      title: "Group",
      text: "`ItemGroup` gives the items the list role, and each `Item` takes `role=\"listitem\"`. `ItemSeparator` draws a rule between two; take the group's gap and the separator's margin off for a ruled list.",
      example: "group",
    },
    {
      title: "Header and Footer",
      text: "`ItemHeader` and `ItemFooter` take the full width above and below the media, content and actions, for context and the figures that go with it.",
      example: "header-footer",
    },
    {
      title: "Link",
      text: "`render` turns the whole item into a link, which fills on hover and shows the focus ring.",
      example: "link",
    },
    {
      title: "Dropdown",
      text: 'An `Item` with `size="xs"` inside a `DropdownMenuItem` drops its own padding, for a menu of products with a line of detail each.',
      example: "dropdown",
    },
    {
      title: "Item or Field",
      text: "An Item shows something and acts on it. When the control is the value itself, a switch or a checkbox, use a horizontal [Field](/ovadev/field), so its label is tied to the control.",
    },
  ],
  api: [
    {
      name: "Item",
      text: "A `<div>` by default. Every other prop goes to the element it renders.",
      props: [
        ["variant", `"default" | "outline" | "muted"`, `"default"`],
        ["size", `"default" | "sm" | "xs"`, `"default"`],
        ["render", "React.ReactElement | ((props, state) => React.ReactElement)", "–"],
      ],
    },
    {
      name: "ItemMedia",
      text: "The icon, avatar or image at the start of the row.",
      props: [["variant", `"default" | "icon" | "image"`, `"default"`]],
    },
    { name: "ItemGroup", text: "A column of items with `role=\"list\"`." },
    { name: "ItemSeparator", text: "A horizontal `Separator` with 8px above and below." },
    { name: "ItemTitle", text: "One line in `text-heading-14`, cut after the first line." },
    { name: "ItemDescription", text: "A `<p>` in the secondary ink, cut after two lines." },
    { name: "ItemHeader", text: "A full-width row above the item's content; `ItemFooter` is the same row below it." },
  ],
} satisfies Doc;
