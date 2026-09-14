import { useState } from "react";
import { Building2Icon, FileMinusIcon, ReceiptIcon, RocketIcon, TriangleAlertIcon } from "lucide-react";
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
} from "@ovadev-gmbh/ui-ovadev";

const groups = [
  {
    label: "Operations",
    pages: [
      { title: "Tenants", icon: Building2Icon },
      { title: "Deployments", icon: RocketIcon },
      { title: "Incidents", icon: TriangleAlertIcon, badge: "1" },
    ],
  },
  {
    label: "Billing",
    pages: [
      { title: "Invoices", icon: ReceiptIcon, badge: "12" },
      { title: "Credit notes", icon: FileMinusIcon },
    ],
  },
];

export default function SidebarDemo() {
  const [active, setActive] = useState("Invoices");

  return (
    // The sidebar is fixed to the viewport by default; absolute keeps it in this box.
    <SidebarProvider className="relative h-96 min-h-0 w-full max-w-2xl overflow-hidden material-base">
      <Sidebar className="absolute h-full">
        <SidebarHeader>
          <span className="px-2 py-1 text-label-13">Ovadev Internal</span>
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
                        <page.icon />
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
        <header className="flex h-12 items-center gap-2 border-b border-divider px-3">
          <SidebarTrigger />
          <Separator orientation="vertical" className="data-vertical:h-4 data-vertical:self-auto" />
          <h2 className="text-label-13">{active}</h2>
        </header>
      </SidebarInset>
    </SidebarProvider>
  );
}
