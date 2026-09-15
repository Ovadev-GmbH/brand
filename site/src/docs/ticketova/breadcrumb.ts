import type { Doc } from "../../types";

export default {
  description:
    "The path from a list down to the record on screen: tenant, invoices, one invoice. Every level but the last is a link back up.",
  usage: `<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/tenants">Tenants</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>acme-logistics</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`,
  composition: `Breadcrumb
└── BreadcrumbList
    ├── BreadcrumbItem
    │   ├── BreadcrumbLink
    │   └── BreadcrumbEllipsis
    ├── BreadcrumbSeparator
    └── BreadcrumbItem
        └── BreadcrumbPage`,
  sections: [
    {
      title: "Custom Separator",
      text: "`BreadcrumbSeparator` draws a chevron unless it is given children. A slash reads better where the path mirrors a URL.",
      example: "separator",
    },
    {
      title: "Collapsed",
      text: "When the path is deeper than the space allows, keep the first and the last two levels and put the rest behind a `BreadcrumbEllipsis` in a `DropdownMenu`. The trigger needs an `aria-label`, since the ellipsis is hidden from screen readers.",
      example: "collapsed",
    },
    {
      title: "Dropdown",
      text: "A level can switch to its siblings: a `DropdownMenu` on the tenant moves between tenants without going back to the list.",
      example: "dropdown",
    },
    {
      title: "Link Component",
      text: "`render` on `BreadcrumbLink` hands the element to your router's link, which keeps the breadcrumb's styles and gains client-side navigation.",
      code: `<BreadcrumbLink render={<Link to="/tenants/acme-logistics" />}>acme-logistics</BreadcrumbLink>`,
    },
    {
      title: "Page Header",
      text: "A record screen opens with the breadcrumb, then the identifier with its status and the actions for it.",
      example: "page-header",
    },
  ],
  api: [
    { name: "Breadcrumb", text: "A `<nav>` labelled for assistive technology." },
    { name: "BreadcrumbList", text: "An `<ol>` that wraps onto a second line when the path does not fit." },
    {
      name: "BreadcrumbLink",
      text: "An `<a>` by default, darkening under the pointer. Every other prop goes to the element it renders.",
      props: [["render", "React.ReactElement | ((props, state) => React.ReactElement)", "–"]],
    },
    { name: "BreadcrumbPage", text: "The current level: a `<span>` in the primary ink with `aria-current=\"page\"`." },
    { name: "BreadcrumbSeparator", text: "An `<li>` hidden from assistive technology, holding a chevron or its children." },
    { name: "BreadcrumbEllipsis", text: "Three dots standing for the levels left out, hidden from assistive technology." },
  ],
} satisfies Doc;
