import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@ovadev-gmbh/ui-ovadev";

const columns = [
  {
    heading: "TICKETOVA",
    links: [
      { href: "#shop", name: "Shop", detail: "Online tickets, season passes, vouchers" },
      { href: "#admission", name: "Admission control", detail: "Turnstiles, scanners, day passes" },
      { href: "#reporting", name: "Reporting", detail: "Visitors and revenue, in real time" },
    ],
  },
  {
    heading: "JANUNA",
    links: [
      { href: "#till", name: "Till", detail: "Coming soon" },
      { href: "#kitchen", name: "Kitchen displays", detail: "Coming soon" },
      { href: "#orders", name: "Orders", detail: "Table, counter, takeaway" },
    ],
  },
];

export default function NavigationMenuColumns() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Products</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[30rem] grid-cols-2 gap-2">
              {columns.map((column) => (
                <div key={column.heading} className="flex flex-col gap-0.5">
                  <span className="px-2.5 py-1.5 text-label-12 text-content-tertiary">{column.heading}</span>
                  <ul className="m-0 flex list-none flex-col gap-0.5 p-0">
                    {column.links.map((link) => (
                      <li key={link.href}>
                        <NavigationMenuLink href={link.href} className="flex-col items-start gap-0.5">
                          <span className="text-label-13">{link.name}</span>
                          <span className="text-copy-13 text-content-secondary">{link.detail}</span>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#contact" className={navigationMenuTriggerStyle()}>
            Contact
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
