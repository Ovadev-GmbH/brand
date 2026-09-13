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
} from "@ovadev-gmbh/ui-internal";
import { KeyIcon, PlusIcon } from "lucide-react";

export default function SidebarGroupActionExample() {
  const [keys, setKeys] = React.useState(["ci-deploy", "billing-export", "support-readonly"]);
  const [active, setActive] = React.useState("ci-deploy");

  function createKey() {
    const name = `untitled-${keys.length + 1}`;
    setKeys((current) => [...current, name]);
    setActive(name);
  }

  return (
    <SidebarProvider className="h-80 min-h-0 w-full max-w-2xl overflow-hidden border border-divider">
      <Sidebar collapsible="none" className="border-r border-divider">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>API keys</SidebarGroupLabel>
            <SidebarGroupAction aria-label="Create API key" title="Create API key" onClick={createKey}>
              <PlusIcon />
            </SidebarGroupAction>
            <SidebarGroupContent>
              <SidebarMenu>
                {keys.map((key) => (
                  <SidebarMenuItem key={key}>
                    <SidebarMenuButton isActive={key === active} onClick={() => setActive(key)}>
                      <KeyIcon />
                      <span className="text-label-13-mono">{key}</span>
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
