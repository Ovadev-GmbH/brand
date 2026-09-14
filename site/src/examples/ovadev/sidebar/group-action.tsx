import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@ovadev-gmbh/ui-ovadev";
import { FileTextIcon, PlusIcon } from "lucide-react";

export default function SidebarGroupActionExample() {
  const [drafts, setDrafts] = React.useState(["season-2026-in-numbers", "why-a-till-of-our-own", "januna-kitchen-display"]);
  const [active, setActive] = React.useState("season-2026-in-numbers");

  function createDraft() {
    const name = `untitled-${drafts.length + 1}`;
    setDrafts((current) => [...current, name]);
    setActive(name);
  }

  return (
    <SidebarProvider className="h-80 min-h-0 w-full max-w-2xl overflow-hidden border border-divider">
      <Sidebar collapsible="none" className="border-r border-divider">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Drafts</SidebarGroupLabel>
            <SidebarGroupAction aria-label="New draft" title="New draft" onClick={createDraft}>
              <PlusIcon />
            </SidebarGroupAction>
            <SidebarGroupContent>
              <SidebarMenu>
                {drafts.map((draft) => (
                  <SidebarMenuItem key={draft}>
                    <SidebarMenuButton isActive={draft === active} onClick={() => setActive(draft)}>
                      <FileTextIcon />
                      <span className="text-label-13-mono">{draft}</span>
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
  );
}
