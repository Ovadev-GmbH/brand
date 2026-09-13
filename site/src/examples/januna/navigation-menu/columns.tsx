import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink } from "@ovadev-gmbh/ui-januna";
import { NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@ovadev-gmbh/ui-januna";

const columns = [
  {
    heading: "Service",
    links: [
      { href: "#covers", name: "Covers", detail: "412 this week" },
      { href: "#no-shows", name: "No-shows", detail: "3 parties, CHF 240.00 charged" },
      { href: "#table-turns", name: "Table turns", detail: "1.8 per table at dinner" },
    ],
  },
  {
    heading: "Money",
    links: [
      { href: "#deposits", name: "Deposits", detail: "CHF 1'240.00 held for tonight" },
      { href: "#refunds", name: "Refunds", detail: "2 this week" },
      { href: "#payouts", name: "Payouts", detail: "Next one on Monday" },
    ],
  },
];

export default function NavigationMenuColumns() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Reports</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[30rem] grid-cols-2 gap-2">
              {columns.map((column) => (
                <div key={column.heading} className="flex flex-col gap-0.5">
                  <span className="px-3 py-1.5 text-label-12 text-content-tertiary">{column.heading}</span>
                  <ul className="m-0 flex list-none flex-col gap-0.5 p-0">
                    {column.links.map((link) => (
                      <li key={link.href}>
                        <NavigationMenuLink href={link.href} className="flex-col items-start gap-0.5">
                          <span className="text-label-14">{link.name}</span>
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
          <NavigationMenuLink href="#settings" className={navigationMenuTriggerStyle()}>
            Settings
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
