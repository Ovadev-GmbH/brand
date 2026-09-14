import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@ovadev-gmbh/ui-ovadev";
import { RefreshCwIcon, RotateCcwIcon, ZapIcon } from "lucide-react";

export default function CommandDisabled() {
  return (
    <Command className="w-96">
      <CommandInput placeholder="Run a command on dpl_4f2c91…" />
      <CommandList>
        <CommandEmpty>No command matches.</CommandEmpty>
        <CommandGroup heading="Deployment">
          <CommandItem>
            <RefreshCwIcon />
            Redeploy
          </CommandItem>
          <CommandItem disabled>
            <RotateCcwIcon />
            Roll back
            <span className="ml-auto text-label-12 text-content-tertiary">No earlier build</span>
          </CommandItem>
          <CommandItem>
            <ZapIcon />
            Purge CDN cache
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
