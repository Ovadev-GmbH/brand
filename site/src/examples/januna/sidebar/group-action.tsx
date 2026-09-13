import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Add01Icon } from "@hugeicons/core-free-icons";
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
} from "@ovadev-gmbh/ui-januna";

// Stands in for the name the manager gives each new section.
const toAdd = ["Garden", "Private room", "Wine cellar"];

export default function SidebarGroupActionExample() {
  const [sections, setSections] = useState(["Dining room", "Terrace", "Bar"]);
  const [active, setActive] = useState("Terrace");
  const next = toAdd[sections.length - 3];

  function addSection() {
    if (!next) return;
    setSections((current) => [...current, next]);
    setActive(next);
  }

  return (
    <SidebarProvider className="h-80 min-h-0 w-full max-w-2xl overflow-hidden material-base">
      <Sidebar collapsible="none">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Floor sections</SidebarGroupLabel>
            <SidebarGroupAction aria-label="Add floor section" title="Add floor section" disabled={!next} onClick={addSection}>
              <HugeiconsIcon icon={Add01Icon} strokeWidth={2} />
            </SidebarGroupAction>
            <SidebarGroupContent>
              <SidebarMenu>
                {sections.map((section) => (
                  <SidebarMenuItem key={section}>
                    <SidebarMenuButton isActive={section === active} onClick={() => setActive(section)}>
                      <span>{section}</span>
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
