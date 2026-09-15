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
} from "@ovadev-gmbh/ui-ticketova";
import { BuildingsIcon, ReceiptIcon, RocketIcon, MagnifyingGlassIcon } from "@ovadev-gmbh/ui-ticketova/icons";

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
        <MagnifyingGlassIcon data-icon="inline-start" />
        Search
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
        </KbdGroup>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen} title="Search" description="Find a tenant, an invoice or a deployment.">
        <Command>
          <CommandInput placeholder="Search tenants, invoices, deployments…" />
          <CommandList>
            <CommandEmpty>Nothing matches.</CommandEmpty>
            <CommandGroup heading="Tenants">
              <CommandItem onSelect={close}>
                <BuildingsIcon />
                acme-logistics
              </CommandItem>
              <CommandItem onSelect={close}>
                <BuildingsIcon />
                helvetia-labs
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Recent">
              <CommandItem onSelect={close}>
                <ReceiptIcon />
                <span className="text-label-13-mono">INV-2026-0142</span>
              </CommandItem>
              <CommandItem onSelect={close}>
                <RocketIcon />
                <span className="text-label-13-mono">dpl_4f2c91</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  );
}
