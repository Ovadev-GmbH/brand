import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  BubbleChatIcon,
  Calendar03Icon,
  Clock01Icon,
  RestaurantTableIcon,
  UserGroupIcon,
} from "@hugeicons/core-free-icons";
import {
  Separator,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@ovadev-gmbh/ui-januna";

const groups = [
  {
    label: "Tonight",
    pages: [
      { title: "Bookings", icon: Calendar03Icon, badge: "42" },
      { title: "Floor plan", icon: RestaurantTableIcon },
      { title: "Waitlist", icon: Clock01Icon, badge: "3" },
    ],
  },
  {
    label: "Guests",
    pages: [
      { title: "Guest book", icon: UserGroupIcon },
      { title: "Messages", icon: BubbleChatIcon, badge: "2" },
    ],
  },
];

export default function SidebarDemo() {
  const [active, setActive] = useState("Bookings");

  return (
    // The sidebar is fixed to the viewport by default; absolute keeps it in this box.
    <SidebarProvider className="relative h-96 min-h-0 w-full max-w-2xl overflow-hidden material-base">
      <Sidebar className="absolute h-full">
        <SidebarHeader>
          <span className="px-3 py-1 text-heading-14">Trattoria Sole</span>
        </SidebarHeader>
        <SidebarContent>
          {groups.map((group) => (
            <SidebarGroup key={group.label}>
              <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {group.pages.map((page) => (
                    <SidebarMenuItem key={page.title}>
                      <SidebarMenuButton isActive={page.title === active} onClick={() => setActive(page.title)}>
                        <HugeiconsIcon icon={page.icon} strokeWidth={2} />
                        <span>{page.title}</span>
                      </SidebarMenuButton>
                      {page.badge ? <SidebarMenuBadge>{page.badge}</SidebarMenuBadge> : null}
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        <header className="flex h-14 items-center gap-2 border-b border-divider px-4">
          <SidebarTrigger />
          <Separator orientation="vertical" className="data-vertical:h-4 data-vertical:self-auto" />
          <h2 className="text-heading-16">{active}</h2>
        </header>
      </SidebarInset>
    </SidebarProvider>
  );
}
