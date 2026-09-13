import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@ovadev-gmbh/ui-internal";

const tenants = ["acme-logistics", "alpenrad-gmbh", "bergwerk-ag", "helvetia-labs", "nordlicht-energie", "seeland-foods"];

export default function SidebarSearch() {
  const [query, setQuery] = React.useState("");
  const [active, setActive] = React.useState("bergwerk-ag");
  const shown = tenants.filter((slug) => slug.includes(query.trim().toLowerCase()));

  return (
    <SidebarProvider className="h-80 min-h-0 w-full max-w-2xl overflow-hidden border border-divider">
      <Sidebar collapsible="none" className="border-r border-divider">
        <SidebarHeader>
          <SidebarInput
            aria-label="Filter tenants"
            placeholder="Filter tenants"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Tenants</SidebarGroupLabel>
            {shown.length ? (
              <SidebarMenu>
                {shown.map((slug) => (
                  <SidebarMenuItem key={slug}>
                    <SidebarMenuButton isActive={slug === active} onClick={() => setActive(slug)}>
                      <span className="text-label-13-mono">{slug}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            ) : (
              <p className="px-2 py-1.5 text-label-13 text-content-secondary">No tenant matches "{query}".</p>
            )}
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <SidebarInset className="p-4">
        <h2 className="text-heading-16">{active}</h2>
      </SidebarInset>
    </SidebarProvider>
  );
}
