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
import { WavesIcon } from "lucide-react";

const customers = ["badi-tuerlersee", "hallenbad-baar", "strandbad-zug", "freibad-cham"];

export default function SidebarLoading() {
  const [loading, setLoading] = React.useState(true);

  // Stands in for the request that loads the customers.
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
            <SidebarGroupLabel>Customers</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu aria-busy={loading}>
                {loading
                  ? customers.map((slug) => (
                      <SidebarMenuItem key={slug}>
                        <SidebarMenuSkeleton showIcon />
                      </SidebarMenuItem>
                    ))
                  : customers.map((slug) => (
                      <SidebarMenuItem key={slug}>
                        <SidebarMenuButton>
                          <WavesIcon />
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
          Reload customers
        </Button>
      </SidebarInset>
    </SidebarProvider>
  );
}
