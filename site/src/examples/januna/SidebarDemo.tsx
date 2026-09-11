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
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@ovadev-gmbh/ui-januna";

const items = [
  { title: "Overview", icon: Home01Icon },
  { title: "Bookings", icon: Calendar03Icon, badge: "42" },
  { title: "Tables", icon: RestaurantTableIcon },
  { title: "Guests", icon: UserGroupIcon },
  { title: "Settings", icon: Settings01Icon },
];

export default function SidebarDemo() {
  const [active, setActive] = useState("Bookings");

  return (
    <SidebarProvider
      style={{ minHeight: 0 }}
      className="h-80 w-full max-w-2xl overflow-hidden rounded-2xl border"
    >
      <Sidebar collapsible="none" className="border-r">
        <SidebarHeader>
          <div className="px-3 py-1 font-heading text-sm font-medium">Januna</div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Restaurant</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      isActive={active === item.title}
                      onClick={() => setActive(item.title)}
                    >
                      <HugeiconsIcon icon={item.icon} strokeWidth={2} />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                    {item.badge ? <SidebarMenuBadge>{item.badge}</SidebarMenuBadge> : null}
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <div className="px-3 py-1 text-xs text-muted-foreground">Trattoria Sole, Zurich</div>
        </SidebarFooter>
      </Sidebar>
      <main className="flex flex-1 items-center justify-center bg-background p-6">
        <span className="text-sm text-muted-foreground">{active}</span>
      </main>
    </SidebarProvider>
  );
}
