import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@ovadev-gmbh/ui-januna";

const tables = ["T1", "T2", "T4", "T8", "T12", "T14", "Bar 1", "Bar 2", "Terrace 1", "Terrace 3"];

export default function ComboboxAutoHighlight() {
  return (
    <Combobox items={tables} autoHighlight>
      <ComboboxInput placeholder="Seat at table" aria-label="Seat the walk-in at table" className="w-64" />
      <ComboboxContent>
        <ComboboxEmpty>No free table matches.</ComboboxEmpty>
        <ComboboxList>
          {(table: string) => (
            <ComboboxItem key={table} value={table}>
              {table}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}
