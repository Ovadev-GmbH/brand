import * as React from "react";
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
} from "@ovadev-gmbh/ui-ovadev";
import { Building2Icon, KeyIcon, ReceiptIcon, RocketIcon, ScrollTextIcon } from "lucide-react";

const pages = [
  { title: "Tenants", icon: Building2Icon },
  { title: "Invoices", icon: ReceiptIcon },
  { title: "Deployments", icon: RocketIcon },
  { title: "API keys", icon: KeyIcon },
  { title: "Audit log", icon: ScrollTextIcon },
];

export default function SidebarCollapsible() {
  const [active, setActive] = React.useState("Deployments");

  return (
    // The sidebar is fixed to the viewport by default; absolute keeps it in this box.
    <SidebarProvider className="relative h-80 min-h-0 w-full max-w-2xl overflow-hidden border border-divider">
      <Sidebar collapsible="icon" className="absolute h-full">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Operations</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {pages.map((page) => (
                  <SidebarMenuItem key={page.title}>
                    <SidebarMenuButton
                      tooltip={page.title}
                      isActive={page.title === active}
                      onClick={() => setActive(page.title)}
                    >
                      <page.icon />
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
