import * as React from "react";
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
} from "@ovadev-gmbh/ui-ovadev";
import { ChevronsUpDownIcon, RocketIcon, ServerIcon } from "lucide-react";

const environments = [
  { name: "production", region: "ch-zrh-1" },
  { name: "staging", region: "eu-central-1" },
  { name: "development", region: "eu-central-1" },
];

export default function SidebarWithHeader() {
  const [environment, setEnvironment] = React.useState("production");
  const current = environments.find((e) => e.name === environment) ?? environments[0]!;

  return (
    <SidebarProvider className="h-80 min-h-0 w-full max-w-2xl overflow-hidden border border-divider">
      <Sidebar collapsible="none" className="border-r border-divider">
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger render={<SidebarMenuButton size="lg" aria-label="Environment" />}>
                  <span className="flex min-w-0 flex-1 flex-col">
                    <span className="truncate text-label-13">{current.name}</span>
                    <span className="truncate text-label-12-mono text-content-secondary">{current.region}</span>
                  </span>
                  <ChevronsUpDownIcon />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuGroup>
                    <DropdownMenuLabel>Environment</DropdownMenuLabel>
                    <DropdownMenuRadioGroup value={environment} onValueChange={setEnvironment}>
                      {environments.map((e) => (
                        <DropdownMenuRadioItem key={e.name} value={e.name}>
                          {e.name}
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
            <SidebarGroupLabel>Platform</SidebarGroupLabel>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton isActive>
                  <RocketIcon />
                  <span>Deployments</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <ServerIcon />
                  <span>Regions</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <SidebarInset className="gap-1 p-4">
        <h2 className="text-heading-16">Deployments</h2>
        <p className="text-label-13 text-content-secondary">
          {current.name}, <span className="text-label-13-mono">{current.region}</span>
        </p>
      </SidebarInset>
    </SidebarProvider>
  );
}
