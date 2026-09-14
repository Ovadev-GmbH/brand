import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@ovadev-gmbh/ui-ovadev";

export default function CommandGroups() {
  return (
    <Command className="w-96">
      <CommandInput placeholder="Search…" />
      <CommandList>
        <CommandEmpty>Nothing matches.</CommandEmpty>
        <CommandGroup heading="Pages">
          <CommandItem>About us</CommandItem>
          <CommandItem>Blog</CommandItem>
          <CommandItem>Contact</CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Posts">
          <CommandItem>
            <span className="text-label-13-mono">2026-09-14</span>
            <span className="ml-auto text-label-13-mono text-content-secondary">Pool season 2026</span>
          </CommandItem>
          <CommandItem>
            <span className="text-label-13-mono">2026-08-27</span>
            <span className="ml-auto text-label-13-mono text-content-secondary">JANUNA kitchen display</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Brand">
          <CommandItem>
            <span className="text-label-13-mono">/brand/colour</span>
          </CommandItem>
          <CommandItem>
            <span className="text-label-13-mono">/brand/type</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
