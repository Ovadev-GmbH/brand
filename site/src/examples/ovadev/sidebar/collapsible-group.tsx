import * as React from "react";
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
} from "@ovadev-gmbh/ui-ovadev";
import { ChevronDownIcon } from "lucide-react";

const groups = [
  { label: "Billing", open: true, pages: ["Invoices", "Payments", "Credit notes"] },
  { label: "Platform", open: false, pages: ["Deployments", "Regions", "Incidents"] },
  { label: "Access", open: false, pages: ["Team members", "API keys", "Audit log"] },
];

export default function SidebarCollapsibleGroup() {
  const [active, setActive] = React.useState("Payments");

  return (
    <SidebarProvider className="h-96 min-h-0 w-full max-w-2xl overflow-hidden border border-divider">
      <Sidebar collapsible="none" className="border-r border-divider">
        <SidebarContent>
          {groups.map((group) => (
            <Collapsible key={group.label} defaultOpen={group.open}>
              <SidebarGroup>
                <SidebarGroupLabel
                  render={<CollapsibleTrigger />}
                  className="w-full hover:bg-surface-hover hover:text-content-primary"
                >
                  {group.label}
                  <ChevronDownIcon className="ml-auto transition-transform duration-fast ease-brand in-data-panel-open:rotate-180" />
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
