import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@ovadev-gmbh/ui-ticketova";

export default function CommandGroups() {
  return (
    <Command className="w-96">
      <CommandInput placeholder="Search…" />
      <CommandList>
        <CommandEmpty>Nothing matches.</CommandEmpty>
        <CommandGroup heading="Tenants">
          <CommandItem>acme-logistics</CommandItem>
          <CommandItem>bergwerk-ag</CommandItem>
          <CommandItem>helvetia-labs</CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Invoices">
          <CommandItem>
            <span className="text-label-13-mono">INV-2026-0142</span>
            <span className="ml-auto text-label-13-mono text-content-secondary">CHF 1'240.00</span>
          </CommandItem>
          <CommandItem>
            <span className="text-label-13-mono">INV-2026-0141</span>
            <span className="ml-auto text-label-13-mono text-content-secondary">CHF 390.00</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Regions">
          <CommandItem>
            <span className="text-label-13-mono">ch-zrh-1</span>
          </CommandItem>
          <CommandItem>
            <span className="text-label-13-mono">eu-central-1</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
