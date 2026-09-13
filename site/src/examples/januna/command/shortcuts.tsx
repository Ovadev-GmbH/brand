import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { Add01Icon, Clock01Icon, Table01Icon, UserIcon } from "@hugeicons/core-free-icons";

export default function CommandShortcuts() {
  return (
    <Command className="w-96 max-w-full">
      <CommandInput placeholder="Run a command…" />
      <CommandList>
        <CommandEmpty>No command matches.</CommandEmpty>
        <CommandGroup heading="Commands">
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
            <HugeiconsIcon icon={Table01Icon} strokeWidth={2} />
            Block table
            <CommandShortcut>⇧⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <HugeiconsIcon icon={Clock01Icon} strokeWidth={2} />
            Open waitlist
            <CommandShortcut>⌘L</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
