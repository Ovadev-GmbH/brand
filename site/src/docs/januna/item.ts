import type { Doc } from "../../types";

export default {
  description:
    "A row that shows one thing and offers one or two actions on it: a booking with Seat, a party on the waitlist, a member of staff with a pending invite. For many rows with the same columns, use a [Table](/januna/table).",
  usage: `<Item variant="outline">
  <ItemContent>
    <ItemTitle>Anna Rossi, party of 4</ItemTitle>
    <ItemDescription>Tonight 18:30, T7</ItemDescription>
  </ItemContent>
  <ItemActions>
    <Button variant="outline" size="sm">Seat</Button>
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
      text: '`variant` sets the edge: none by default, a `divider` hairline with `"outline"`, the quieter `bg-surface-secondary` with `"muted"`. Each keeps 12px corners.',
      example: "variant",
    },
    {
      title: "Size",
      text: '`size="sm"` tightens the padding and shrinks an image in `ItemMedia` to 32px. `"xs"` is the tight row for menus and dense lists, with a 24px image. An `ItemGroup` draws its items closer together at either.',
      example: "size",
    },
    {
      title: "Icon",
      text: '`ItemMedia` with `variant="icon"` sizes one Hugeicons icon to 16px and, when the item has a description, aligns it with the title.',
      example: "icon",
    },
    {
      title: "Avatar",
      text: 'An `Avatar` in a default `ItemMedia`, for a row about a guest or a member of staff. For a photo, `variant="image"` crops it to a square with 8px corners.',
      example: "avatar",
    },
    {
      title: "Group",
      text: '`ItemGroup` gives the items the list role, and each `Item` takes `role="listitem"`. `ItemSeparator` draws a rule between two; take the group\'s gap and the separator\'s margin off for a ruled list.',
      example: "group",
    },
    {
      title: "Header and Footer",
      text: "`ItemHeader` and `ItemFooter` take the full width above and below the media, content and actions, for context and the figures that go with it.",
      example: "header-footer",
    },
    {
      title: "Link",
      text: "`render` turns the whole item into a link, which takes `bg-surface-hover` under the pointer and shows the focus ring.",
      example: "link",
    },
    {
      title: "Dropdown",
      text: 'An `Item` with `size="xs"` inside a `DropdownMenuItem` drops its own padding, for a menu of tables with a line of detail each.',
      example: "dropdown",
    },
    {
      title: "Item or Field",
      text: "An Item shows something and acts on it. When the control is the value itself, a switch or a checkbox, use a horizontal [Field](/januna/field), so its label is tied to the control.",
    },
  ],
  api: [
    {
      name: "Item",
      text: "A `<div>` in `text-label-14` by default. Every other prop goes to the element it renders.",
      props: [
        ["variant", `"default" | "outline" | "muted"`, `"default"`],
        ["size", `"default" | "sm" | "xs"`, `"default"`],
        ["render", "React.ReactElement | ((props, state) => React.ReactElement)", "–"],
      ],
    },
    {
      name: "ItemMedia",
      text: 'The icon, avatar or image at the start of the row. `"image"` is a 40px square, 32px at `sm` and 24px at `xs`.',
      props: [["variant", `"default" | "icon" | "image"`, `"default"`]],
    },
    { name: "ItemGroup", text: 'A column of items with `role="list"`, 16px apart.' },
    { name: "ItemSeparator", text: "A horizontal `Separator` with 8px above and below." },
    { name: "ItemTitle", text: "One line in `text-heading-14`, cut after the first line." },
    { name: "ItemDescription", text: "A `<p>` in `text-copy-14` and the secondary ink, cut after two lines." },
    { name: "ItemActions", text: "The controls at the end of the row, 8px apart." },
    { name: "ItemHeader", text: "A full-width row above the item's content; `ItemFooter` is the same row below it." },
  ],
} satisfies Doc;
