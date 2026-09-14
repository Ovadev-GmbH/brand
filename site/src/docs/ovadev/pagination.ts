import type { Doc } from "../../types";

export default {
  description:
    "Links between the pages of a long list, under the table they page through. The current page is outlined; the others are ghost buttons.",
  usage: `<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="?page=1" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="?page=2" isActive>2</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="?page=3" />
    </PaginationItem>
  </PaginationContent>
</Pagination>`,
  composition: `Pagination
└── PaginationContent
    └── PaginationItem
        ├── PaginationPrevious
        ├── PaginationLink
        ├── PaginationEllipsis
        └── PaginationNext`,
  sections: [
    {
      title: "Previous and Next",
      text: "For a list without page numbers, keep `PaginationPrevious` and `PaginationNext` and say which rows are shown beside them.",
      example: "previous-next",
    },
    {
      title: "Icons Only",
      text: "A `PaginationLink` holding only a chevron is square at its default `size`. Give it an `aria-label`, since the icon says nothing to a screen reader.",
      example: "icons-only",
    },
    {
      title: "Labels",
      text: "`text` renames Previous and Next, as Newer and Older for a blog sorted newest first. Below `sm` only the chevron shows, so set `aria-label` to match.",
      example: "labels",
    },
    {
      title: "Disabled",
      text: "A link has no `disabled`. On the first or last page, leave out `href`, set `aria-disabled`, and take it out of the tab order with `tabIndex={-1}`.",
      example: "disabled",
    },
    {
      title: "Page Size",
      text: 'Under a long table, a small `Select` sets the rows per page and a line says which rows are shown, beside the links. `size="sm"` on the trigger keeps it to the toolbar height.',
      example: "page-size",
    },
    {
      title: "Controlled",
      text: "`isActive` follows the page held in state, and an `onClick` that prevents the default moves between pages without a reload.",
      example: "controlled",
    },
  ],
  api: [
    { name: "Pagination", text: "A `<nav>` labelled for assistive technology and centred in its container." },
    {
      name: "PaginationLink",
      text: "A `Button` rendered as an `<a>`, outlined and marked `aria-current=\"page\"` when active. Takes every prop of an `<a>`.",
      props: [
        ["isActive", "boolean", "false"],
        ["size", `"default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg"`, `"icon"`],
      ],
    },
    {
      name: "PaginationPrevious",
      text: "A `PaginationLink` with a left chevron and a label that hides below `sm`. `PaginationNext` is its mirror, with `text` defaulting to `\"Next\"`.",
      props: [
        ["text", "string", `"Previous"`],
        ["size", `"default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg"`, `"default"`],
      ],
    },
    { name: "PaginationEllipsis", text: "Three dots for the pages left out, hidden from assistive technology." },
  ],
} satisfies Doc;
