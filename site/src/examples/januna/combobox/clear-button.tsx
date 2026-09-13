import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@ovadev-gmbh/ui-januna";

const guests = ["Nora Keller", "Luca Bernasconi", "Anna Meier", "Samuel Frei", "Elif Yilmaz", "Jonas Weber"];

export default function ComboboxClearButton() {
  return (
    <Combobox items={guests} defaultValue="Luca Bernasconi">
      <ComboboxInput placeholder="Search guests" aria-label="Guest" showClear className="w-72" />
      <ComboboxContent>
        <ComboboxEmpty>No guest matches. Add them as a new guest.</ComboboxEmpty>
        <ComboboxList>
          {(guest: string) => (
            <ComboboxItem key={guest} value={guest}>
              {guest}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}
