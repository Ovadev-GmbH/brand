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
    heading: "Receivables",
    links: [
      { href: "#invoices", name: "Invoices", detail: "18 open, CHF 24'310.00" },
      { href: "#reminders", name: "Reminders", detail: "4 due today" },
      { href: "#credit-notes", name: "Credit notes", detail: "2 this month" },
    ],
  },
  {
    heading: "Catalogue",
    links: [
      { href: "#plans", name: "Plans", detail: "Starter, Team, Scale" },
      { href: "#add-ons", name: "Add-ons", detail: "Extra seats, SSO" },
      { href: "#tax-rates", name: "Tax rates", detail: "CH 8.1%, EU reverse charge" },
    ],
  },
];

export default function NavigationMenuColumns() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Billing</NavigationMenuTrigger>
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
          <NavigationMenuLink href="#payouts" className={navigationMenuTriggerStyle()}>
            Payouts
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
