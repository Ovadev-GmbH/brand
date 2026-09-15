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
  SidebarProvider,
} from "@ovadev-gmbh/ui-ticketova";
import { BuildingsIcon, ReceiptIcon, RocketIcon } from "@ovadev-gmbh/ui-ticketova/icons";

const variants = ["sidebar", "floating", "inset"] as const;

const pages = [
  { title: "Tenants", icon: BuildingsIcon },
  { title: "Invoices", icon: ReceiptIcon },
  { title: "Deployments", icon: RocketIcon },
];

export default function SidebarVariant() {
  const [variant, setVariant] = React.useState<(typeof variants)[number]>("floating");
  const [active, setActive] = React.useState("Invoices");

  return (
    <div className="flex w-full max-w-2xl flex-col gap-3">
      <div role="group" aria-label="Variant" className="flex gap-2">
        {variants.map((v) => (
          <Button key={v} size="sm" variant={v === variant ? "default" : "outline"} aria-pressed={v === variant} onClick={() => setVariant(v)}>
            {v}
          </Button>
        ))}
      </div>
      {/* The sidebar is fixed to the viewport by default; absolute keeps it in this box. */}
      <SidebarProvider className="relative h-80 min-h-0 overflow-hidden border border-divider">
        <Sidebar variant={variant} className="absolute h-full">
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Operations</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {pages.map((page) => (
                    <SidebarMenuItem key={page.title}>
                      <SidebarMenuButton isActive={page.title === active} onClick={() => setActive(page.title)}>
                        <page.icon />
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
