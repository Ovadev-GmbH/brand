import type { Doc } from "../../types";

export default {
  description:
    "Records with the same fields, one per row: tonight's bookings, the tables on the floor, the manager's week. Figures sit right-aligned in mono, so their digits line up.",
  usage: `<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Booking</TableHead>
      <TableHead className="text-right">Deposit, CHF</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>19:30, party of 6</TableCell>
      <TableCell className="text-right text-label-13-mono">120.00</TableCell>
    </TableRow>
  </TableBody>
</Table>`,
  composition: `Table
├── TableCaption
├── TableHeader
│   └── TableRow
│       └── TableHead
├── TableBody
│   └── TableRow
│       └── TableCell
└── TableFooter
    └── TableRow
        └── TableCell`,
  sections: [
    {
      title: "Caption",
      text: "`TableCaption` names what the table shows and when, under the rows, in `text-copy-14` and the secondary ink.",
      example: "caption",
    },
    {
      title: "Footer",
      text: "`TableFooter` holds the totals on `bg-surface-secondary`, ruled off from the rows above.",
      example: "footer",
    },
    {
      title: "Actions",
      text: "A row's actions go in a `DropdownMenu` behind a ghost icon button in the last column, with the destructive one last. The row stays shaded while its menu is open.",
      example: "actions",
    },
    {
      title: "Selection",
      text: 'A `Checkbox` in the first cell selects the row, and `data-state="selected"` on `TableRow` shades it with `bg-surface-active`: shade, not colour. A cell holding a checkbox drops its right padding.',
      example: "selection",
    },
    {
      title: "Data Table",
      text: "`Table` only draws. For sorting, filtering and paging, keep this markup and drive the rows with a table library such as TanStack Table; put a [Pagination](/januna/pagination) under it.",
    },
  ],
  api: [
    {
      name: "Table",
      text: "A `<table>` in `text-label-14` inside a container that scrolls sideways when the columns are wider than the page. Every part renders the element it is named after (`TableHeader` a `<thead>`, `TableRow` a `<tr>`, `TableCell` a `<td>`) and takes that element's props. `TableHead` is 44px tall in `text-label-13` and the secondary ink.",
    },
  ],
} satisfies Doc;
