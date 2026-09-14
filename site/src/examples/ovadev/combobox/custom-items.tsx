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
  { name: "Robin", email: "robin@ova.dev", role: "Owner" },
  { name: "Philip", email: "philip@ova.dev", role: "Admin" },
  { name: "Lena", email: "lena@ova.dev", role: "Support" },
  { name: "Marco", email: "marco@ova.dev", role: "Billing" },
  { name: "Sara", email: "sara@ova.dev", role: "Engineering" },
];

export default function ComboboxCustomItems() {
  return (
    <Combobox items={members} itemToStringLabel={(member: Member) => member.name}>
      <ComboboxInput placeholder="Search the team" aria-label="Assignee" className="w-64" />
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
