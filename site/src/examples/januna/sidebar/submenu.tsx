import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ChartLineData01Icon, RestaurantTableIcon } from "@hugeicons/core-free-icons";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
} from "@ovadev-gmbh/ui-januna";

const sections = [
  { title: "Floor", icon: RestaurantTableIcon, pages: ["Dining room", "Terrace", "Bar"] },
  { title: "Reports", icon: ChartLineData01Icon, pages: ["Covers", "Deposits", "No-shows"] },
];

export default function SidebarSubmenu() {
  const [active, setActive] = useState("Terrace");

  return (
    <SidebarProvider className="h-80 min-h-0 w-full max-w-2xl overflow-hidden material-base">
      <Sidebar collapsible="none">
        <SidebarContent>
          <SidebarGroup>
            <SidebarMenu>
              {sections.map((section) => (
                <SidebarMenuItem key={section.title}>
                  <SidebarMenuButton>
                    <HugeiconsIcon icon={section.icon} strokeWidth={2} />
                    <span>{section.title}</span>
                  </SidebarMenuButton>
                  <SidebarMenuSub>
                    {section.pages.map((page) => (
                      <SidebarMenuSubItem key={page}>
                        <SidebarMenuSubButton
                          render={<button type="button" />}
                          isActive={page === active}
                          onClick={() => setActive(page)}
                        >
                          <span>{page}</span>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <SidebarInset className="p-4">
        <h2 className="text-heading-16">{active}</h2>
      </SidebarInset>
    </SidebarProvider>
  );
}
