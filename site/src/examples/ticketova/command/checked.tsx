import * as React from "react";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@ovadev-gmbh/ui-ticketova";

const environments = [
  { value: "production", label: "Production", host: "acme.ova.dev" },
  { value: "staging", label: "Staging", host: "acme.staging.ova.dev" },
  { value: "preview", label: "Preview", host: "pr-412.acme.preview.ova.dev" },
];

export default function CommandChecked() {
  const [environment, setEnvironment] = React.useState("staging");

  return (
    <Command className="w-96">
      <CommandInput placeholder="Switch environment…" />
      <CommandList>
        <CommandEmpty>No environment matches.</CommandEmpty>
        <CommandGroup heading="Environment">
          {environments.map((env) => (
            <CommandItem
              key={env.value}
              value={env.value}
              data-checked={environment === env.value}
              onSelect={setEnvironment}
            >
              {env.label}
              <span className="text-label-12-mono text-content-tertiary">{env.host}</span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
