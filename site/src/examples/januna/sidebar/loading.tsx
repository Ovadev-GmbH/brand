import { useEffect, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { RestaurantTableIcon } from "@hugeicons/core-free-icons";
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
} from "@ovadev-gmbh/ui-januna";

const sections = ["Dining room", "Terrace", "Bar", "Private room"];

export default function SidebarLoading() {
  const [loading, setLoading] = useState(true);

  // Stands in for the request that loads the floor sections.
  useEffect(() => {
    if (!loading) return;
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, [loading]);

  return (
    <SidebarProvider className="h-80 min-h-0 w-full max-w-2xl overflow-hidden material-base">
      <Sidebar collapsible="none">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Floor sections</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu aria-busy={loading}>
                {sections.map((section) => (
                  <SidebarMenuItem key={section}>
                    {loading ? (
                      <SidebarMenuSkeleton showIcon />
                    ) : (
                      <SidebarMenuButton>
                        <HugeiconsIcon icon={RestaurantTableIcon} strokeWidth={2} />
                        <span>{section}</span>
                      </SidebarMenuButton>
                    )}
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <SidebarInset className="items-start p-4">
        <Button variant="outline" size="sm" disabled={loading} onClick={() => setLoading(true)}>
          Reload floor sections
        </Button>
      </SidebarInset>
    </SidebarProvider>
  );
}
