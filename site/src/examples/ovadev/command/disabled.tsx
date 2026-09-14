import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@ovadev-gmbh/ui-ovadev";
import { LanguagesIcon, SendIcon, UploadIcon } from "lucide-react";

export default function CommandDisabled() {
  return (
    <Command className="w-96">
      <CommandInput placeholder="Run a command on Pool season 2026…" />
      <CommandList>
        <CommandEmpty>No command matches.</CommandEmpty>
        <CommandGroup heading="Post">
          <CommandItem>
            <UploadIcon />
            Publish
          </CommandItem>
          <CommandItem disabled>
            <LanguagesIcon />
            Translate to German
            <span className="ml-auto text-label-12 text-content-tertiary">Already translated</span>
          </CommandItem>
          <CommandItem>
            <SendIcon />
            Send to newsletter
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
