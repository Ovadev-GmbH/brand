import { useState } from "react";
import { Building2Icon, SettingsIcon, KeyIcon, ReceiptIcon, RocketIcon, TriangleAlertIcon } from "lucide-react";
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
} from "@ovadev-gmbh/ui-internal";

const items = [
  { title: "Tenants", icon: Building2Icon },
  { title: "Invoices", icon: ReceiptIcon, badge: "12" },
  { title: "Deployments", icon: RocketIcon },
  { title: "Incidents", icon: TriangleAlertIcon, badge: "1" },
  { title: "API keys", icon: KeyIcon },
  { title: "Settings", icon: SettingsIcon },
];

export default function SidebarDemo() {
  const [active, setActive] = useState("Invoices");

  return (
    <SidebarProvider style={{ minHeight: 0 }} className="h-72 w-full max-w-xl overflow-hidden border">
      <Sidebar collapsible="none" className="border-r">
        <SidebarHeader>
          <div className="px-2 py-1 text-label-13">Ovadev Internal</div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Operations</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      isActive={active === item.title}
                      onClick={() => setActive(item.title)}
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                    {item.badge ? (
                      <SidebarMenuBadge className="text-label-12-mono">{item.badge}</SidebarMenuBadge>
                    ) : null}
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <div className="px-2 py-1 text-label-12 text-content-secondary">r.markant, admin</div>
        </SidebarFooter>
      </Sidebar>
      <main className="flex flex-1 items-center justify-center bg-surface-primary p-4">
        <span className="text-label-13 text-content-secondary">{active}</span>
      </main>
    </SidebarProvider>
  );
}
