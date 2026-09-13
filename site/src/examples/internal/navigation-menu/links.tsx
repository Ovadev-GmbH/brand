import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@ovadev-gmbh/ui-internal";

const pages = [
  { href: "#tenants", label: "Tenants" },
  { href: "#invoices", label: "Invoices", active: true },
  { href: "#deployments", label: "Deployments" },
  { href: "#audit-log", label: "Audit log" },
];

export default function NavigationMenuLinks() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {pages.map((page) => (
          <NavigationMenuItem key={page.href}>
            <NavigationMenuLink href={page.href} active={page.active} className={navigationMenuTriggerStyle()}>
              {page.label}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
