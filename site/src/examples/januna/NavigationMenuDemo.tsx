import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@ovadev-gmbh/ui-januna";

const sections = [
  {
    label: "Service",
    links: [
      { href: "#tonight", name: "Tonight's bookings" },
      { href: "#floor-plan", name: "Floor plan" },
      { href: "#waitlist", name: "Waitlist" },
    ],
  },
  {
    label: "Team",
    links: [
      { href: "#shifts", name: "Shifts" },
      { href: "#servers", name: "Servers" },
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
              <ul className="m-0 grid w-56 list-none gap-0.5 p-0">
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
          <NavigationMenuLink href="#guests" className={navigationMenuTriggerStyle()}>
            Guests
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
