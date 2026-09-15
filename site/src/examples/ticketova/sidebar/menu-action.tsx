import * as React from "react";
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
} from "@ovadev-gmbh/ui-ticketova";
import { DotsThreeIcon, RocketIcon } from "@ovadev-gmbh/ui-ticketova/icons";

const deployments = ["d-8f3a21c", "d-77b0e19", "d-5c2d4a8", "d-41e9f02"];

export default function SidebarMenuActionExample() {
  const [active, setActive] = React.useState("d-8f3a21c");

  return (
    <SidebarProvider className="h-80 min-h-0 w-full max-w-2xl overflow-hidden border border-divider">
      <Sidebar collapsible="none" className="border-r border-divider">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Deployments</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {deployments.map((id) => (
                  <SidebarMenuItem key={id}>
                    <SidebarMenuButton isActive={id === active} onClick={() => setActive(id)}>
                      <RocketIcon />
                      <span className="text-label-13-mono">{id}</span>
                    </SidebarMenuButton>
                    <DropdownMenu>
                      <DropdownMenuTrigger render={<SidebarMenuAction showOnHover aria-label={`Actions for ${id}`} />}>
                        <DotsThreeIcon />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent side="right" align="start" className="w-48">
                        <DropdownMenuItem>Open logs</DropdownMenuItem>
                        <DropdownMenuItem>Promote to production</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem variant="destructive">Roll back</DropdownMenuItem>
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
        <h2 className="text-heading-16">Deployment {active}</h2>
      </SidebarInset>
    </SidebarProvider>
  );
}
