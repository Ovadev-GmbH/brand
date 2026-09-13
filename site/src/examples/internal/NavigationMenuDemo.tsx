import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@ovadev-gmbh/ui-internal";

const sections = [
  {
    label: "Tenants",
    links: [
      { href: "#tenants", name: "All tenants" },
      { href: "#trials", name: "Trials" },
      { href: "#suspended", name: "Suspended" },
    ],
  },
  {
    label: "Billing",
    links: [
      { href: "#invoices", name: "Invoices" },
      { href: "#plans", name: "Plans" },
      { href: "#payouts", name: "Payouts" },
    ],
  },
];

export default function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {sections.map((section) => (
          <NavigationMenuItem key={section.label}>
            <NavigationMenuTrigger>{section.label}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="m-0 grid w-48 list-none gap-0.5 p-0">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <NavigationMenuLink href={link.href}>{link.name}</NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
        <NavigationMenuItem>
          <NavigationMenuLink href="#audit-log" className={navigationMenuTriggerStyle()}>
            Audit log
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
