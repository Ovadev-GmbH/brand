import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@ovadev-gmbh/ui-ovadev";

const people = [
  { slug: "beni", role: "CEO & Engineering", name: "Beni" },
  { slug: "robin", role: "CTO & Engineering", name: "Robin" },
  { slug: "philip", role: "Consulting & Sales", name: "Philip" },
];

export default function CommandKeywords() {
  return (
    <Command className="w-96">
      <CommandInput placeholder="Name or role, e.g. sales" />
      <CommandList>
        <CommandEmpty>Nobody matches.</CommandEmpty>
        <CommandGroup heading="People">
          {people.map((person) => (
            <CommandItem key={person.slug} value={person.slug} keywords={[person.role, person.name]}>
              {person.name}
              <span className="ml-auto text-label-12-mono text-content-tertiary">{person.role}</span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
