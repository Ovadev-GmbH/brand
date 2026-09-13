import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@ovadev-gmbh/ui-januna";

const guests = [
  { name: "Nora Keller", phone: "+41 79 412 33 18", email: "nora.keller@example.com" },
  { name: "Amir Haddad", phone: "+41 78 205 91 44", email: "amir.haddad@example.com" },
  { name: "Lina Brunner", phone: "+41 76 330 12 07", email: "lina.brunner@example.com" },
];

export default function CommandKeywords() {
  return (
    <Command className="w-96 max-w-full">
      <CommandInput placeholder="Name, phone number or email" />
      <CommandList>
        <CommandEmpty>No guest matches.</CommandEmpty>
        <CommandGroup heading="Guests">
          {guests.map((guest) => (
            <CommandItem key={guest.email} value={guest.name} keywords={[guest.phone, guest.email]}>
              {guest.name}
              <span className="ml-auto text-label-12-mono text-content-tertiary">{guest.phone}</span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
