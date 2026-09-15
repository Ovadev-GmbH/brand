import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@ovadev-gmbh/ui-ticketova";
import { KeyIcon, PlusIcon, ReceiptIcon, ScrollIcon } from "@ovadev-gmbh/ui-ticketova/icons";

export default function CommandShortcuts() {
  return (
    <Command className="w-96">
      <CommandInput placeholder="Run a command…" />
      <CommandList>
        <CommandEmpty>No command matches.</CommandEmpty>
        <CommandGroup heading="Commands">
          <CommandItem>
            <PlusIcon />
            New tenant
            <CommandShortcut>⌘N</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <ReceiptIcon />
            Create invoice
            <CommandShortcut>⌘I</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <KeyIcon />
            Rotate API key
            <CommandShortcut>⇧⌘K</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <ScrollIcon />
            Open audit log
            <CommandShortcut>⌘L</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
