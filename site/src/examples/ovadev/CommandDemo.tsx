import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@ovadev-gmbh/ui-ovadev";
import { HouseIcon, MailIcon, NewspaperIcon, PaletteIcon, UsersIcon } from "lucide-react";

export default function CommandDemo() {
  return (
    <Command className="w-96 max-w-full">
      <CommandInput placeholder="Go to a page" />
      <CommandList>
        <CommandEmpty>No page matches.</CommandEmpty>
        <CommandGroup heading="Pages">
          <CommandItem>
            <HouseIcon />
            Home
          </CommandItem>
          <CommandItem>
            <UsersIcon />
            About us
          </CommandItem>
          <CommandItem>
            <NewspaperIcon />
            Blog
          </CommandItem>
          <CommandItem>
            <PaletteIcon />
            Brand
          </CommandItem>
          <CommandItem>
            <MailIcon />
            Contact
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
