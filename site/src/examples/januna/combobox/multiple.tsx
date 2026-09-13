import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
  Label,
  useComboboxAnchor,
} from "@ovadev-gmbh/ui-januna";

const tables = ["T10", "T11", "T12", "T14", "T15", "Terrace 1", "Terrace 2", "Terrace 3"];

export default function ComboboxMultiple() {
  const anchor = useComboboxAnchor();

  return (
    <div className="flex w-80 flex-col gap-2">
      <Label htmlFor="combobox-multiple-input">Tables for the party of 10</Label>
      <Combobox items={tables} multiple defaultValue={["T12", "T14"]}>
        <ComboboxChips ref={anchor}>
          <ComboboxValue>
            {(values: string[]) => (
              <>
                {values.map((table) => (
                  <ComboboxChip key={table}>{table}</ComboboxChip>
                ))}
                <ComboboxChipsInput id="combobox-multiple-input" placeholder="Join another table" />
              </>
            )}
          </ComboboxValue>
        </ComboboxChips>
        <ComboboxContent anchor={anchor}>
          <ComboboxEmpty>No table matches.</ComboboxEmpty>
          <ComboboxList>
            {(table: string) => (
              <ComboboxItem key={table} value={table}>
                {table}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  );
}
