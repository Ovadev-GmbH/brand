import * as React from "react";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@ovadev-gmbh/ui-januna";

type Guest = { name: string; visits: number; note: string };

const guests: Guest[] = [
  { name: "Nora Keller", visits: 14, note: "Prefers the terrace. Nut allergy." },
  { name: "Luca Bernasconi", visits: 3, note: "Asks for a high chair." },
  { name: "Anna Meier", visits: 8, note: "Vegetarian." },
];

export default function ComboboxControlled() {
  const [guest, setGuest] = React.useState<Guest | null>(guests[0] ?? null);

  return (
    <div className="flex w-72 flex-col items-start gap-2">
      <Combobox items={guests} value={guest} onValueChange={setGuest} itemToStringLabel={(g: Guest) => g.name}>
        <ComboboxInput placeholder="Search guests" aria-label="Guest" className="w-full" />
        <ComboboxContent>
          <ComboboxEmpty>No guest matches.</ComboboxEmpty>
          <ComboboxList>
            {(g: Guest) => (
              <ComboboxItem key={g.name} value={g}>
                {g.name}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
      <p className="m-0 text-copy-13 text-content-secondary">
        {guest ? `${guest.visits} visits. ${guest.note}` : "No guest chosen"}
      </p>
    </div>
  );
}
