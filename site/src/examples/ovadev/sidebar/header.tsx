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
import { ChevronsUpDownIcon, FileTextIcon, NewspaperIcon } from "lucide-react";

const languages = [
  { name: "English", code: "en" },
  { name: "Deutsch", code: "de" },
];

export default function SidebarWithHeader() {
  const [language, setLanguage] = React.useState("en");
  const current = languages.find((l) => l.code === language) ?? languages[0]!;

  return (
    <SidebarProvider className="h-80 min-h-0 w-full max-w-2xl overflow-hidden border border-divider">
      <Sidebar collapsible="none" className="border-r border-divider">
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger render={<SidebarMenuButton size="lg" aria-label="Language" />}>
                  <span className="flex min-w-0 flex-1 flex-col">
                    <span className="truncate text-label-13">{current.name}</span>
                    <span className="truncate text-label-12-mono text-content-secondary">ova.dev/{current.code}</span>
                  </span>
                  <ChevronsUpDownIcon />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuGroup>
                    <DropdownMenuLabel>Language</DropdownMenuLabel>
                    <DropdownMenuRadioGroup value={language} onValueChange={setLanguage}>
                      {languages.map((l) => (
                        <DropdownMenuRadioItem key={l.code} value={l.code}>
                          {l.name}
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
            <SidebarGroupLabel>Site</SidebarGroupLabel>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton isActive>
                  <FileTextIcon />
                  <span>Pages</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <NewspaperIcon />
                  <span>Blog</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <SidebarInset className="gap-1 p-4">
        <h2 className="text-heading-16">Pages</h2>
        <p className="text-label-13 text-content-secondary">
          {current.name}, <span className="text-label-13-mono">ova.dev/{current.code}</span>
        </p>
      </SidebarInset>
    </SidebarProvider>
  );
}
