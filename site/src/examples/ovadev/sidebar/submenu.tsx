import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
} from "@ovadev-gmbh/ui-ovadev";
import { NewspaperIcon, PaletteIcon } from "lucide-react";

const sections = [
  { title: "Blog", icon: NewspaperIcon, pages: ["Posts", "Drafts", "Tags"] },
  { title: "Brand", icon: PaletteIcon, pages: ["Mark", "Colour", "Type"] },
];

export default function SidebarSubmenu() {
  const [active, setActive] = React.useState("Drafts");

  return (
    <SidebarProvider className="h-80 min-h-0 w-full max-w-2xl overflow-hidden border border-divider">
      <Sidebar collapsible="none" className="border-r border-divider">
        <SidebarContent>
          <SidebarGroup>
            <SidebarMenu>
              {sections.map((section) => (
                <SidebarMenuItem key={section.title}>
                  <SidebarMenuButton>
                    <section.icon />
                    <span>{section.title}</span>
                  </SidebarMenuButton>
                  <SidebarMenuSub>
                    {section.pages.map((page) => (
                      <SidebarMenuSubItem key={page}>
                        <SidebarMenuSubButton
                          render={<button type="button" />}
                          isActive={page === active}
                          onClick={() => setActive(page)}
                        >
                          <span>{page}</span>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <SidebarInset className="p-4">
        <h2 className="text-heading-16">{active}</h2>
      </SidebarInset>
    </SidebarProvider>
  );
}
