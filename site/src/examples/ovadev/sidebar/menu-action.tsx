import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@ovadev-gmbh/ui-ovadev";
import { EllipsisIcon, NewspaperIcon } from "lucide-react";

const posts = ["season-2026-in-numbers", "why-a-till-of-our-own", "januna-kitchen-display", "hello-baar"];

export default function SidebarMenuActionExample() {
  const [active, setActive] = React.useState("season-2026-in-numbers");

  return (
    <SidebarProvider className="h-80 min-h-0 w-full max-w-2xl overflow-hidden border border-divider">
      <Sidebar collapsible="none" className="border-r border-divider">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Posts</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {posts.map((slug) => (
                  <SidebarMenuItem key={slug}>
                    <SidebarMenuButton isActive={slug === active} onClick={() => setActive(slug)}>
                      <NewspaperIcon />
                      <span className="text-label-13-mono">{slug}</span>
                    </SidebarMenuButton>
                    <DropdownMenu>
                      <DropdownMenuTrigger render={<SidebarMenuAction showOnHover aria-label={`Actions for ${slug}`} />}>
                        <EllipsisIcon />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent side="right" align="start" className="w-48">
                        <DropdownMenuItem>Open on ova.dev</DropdownMenuItem>
                        <DropdownMenuItem>Publish</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <SidebarInset className="p-4">
        <h2 className="text-heading-16">Post {active}</h2>
      </SidebarInset>
    </SidebarProvider>
  );
}
