import type { Doc } from "../../types";

export default {
  description:
    "The main sections of a site in a row, each opening a panel with the pages inside it. For actions rather than places, use [Menubar](/ovadev/menubar) or [Dropdown Menu](/ovadev/dropdown-menu).",
  usage: `<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Products</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink href="/products/ticketova">TICKETOVA</NavigationMenuLink>
        <NavigationMenuLink href="/products/januna">JANUNA</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuLink href="/blog" className={navigationMenuTriggerStyle()}>
        Blog
      </NavigationMenuLink>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`,
  composition: `NavigationMenu
└── NavigationMenuList
    └── NavigationMenuItem
        ├── NavigationMenuTrigger
        ├── NavigationMenuContent
        │   └── NavigationMenuLink
        └── NavigationMenuLink`,
  sections: [
    {
      title: "Links",
      text: "A `NavigationMenuLink` styled with `navigationMenuTriggerStyle()` sits in the row like a trigger, for a section with no pages under it. `active` marks the page you are on with the pressed fill.",
      example: "links",
    },
    {
      title: "Icons",
      text: "An icon and a line of detail under each link's name, so the panel says what is waiting on each page.",
      example: "icons",
    },
    {
      title: "Columns",
      text: "A grid inside `NavigationMenuContent` sets out a larger section in columns, each under a small heading. The panel takes the width you give the grid.",
      example: "columns",
    },
    {
      title: "Router Link",
      text: "For client-side routing, pass the router's link as `render`. Add `closeOnClick`, or the panel stays open over the page it just opened.",
      code: `<NavigationMenuLink
  render={<Link to="/blog" />}
  active={pathname === "/blog"}
  closeOnClick
>
  Blog
</NavigationMenuLink>`,
    },
  ],
  api: [
    {
      name: "NavigationMenu",
      text: "The root. It renders the popup the panels open in itself, 8px below the row, through `NavigationMenuPositioner`.",
      props: [["align", `"start" | "center" | "end"`, `"start"`]],
    },
    {
      name: "NavigationMenuPositioner",
      text: "Places the popup. `NavigationMenu` already renders one; it is exported for a root of your own.",
      props: [
        ["side", `"top" | "bottom" | "left" | "right" | "inline-start" | "inline-end"`, `"bottom"`],
        ["sideOffset", "number", "8"],
        ["align", `"start" | "center" | "end"`, `"start"`],
        ["alignOffset", "number", "0"],
      ],
    },
    {
      name: "navigationMenuTriggerStyle",
      text: "The trigger's classes as a function, for a link that sits in the row without a panel.",
    },
  ],
  links: {
    doc: "https://base-ui.com/react/components/navigation-menu",
    api: "https://base-ui.com/react/components/navigation-menu#api-reference",
  },
} satisfies Doc;
