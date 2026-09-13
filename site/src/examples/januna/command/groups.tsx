import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@ovadev-gmbh/ui-januna";

export default function CommandGroups() {
  return (
    <Command className="w-96 max-w-full">
      <CommandInput placeholder="Search…" />
      <CommandList>
        <CommandEmpty>Nothing matches.</CommandEmpty>
        <CommandGroup heading="Guests">
          <CommandItem>Nora Keller</CommandItem>
          <CommandItem>Amir Haddad</CommandItem>
          <CommandItem>Lina Brunner</CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Bookings tonight">
          <CommandItem value="18:00 Amir Haddad">
            <span className="text-label-13-mono">18:00</span>
            Amir Haddad
            <span className="ml-auto text-label-13 text-content-secondary">2 guests</span>
          </CommandItem>
          <CommandItem value="19:30 Nora Keller">
            <span className="text-label-13-mono">19:30</span>
            Nora Keller
            <span className="ml-auto text-label-13 text-content-secondary">4 guests</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Tables">
          <CommandItem>T12</CommandItem>
          <CommandItem>Terrace 3</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
