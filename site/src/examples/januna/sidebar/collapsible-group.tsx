import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
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
} from "@ovadev-gmbh/ui-januna";

const groups = [
  { label: "Tonight", open: true, pages: ["Bookings", "Waitlist", "Floor plan"] },
  { label: "Guests", open: false, pages: ["Guest list", "Messages", "No-shows"] },
  { label: "Settings", open: false, pages: ["Opening hours", "Deposits", "Team"] },
];

export default function SidebarCollapsibleGroup() {
  const [active, setActive] = useState("Waitlist");

  return (
    <SidebarProvider className="h-96 min-h-0 w-full max-w-2xl overflow-hidden material-base">
      <Sidebar collapsible="none">
        <SidebarContent>
          {groups.map((group) => (
            <Collapsible key={group.label} defaultOpen={group.open}>
              <SidebarGroup>
                <SidebarGroupLabel
                  render={<CollapsibleTrigger />}
                  className="w-full hover:bg-surface-hover hover:text-content-primary"
                >
                  {group.label}
                  <HugeiconsIcon
                    icon={ArrowDown01Icon}
                    strokeWidth={2}
                    className="ml-auto transition-transform duration-fast ease-brand in-data-panel-open:rotate-180"
                  />
                </SidebarGroupLabel>
                <CollapsibleContent>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      {group.pages.map((page) => (
                        <SidebarMenuItem key={page}>
                          <SidebarMenuButton isActive={page === active} onClick={() => setActive(page)}>
                            <span>{page}</span>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </CollapsibleContent>
              </SidebarGroup>
            </Collapsible>
          ))}
        </SidebarContent>
      </Sidebar>
      <SidebarInset className="p-4">
        <h2 className="text-heading-16">{active}</h2>
      </SidebarInset>
    </SidebarProvider>
  );
}
