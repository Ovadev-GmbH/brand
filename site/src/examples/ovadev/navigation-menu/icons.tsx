import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@ovadev-gmbh/ui-ovadev";
import { ActivityIcon, BriefcaseIcon, FileTextIcon, NewspaperIcon, TicketIcon, UtensilsIcon } from "lucide-react";

const sections = [
  {
    label: "Products",
    links: [
      { href: "#ticketova", icon: TicketIcon, name: "TICKETOVA", detail: "Shop, admission control, reporting" },
      { href: "#januna", icon: UtensilsIcon, name: "JANUNA", detail: "Till, kitchen displays, orders" },
      { href: "#status", icon: ActivityIcon, name: "Status", detail: "All services operational" },
    ],
  },
  {
    label: "Company",
    links: [
      { href: "#blog", icon: NewspaperIcon, name: "Blog", detail: "12 posts, German and English" },
      { href: "#jobs", icon: BriefcaseIcon, name: "Jobs", detail: "1 open position in Baar" },
      { href: "#press", icon: FileTextIcon, name: "Press kit", detail: "Logos, photos, facts" },
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
