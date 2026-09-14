import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@ovadev-gmbh/ui-ovadev";

const pages = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About us", active: true },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
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
