import * as React from "react";
import {
  Button,
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  Kbd,
  KbdGroup,
} from "@ovadev-gmbh/ui-ovadev";
import { FileTextIcon, NewspaperIcon, SearchIcon, UserIcon } from "lucide-react";

export default function CommandInDialog() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  const close = () => setOpen(false);

  return (
    <>
      <Button variant="outline" onClick={() => setOpen(true)}>
        <SearchIcon data-icon="inline-start" />
        Search
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
        </KbdGroup>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen} title="Search" description="Find a page, a post or a person.">
        <Command>
          <CommandInput placeholder="Search pages, posts, people…" />
          <CommandList>
            <CommandEmpty>Nothing matches.</CommandEmpty>
            <CommandGroup heading="People">
              <CommandItem onSelect={close}>
                <UserIcon />
                Beni, CEO & Engineering
              </CommandItem>
              <CommandItem onSelect={close}>
                <UserIcon />
                Philip, Consulting & Sales
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Recent">
              <CommandItem onSelect={close}>
                <NewspaperIcon />
                <span className="text-label-13-mono">/blog/pool-season-2026</span>
              </CommandItem>
              <CommandItem onSelect={close}>
                <FileTextIcon />
                <span className="text-label-13-mono">/brand/colour</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  );
}
