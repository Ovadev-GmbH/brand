import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@ovadev-gmbh/ui-ovadev";

type Member = { name: string; email: string; role: string };

const members: Member[] = [
  { name: "Beni", email: "beni@ova.dev", role: "CEO & Engineering" },
  { name: "Robin", email: "robin@ova.dev", role: "CTO & Engineering" },
  { name: "Philip", email: "philip@ova.dev", role: "Consulting & Sales" },
];

export default function ComboboxCustomItems() {
  return (
    <Combobox items={members} itemToStringLabel={(member: Member) => member.name}>
      <ComboboxInput placeholder="Search the team" aria-label="Author" className="w-64" />
      <ComboboxContent>
        <ComboboxEmpty>No one on the team matches.</ComboboxEmpty>
        <ComboboxList>
          {(member: Member) => (
            <ComboboxItem key={member.email} value={member}>
              <div className="flex min-w-0 flex-1 flex-col">
                <span>{member.name}</span>
                <span className="text-label-12-mono text-content-secondary">{member.email}</span>
              </div>
              <span className="text-label-12 text-content-tertiary">{member.role}</span>
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}
