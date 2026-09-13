import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Calendar03Icon, RestaurantTableIcon, UserGroupIcon } from "@hugeicons/core-free-icons";
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
  Toggle,
} from "@ovadev-gmbh/ui-januna";

const variants = ["sidebar", "floating", "inset"] as const;

const pages = [
  { title: "Bookings", icon: Calendar03Icon },
  { title: "Tables", icon: RestaurantTableIcon },
  { title: "Guests", icon: UserGroupIcon },
];

export default function SidebarVariant() {
  const [variant, setVariant] = useState<(typeof variants)[number]>("floating");
  const [active, setActive] = useState("Bookings");

  return (
    <div className="flex w-full max-w-2xl flex-col gap-3">
      <div role="group" aria-label="Variant" className="flex gap-2">
        {variants.map((v) => (
          <Toggle key={v} variant="outline" size="sm" pressed={v === variant} onPressedChange={() => setVariant(v)}>
            {v}
          </Toggle>
        ))}
      </div>
      {/* The sidebar is fixed to the viewport by default; absolute keeps it in this box. */}
      <SidebarProvider className="relative h-80 min-h-0 overflow-hidden material-base">
        <Sidebar variant={variant} className="absolute h-full">
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Tonight</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {pages.map((page) => (
                    <SidebarMenuItem key={page.title}>
                      <SidebarMenuButton isActive={page.title === active} onClick={() => setActive(page.title)}>
                        <HugeiconsIcon icon={page.icon} strokeWidth={2} />
                        <span>{page.title}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        <SidebarInset className="p-4">
          <h2 className="text-heading-16">{active}</h2>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
