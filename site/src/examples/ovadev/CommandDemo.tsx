import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@ovadev-gmbh/ui-ovadev";
import { Building2Icon, KeyRoundIcon, ReceiptIcon, RocketIcon, ScrollTextIcon } from "lucide-react";

export default function CommandDemo() {
  return (
    <Command className="w-96 max-w-full">
      <CommandInput placeholder="Go to a page" />
      <CommandList>
        <CommandEmpty>No page matches.</CommandEmpty>
        <CommandGroup heading="Pages">
          <CommandItem>
            <Building2Icon />
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
            <KeyRoundIcon />
            API keys
          </CommandItem>
          <CommandItem>
            <ScrollTextIcon />
            Audit log
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
