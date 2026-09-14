import type { Doc } from "../../types";

export default {
  description:
    "Records with the same fields, one per row: posts, contact requests, people. Figures in mono and right-aligned, so their digits line up.",
  usage: `<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Page</TableHead>
      <TableHead className="text-right">Visitors</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="text-label-13-mono">/about</TableCell>
      <TableCell className="text-right text-label-13-mono">1'240</TableCell>
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
    { title: "Caption", text: "`TableCaption` names what the table shows and when, under the rows.", example: "caption" },
    { title: "Footer", text: "`TableFooter` holds the totals, on the quieter surface.", example: "footer" },
    {
      title: "Actions",
      text: "A row's actions go in a `DropdownMenu` behind a ghost icon button in the last column, with the destructive one last.",
      example: "actions",
    },
    {
      title: "Selection",
      text: 'A `Checkbox` in the first cell selects the row, and `data-state="selected"` on `TableRow` shades it. A cell holding a checkbox drops its right padding.',
      example: "selection",
    },
    {
      title: "Data Table",
      text: "`Table` only draws. For sorting, filtering and paging, keep this markup and drive the rows with a table library such as TanStack Table.",
    },
  ],
  api: [
    {
      name: "Table",
      text: "A `<table>` inside a container that scrolls sideways when the columns are wider than the page. Every part renders the element it is named after (`TableHeader` a `<thead>`, `TableRow` a `<tr>`, `TableCell` a `<td>`) and takes that element's props.",
    },
  ],
} satisfies Doc;
