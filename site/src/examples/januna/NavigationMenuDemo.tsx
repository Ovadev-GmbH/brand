import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@ovadev-gmbh/ui-januna";

const product = [
  {
    title: "Bookings",
    description: "Online, phone and walk-in reservations in one book.",
  },
  {
    title: "Floor plan",
    description: "Tables, sections and combinations for every shift.",
  },
  {
    title: "Guests",
    description: "Profiles, preferences and no-show history.",
  },
];

const resources = [
  { title: "Help centre", description: "Guides for hosts and managers." },
  { title: "Shift playbook", description: "How busy restaurants run Januna." },
  { title: "Changelog", description: "What shipped this month." },
];

function Links({ entries }: { entries: typeof product }) {
  return (
    <ul className="grid w-72 gap-1">
      {entries.map((entry) => (
        <li key={entry.title}>
          <NavigationMenuLink href="#" className="flex-col items-start gap-0.5">
            <span className="text-label-14 font-medium">{entry.title}</span>
            <span className="text-label-12 text-content-secondary">{entry.description}</span>
          </NavigationMenuLink>
        </li>
      ))}
    </ul>
  );
}

export default function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Product</NavigationMenuTrigger>
          <NavigationMenuContent>
            <Links entries={product} />
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <Links entries={resources} />
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#">Pricing</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
