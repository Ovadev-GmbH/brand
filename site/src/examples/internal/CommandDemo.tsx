import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@ovadev-gmbh/ui-internal";
import { RefreshCwIcon, Building2Icon, KeyIcon, ReceiptIcon } from "lucide-react";

export default function CommandDemo() {
  return (
    <Command className="max-w-md border border-divider">
      <CommandInput placeholder="Search tenants, invoices, commands…" />
      <CommandList>
        <CommandEmpty>No results.</CommandEmpty>
        <CommandGroup heading="Tenants">
          <CommandItem>
            <Building2Icon />
            Acme Logistics AG
            <span className="ml-auto text-label-12-mono text-content-tertiary">ten_8f3a2c</span>
          </CommandItem>
          <CommandItem>
            <Building2Icon />
            Nordwind Travel GmbH
            <span className="ml-auto text-label-12-mono text-content-tertiary">ten_1b77e0</span>
          </CommandItem>
          <CommandItem>
            <ReceiptIcon />
            INV-2041 · CHF 1,240.00
            <span className="ml-auto text-label-12-mono text-content-tertiary">open</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Commands">
          <CommandItem>
            <RefreshCwIcon />
            Redeploy production
            <CommandShortcut>⌘R</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <KeyIcon />
            Rotate API key
            <CommandShortcut>⌘K</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
