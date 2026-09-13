import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { Calendar03Icon, Clock01Icon, LockIcon, PrinterIcon, Table01Icon, UserGroupIcon } from "@hugeicons/core-free-icons";

const sections = [
  {
    label: "Service",
    links: [
      { href: "#floor-plan", icon: Table01Icon, name: "Floor plan", detail: "42 tables in 3 sections" },
      { href: "#waitlist", icon: Clock01Icon, name: "Waitlist", detail: "4 parties waiting" },
      { href: "#run-sheet", icon: PrinterIcon, name: "Run sheet", detail: "24 bookings tonight" },
    ],
  },
  {
    label: "Team",
    links: [
      { href: "#shifts", icon: Calendar03Icon, name: "Shifts", detail: "Lunch and dinner, 7 days" },
      { href: "#servers", icon: UserGroupIcon, name: "Servers", detail: "9 on the rota this week" },
      { href: "#permissions", icon: LockIcon, name: "Permissions", detail: "Who can refund deposits" },
    ],
  },
];

export default function NavigationMenuIcons() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {sections.map((section) => (
          <NavigationMenuItem key={section.label}>
            <NavigationMenuTrigger>{section.label}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="m-0 grid w-72 list-none gap-0.5 p-0">
                {section.links.map(({ href, icon, name, detail }) => (
                  <li key={href}>
                    <NavigationMenuLink href={href} className="items-start gap-3">
                      <HugeiconsIcon icon={icon} strokeWidth={2} className="mt-0.5 text-content-secondary" />
                      <span className="flex flex-col gap-0.5">
                        <span className="text-label-14">{name}</span>
                        <span className="text-copy-13 text-content-secondary">{detail}</span>
                      </span>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
