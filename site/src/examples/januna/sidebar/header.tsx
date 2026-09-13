import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Calendar03Icon, RestaurantTableIcon, UnfoldMoreIcon } from "@hugeicons/core-free-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@ovadev-gmbh/ui-januna";

const restaurants = [
  { id: "sole-zurich", name: "Trattoria Sole", city: "Zurich" },
  { id: "sole-bern", name: "Trattoria Sole", city: "Bern" },
  { id: "bar-sole", name: "Bar Sole", city: "Zurich" },
];

export default function SidebarWithHeader() {
  const [id, setId] = useState("sole-zurich");
  const current = restaurants.find((r) => r.id === id) ?? restaurants[0]!;

  return (
    <SidebarProvider className="h-80 min-h-0 w-full max-w-2xl overflow-hidden material-base">
      <Sidebar collapsible="none">
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger render={<SidebarMenuButton size="lg" aria-label="Restaurant" />}>
                  <span className="flex min-w-0 flex-1 flex-col">
                    <span className="truncate text-label-14">{current.name}</span>
                    <span className="truncate text-label-12 text-content-secondary">{current.city}</span>
                  </span>
                  <HugeiconsIcon icon={UnfoldMoreIcon} strokeWidth={2} />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuGroup>
                    <DropdownMenuLabel>Restaurant</DropdownMenuLabel>
                    <DropdownMenuRadioGroup value={id} onValueChange={setId}>
                      {restaurants.map((r) => (
                        <DropdownMenuRadioItem key={r.id} value={r.id}>
                          {r.name}, {r.city}
                        </DropdownMenuRadioItem>
                      ))}
                    </DropdownMenuRadioGroup>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Tonight</SidebarGroupLabel>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton isActive>
                  <HugeiconsIcon icon={Calendar03Icon} strokeWidth={2} />
                  <span>Bookings</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <HugeiconsIcon icon={RestaurantTableIcon} strokeWidth={2} />
                  <span>Tables</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <SidebarInset className="gap-1 p-4">
        <h2 className="text-heading-16">Bookings</h2>
        <p className="text-label-14 text-content-secondary">
          {current.name}, {current.city}
        </p>
      </SidebarInset>
    </SidebarProvider>
  );
}
