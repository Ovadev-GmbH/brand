import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { Add01Icon, PrinterIcon, Table01Icon, UserIcon } from "@hugeicons/core-free-icons";

export default function CommandDemo() {
  return (
    <Command className="w-full max-w-md border shadow-md">
      <CommandInput placeholder="Search bookings, tables or guests…" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Actions">
          <CommandItem>
            <HugeiconsIcon icon={Add01Icon} strokeWidth={2} />
            New booking
            <CommandShortcut>⌘N</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <HugeiconsIcon icon={UserIcon} strokeWidth={2} />
            Add walk-in
            <CommandShortcut>⌘W</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <HugeiconsIcon icon={PrinterIcon} strokeWidth={2} />
            Print run sheet
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Tonight">
          <CommandItem>
            <HugeiconsIcon icon={Table01Icon} strokeWidth={2} />
            Table 4 · Amir Haddad · 18:00
          </CommandItem>
          <CommandItem>
            <HugeiconsIcon icon={Table01Icon} strokeWidth={2} />
            Table 12 · Nora Keller · 19:30
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
