import * as React from "react";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@ovadev-gmbh/ui-ovadev";

const sites = [
  { value: "ova", label: "ova.dev", host: "ova.dev" },
  { value: "ticketova", label: "TICKETOVA", host: "ticketova.ch" },
  { value: "januna", label: "JANUNA", host: "januna.ch" },
];

export default function CommandChecked() {
  const [site, setSite] = React.useState("ticketova");

  return (
    <Command className="w-96">
      <CommandInput placeholder="Switch site…" />
      <CommandList>
        <CommandEmpty>No site matches.</CommandEmpty>
        <CommandGroup heading="Site">
          {sites.map((s) => (
            <CommandItem key={s.value} value={s.value} data-checked={site === s.value} onSelect={setSite}>
              {s.label}
              <span className="text-label-12-mono text-content-tertiary">{s.host}</span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
