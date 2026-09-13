import type { Doc } from "../../types";

export default {
  description:
    "The path from a list down to the record on screen: guests, one guest, one booking. Every level but the last is a link back up.",
  usage: `<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/guests">Guests</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Anna Keller</BreadcrumbPage>
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
      text: "`BreadcrumbSeparator` draws a 14px chevron unless it is given children. A slash reads better where the path mirrors a URL.",
      example: "separator",
    },
    {
      title: "Collapsed",
      text: "When the path is deeper than the space allows, keep the first and the last two levels and put the rest behind a `BreadcrumbEllipsis` in a `DropdownMenu`. The trigger needs an `aria-label`, since the ellipsis is hidden from screen readers.",
      example: "collapsed",
    },
    {
      title: "Dropdown",
      text: "A level can switch to its siblings: a `DropdownMenu` on the shift moves between Lunch and Dinner without going back up.",
      example: "dropdown",
    },
    {
      title: "Link Component",
      text: "`render` on `BreadcrumbLink` hands the element to your router's link, which keeps the breadcrumb's styles and gains client-side navigation.",
      code: `<BreadcrumbLink render={<Link to="/guests/anna-keller" />}>Anna Keller</BreadcrumbLink>`,
    },
    {
      title: "Page Header",
      text: "A booking screen opens with the breadcrumb, then the reference with its status and the actions for it.",
      example: "page-header",
    },
  ],
  api: [
    { name: "Breadcrumb", text: "A `<nav>` labelled for assistive technology." },
    {
      name: "BreadcrumbList",
      text: "An `<ol>` in `text-label-14` and the secondary ink that wraps onto a second line when the path does not fit.",
    },
    {
      name: "BreadcrumbLink",
      text: "An `<a>` by default, turning to the primary ink under the pointer. Every other prop goes to the element it renders.",
      props: [["render", "React.ReactElement | ((props, state) => React.ReactElement)", "–"]],
    },
    { name: "BreadcrumbPage", text: 'The current level: a `<span>` in the primary ink with `aria-current="page"`.' },
    { name: "BreadcrumbSeparator", text: "An `<li>` hidden from assistive technology, holding a chevron or its children." },
    { name: "BreadcrumbEllipsis", text: "A dots icon standing for the levels left out, hidden from assistive technology." },
  ],
} satisfies Doc;
