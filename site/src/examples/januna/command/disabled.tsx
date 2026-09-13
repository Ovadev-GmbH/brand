import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { Message01Icon, Money01Icon, UserGroupIcon } from "@hugeicons/core-free-icons";

export default function CommandDisabled() {
  return (
    <Command className="w-96 max-w-full">
      <CommandInput placeholder="Run a command on the 18:00 booking…" />
      <CommandList>
        <CommandEmpty>No command matches.</CommandEmpty>
        <CommandGroup heading="Amir Haddad, party of 2">
          <CommandItem>
            <HugeiconsIcon icon={UserGroupIcon} strokeWidth={2} />
            Seat guests
          </CommandItem>
          <CommandItem disabled>
            <HugeiconsIcon icon={Money01Icon} strokeWidth={2} />
            Refund deposit
            <span className="ml-auto text-label-12 text-content-tertiary">No deposit taken</span>
          </CommandItem>
          <CommandItem>
            <HugeiconsIcon icon={Message01Icon} strokeWidth={2} />
            Send reminder
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
