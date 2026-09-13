import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@ovadev-gmbh/ui-januna";

const guests = ["Amir Haddad", "Nora Keller", "Lina Brunner", "Jonas Meier", "Sofia Rossi", "Luca Weber"];

const bookings = Array.from({ length: 18 }, (_, i) => {
  const minutes = 18 * 60 + i * 15;
  return {
    time: `${String(Math.floor(minutes / 60)).padStart(2, "0")}:${String(minutes % 60).padStart(2, "0")}`,
    guest: guests[i % guests.length],
    party: 2 + (i % 5),
  };
});

export default function CommandScrollable() {
  return (
    <Command className="w-[28rem] max-w-full">
      <CommandInput placeholder="Search tonight's bookings…" />
      <CommandList>
        <CommandEmpty>No booking matches.</CommandEmpty>
        <CommandGroup heading="Tonight, 18 bookings">
          {bookings.map((b) => (
            <CommandItem key={b.time} value={`${b.time} ${b.guest}`}>
              <span className="text-label-13-mono">{b.time}</span>
              {b.guest}
              <span className="ml-auto text-label-13 text-content-secondary">{b.party} guests</span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
