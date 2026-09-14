import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@ovadev-gmbh/ui-ovadev";
import { LanguagesIcon, MailIcon, PlusIcon, SendIcon } from "lucide-react";

export default function CommandShortcuts() {
  return (
    <Command className="w-96">
      <CommandInput placeholder="Run a command…" />
      <CommandList>
        <CommandEmpty>No command matches.</CommandEmpty>
        <CommandGroup heading="Commands">
          <CommandItem>
            <PlusIcon />
            New post
            <CommandShortcut>⌘N</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <MailIcon />
            Compose newsletter
            <CommandShortcut>⌘I</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <LanguagesIcon />
            Switch to German
            <CommandShortcut>⇧⌘L</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <SendIcon />
            Open contact requests
            <CommandShortcut>⌘R</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
