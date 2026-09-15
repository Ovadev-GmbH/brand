import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@ovadev-gmbh/ui-ticketova";
import { BuildingsIcon, KeyIcon, ReceiptIcon, RocketIcon, ScrollIcon } from "@ovadev-gmbh/ui-ticketova/icons";

export default function CommandDemo() {
  return (
    <Command className="w-96 max-w-full">
      <CommandInput placeholder="Go to a page" />
      <CommandList>
        <CommandEmpty>No page matches.</CommandEmpty>
        <CommandGroup heading="Pages">
          <CommandItem>
            <BuildingsIcon />
            Tenants
          </CommandItem>
          <CommandItem>
            <ReceiptIcon />
            Invoices
          </CommandItem>
          <CommandItem>
            <RocketIcon />
            Deployments
          </CommandItem>
          <CommandItem>
            <KeyIcon />
            API keys
          </CommandItem>
          <CommandItem>
            <ScrollIcon />
            Audit log
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
