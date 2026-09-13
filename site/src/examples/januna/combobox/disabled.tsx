import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@ovadev-gmbh/ui-januna";

const tables = ["T4", "T8", "T12", "T14", "Terrace 3"];
const seated = ["T8", "T14"];

export default function ComboboxDisabled() {
  return (
    <div className="flex flex-col gap-3">
      <Combobox items={tables} defaultValue="T12">
        <ComboboxInput aria-label="Table, locked while the party is seated" disabled className="w-64" />
        <ComboboxContent>
          <ComboboxList>
            {(table: string) => (
              <ComboboxItem key={table} value={table}>
                {table}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
      <Combobox items={tables}>
        <ComboboxInput placeholder="Move the booking to" aria-label="Table" className="w-64" />
        <ComboboxContent>
          <ComboboxEmpty>No table matches.</ComboboxEmpty>
          <ComboboxList>
            {(table: string) => (
              <ComboboxItem key={table} value={table} disabled={seated.includes(table)}>
                {table}
                {seated.includes(table) ? (
                  <span className="ml-auto text-label-12 text-content-tertiary">Seated</span>
                ) : null}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  );
}
