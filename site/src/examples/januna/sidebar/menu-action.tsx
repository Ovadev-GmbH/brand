import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { MoreHorizontalIcon } from "@hugeicons/core-free-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@ovadev-gmbh/ui-januna";

const views = ["Tonight", "Large parties", "Deposits due", "No-shows this week"];

export default function SidebarMenuActionExample() {
  const [active, setActive] = useState("Tonight");

  return (
    <SidebarProvider className="h-80 min-h-0 w-full max-w-2xl overflow-hidden material-base">
      <Sidebar collapsible="none">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Saved views</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {views.map((view) => (
                  <SidebarMenuItem key={view}>
                    <SidebarMenuButton isActive={view === active} onClick={() => setActive(view)}>
                      <span>{view}</span>
                    </SidebarMenuButton>
                    <DropdownMenu>
                      <DropdownMenuTrigger render={<SidebarMenuAction showOnHover aria-label={`Actions for ${view}`} />}>
                        <HugeiconsIcon icon={MoreHorizontalIcon} strokeWidth={2} />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent side="right" align="start" className="w-48">
                        <DropdownMenuItem>Rename view</DropdownMenuItem>
                        <DropdownMenuItem>Duplicate view</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem variant="destructive">Delete view</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <SidebarInset className="p-4">
        <h2 className="text-heading-16">{active}</h2>
      </SidebarInset>
    </SidebarProvider>
  );
}
