import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Calendar03Icon,
  Clock01Icon,
  Settings01Icon,
  Table01Icon,
  UserGroupIcon,
} from "@hugeicons/core-free-icons";

export default function CommandDemo() {
  return (
    <Command className="w-96 max-w-full">
      <CommandInput placeholder="Go to a page" />
      <CommandList>
        <CommandEmpty>No page matches.</CommandEmpty>
        <CommandGroup heading="Pages">
          <CommandItem>
            <HugeiconsIcon icon={Calendar03Icon} strokeWidth={2} />
            Tonight&apos;s bookings
          </CommandItem>
          <CommandItem>
            <HugeiconsIcon icon={Table01Icon} strokeWidth={2} />
            Floor plan
          </CommandItem>
          <CommandItem>
            <HugeiconsIcon icon={Clock01Icon} strokeWidth={2} />
            Waitlist
          </CommandItem>
          <CommandItem>
            <HugeiconsIcon icon={UserGroupIcon} strokeWidth={2} />
            Guests
          </CommandItem>
          <CommandItem>
            <HugeiconsIcon icon={Settings01Icon} strokeWidth={2} />
            Settings
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
