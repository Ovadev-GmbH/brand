import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Calendar03Icon,
  Home01Icon,
  RestaurantTableIcon,
  Settings01Icon,
  UserGroupIcon,
} from "@hugeicons/core-free-icons";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@ovadev-gmbh/ui-januna";

const pages = [
  { title: "Overview", icon: Home01Icon },
  { title: "Bookings", icon: Calendar03Icon },
  { title: "Tables", icon: RestaurantTableIcon },
  { title: "Guests", icon: UserGroupIcon },
  { title: "Settings", icon: Settings01Icon },
];

export default function SidebarCollapsible() {
  const [active, setActive] = useState("Bookings");

  return (
    // The sidebar is fixed to the viewport by default; absolute keeps it in this box.
    <SidebarProvider className="relative h-80 min-h-0 w-full max-w-2xl overflow-hidden material-base">
      <Sidebar collapsible="icon" className="absolute h-full">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Restaurant</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {pages.map((page) => (
                  <SidebarMenuItem key={page.title}>
                    <SidebarMenuButton
                      tooltip={page.title}
                      isActive={page.title === active}
                      onClick={() => setActive(page.title)}
                    >
                      <HugeiconsIcon icon={page.icon} strokeWidth={2} />
                      <span>{page.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarRail />
      </Sidebar>
      <SidebarInset>
        <header className="flex h-12 items-center gap-2 border-b border-divider px-3">
          <SidebarTrigger />
          <h2 className="text-label-14">{active}</h2>
        </header>
      </SidebarInset>
    </SidebarProvider>
  );
}
