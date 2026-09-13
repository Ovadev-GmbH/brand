import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@ovadev-gmbh/ui-januna";

type Guest = { name: string; phone: string; visits: number };

const guests: Guest[] = [
  { name: "Nora Keller", phone: "+41 79 412 88 10", visits: 14 },
  { name: "Luca Bernasconi", phone: "+41 76 230 51 07", visits: 3 },
  { name: "Anna Meier", phone: "+41 78 915 42 66", visits: 8 },
  { name: "Samuel Frei", phone: "+41 79 604 19 33", visits: 1 },
];

export default function ComboboxCustomItems() {
  return (
    <Combobox items={guests} itemToStringLabel={(guest: Guest) => guest.name}>
      <ComboboxInput placeholder="Search by name" aria-label="Guest" className="w-80" />
      <ComboboxContent>
        <ComboboxEmpty>No guest matches.</ComboboxEmpty>
        <ComboboxList>
          {(guest: Guest) => (
            <ComboboxItem key={guest.phone} value={guest}>
              <div className="flex min-w-0 flex-1 flex-col">
                <span>{guest.name}</span>
                <span className="text-label-12-mono text-content-secondary">{guest.phone}</span>
              </div>
              <span className="text-label-12 text-content-tertiary">
                {guest.visits === 1 ? "First visit" : `${guest.visits} visits`}
              </span>
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}
