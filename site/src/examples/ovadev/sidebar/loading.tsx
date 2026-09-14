import * as React from "react";
import {
  Button,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarProvider,
} from "@ovadev-gmbh/ui-ovadev";
import { Building2Icon } from "lucide-react";

const tenants = ["acme-logistics", "bergwerk-ag", "helvetia-labs", "nordlicht-energie"];

export default function SidebarLoading() {
  const [loading, setLoading] = React.useState(true);

  // Stands in for the request that loads the tenants.
  React.useEffect(() => {
    if (!loading) return;
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, [loading]);

  return (
    <SidebarProvider className="h-80 min-h-0 w-full max-w-2xl overflow-hidden border border-divider">
      <Sidebar collapsible="none" className="border-r border-divider">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Tenants</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu aria-busy={loading}>
                {loading
                  ? tenants.map((slug) => (
                      <SidebarMenuItem key={slug}>
                        <SidebarMenuSkeleton showIcon />
                      </SidebarMenuItem>
                    ))
                  : tenants.map((slug) => (
                      <SidebarMenuItem key={slug}>
                        <SidebarMenuButton>
                          <Building2Icon />
                          <span className="text-label-13-mono">{slug}</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <SidebarInset className="items-start p-4">
        <Button variant="outline" size="sm" disabled={loading} onClick={() => setLoading(true)}>
          Reload tenants
        </Button>
      </SidebarInset>
    </SidebarProvider>
  );
}
