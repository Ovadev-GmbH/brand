import { useState } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@ovadev-gmbh/ui-januna";

const guests = ["Lea Brunner", "Anna Keller", "Chidi Okafor", "Marco Rossi", "Sofia Santos", "Jonas Weber"];

export default function SidebarSearch() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState("Anna Keller");
  const shown = guests.filter((name) => name.toLowerCase().includes(query.trim().toLowerCase()));

  return (
    <SidebarProvider className="h-80 min-h-0 w-full max-w-2xl overflow-hidden material-base">
      <Sidebar collapsible="none">
        <SidebarHeader>
          <SidebarInput
            aria-label="Find a guest"
            placeholder="Find a guest"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Guests</SidebarGroupLabel>
            {shown.length ? (
              <SidebarMenu>
                {shown.map((name) => (
                  <SidebarMenuItem key={name}>
                    <SidebarMenuButton isActive={name === active} onClick={() => setActive(name)}>
                      <span>{name}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            ) : (
              <p className="px-3 py-2 text-label-14 text-content-secondary">No guest matches "{query}".</p>
            )}
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <SidebarInset className="p-4">
        <h2 className="text-heading-16">{active}</h2>
      </SidebarInset>
    </SidebarProvider>
  );
}
