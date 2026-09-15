import * as React from "react";
import {
  Label,
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
  SidebarTrigger,
  Switch,
  useSidebar,
} from "@ovadev-gmbh/ui-ticketova";
import { SirenIcon, WarningIcon } from "@ovadev-gmbh/ui-ticketova/icons";

function Header() {
  const { state } = useSidebar();

  return (
    <header className="flex h-12 items-center gap-2 border-b border-divider px-3">
      <SidebarTrigger />
      <h2 className="text-label-14">Incidents</h2>
      <span className="ml-auto text-label-12-mono text-content-secondary">{state}</span>
    </header>
  );
}

export default function SidebarControlled() {
  const [open, setOpen] = React.useState(true);

  return (
    <div className="flex w-full max-w-2xl flex-col gap-3">
      <div className="flex items-center gap-3">
        <Switch id="sidebar-controlled-open" checked={open} onCheckedChange={setOpen} />
        <Label htmlFor="sidebar-controlled-open">Show navigation</Label>
      </div>
      {/* The sidebar is fixed to the viewport by default; absolute keeps it in this box. */}
      <SidebarProvider open={open} onOpenChange={setOpen} className="relative h-80 min-h-0 overflow-hidden border border-divider">
        <Sidebar className="absolute h-full">
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Operations</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton isActive>
                      <SirenIcon />
                      <span>Incidents</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <WarningIcon />
                      <span>Alerts</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        <SidebarInset>
          <Header />
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
