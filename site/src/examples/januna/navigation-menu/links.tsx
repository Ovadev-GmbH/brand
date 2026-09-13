import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@ovadev-gmbh/ui-januna";

const pages = [
  { href: "#tonight", label: "Tonight" },
  { href: "#bookings", label: "Bookings", active: true },
  { href: "#guests", label: "Guests" },
  { href: "#reports", label: "Reports" },
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
