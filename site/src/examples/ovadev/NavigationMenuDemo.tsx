import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@ovadev-gmbh/ui-ovadev";

const sections = [
  {
    label: "Products",
    links: [
      { href: "#ticketova", name: "TICKETOVA" },
      { href: "#januna", name: "JANUNA" },
      { href: "#changelog", name: "Changelog" },
    ],
  },
  {
    label: "Company",
    links: [
      { href: "#about", name: "About us" },
      { href: "#blog", name: "Blog" },
      { href: "#brand", name: "Brand" },
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
          <NavigationMenuLink href="#contact" className={navigationMenuTriggerStyle()}>
            Contact
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
