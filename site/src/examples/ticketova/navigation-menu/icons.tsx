import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@ovadev-gmbh/ui-ticketova";
import { GlobeIcon, KeyIcon, RocketIcon, ScrollIcon, SirenIcon, UsersIcon } from "@ovadev-gmbh/ui-ticketova/icons";

const sections = [
  {
    label: "Operations",
    links: [
      { href: "#deployments", icon: RocketIcon, name: "Deployments", detail: "3 running, 1 queued" },
      { href: "#regions", icon: GlobeIcon, name: "Regions", detail: "ch-zrh-1, ch-gva-1, eu-central-1" },
      { href: "#incidents", icon: SirenIcon, name: "Incidents", detail: "None open" },
    ],
  },
  {
    label: "Access",
    links: [
      { href: "#team", icon: UsersIcon, name: "Team", detail: "14 members, 2 invited" },
      { href: "#api-keys", icon: KeyIcon, name: "API keys", detail: "1 expires this week" },
      { href: "#audit-log", icon: ScrollIcon, name: "Audit log", detail: "Kept for 400 days" },
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
                {section.links.map(({ href, icon: Icon, name, detail }) => (
                  <li key={href}>
                    <NavigationMenuLink href={href} className="items-start gap-2.5">
                      <Icon className="mt-0.5 text-content-secondary" />
                      <span className="flex flex-col gap-0.5">
                        <span className="text-label-13">{name}</span>
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
