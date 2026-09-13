import type { Doc } from "../../types";

export default {
  description:
    "The main sections of a product in a row, each opening a panel with the pages inside it: tonight's service, the team, the week's reports. For actions rather than places, use [Menubar](/januna/menubar) or [Dropdown Menu](/januna/dropdown-menu).",
  usage: `<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Service</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink href="/floor-plan">Floor plan</NavigationMenuLink>
        <NavigationMenuLink href="/waitlist">Waitlist</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuLink href="/guests" className={navigationMenuTriggerStyle()}>
        Guests
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
      text: "A `NavigationMenuLink` in the row already has the trigger's corners, type and hover; `navigationMenuTriggerStyle()` also gives it the trigger's 40px height. `active` marks the page you are on with the pressed shade.",
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
  render={<Link to="/waitlist" />}
  active={pathname === "/waitlist"}
  closeOnClick
>
  Waitlist
</NavigationMenuLink>`,
    },
  ],
  api: [
    {
      name: "NavigationMenu",
      text: "The root. It renders the popup the panels open in itself, on the menu material 8px below the row, through `NavigationMenuPositioner`.",
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
      name: "NavigationMenuLink",
      text: "In the row, Button 14 with 12px corners. Inside a panel it takes the full width, Label 14 and 8px corners.",
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
