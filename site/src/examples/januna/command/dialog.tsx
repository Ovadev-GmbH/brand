import * as React from "react";
import { Button, Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput } from "@ovadev-gmbh/ui-januna";
import { CommandItem, CommandList, CommandSeparator, Kbd, KbdGroup } from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { Calendar03Icon, Search01Icon, Table01Icon, UserIcon } from "@hugeicons/core-free-icons";

export default function CommandInDialog() {
  const [open, setOpen] = React.useState(false);
  const close = () => setOpen(false);

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

  return (
    <>
      <Button variant="outline" onClick={() => setOpen(true)}>
        <HugeiconsIcon icon={Search01Icon} strokeWidth={2} data-icon="inline-start" />
        Search
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
        </KbdGroup>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen} title="Search" description="Find a guest, a booking or a table.">
        <Command>
          <CommandInput placeholder="Search guests, bookings, tables…" />
          <CommandList>
            <CommandEmpty>Nothing matches.</CommandEmpty>
            <CommandGroup heading="Guests">
              <CommandItem onSelect={close}>
                <HugeiconsIcon icon={UserIcon} strokeWidth={2} />
                Nora Keller
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Tonight">
              <CommandItem onSelect={close}>
                <HugeiconsIcon icon={Calendar03Icon} strokeWidth={2} />
                <span className="text-label-13-mono">19:30</span>
                Nora Keller, party of 4
              </CommandItem>
              <CommandItem onSelect={close}>
                <HugeiconsIcon icon={Table01Icon} strokeWidth={2} />
                Terrace 3
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  );
}
