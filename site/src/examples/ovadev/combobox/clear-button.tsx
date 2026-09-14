import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@ovadev-gmbh/ui-ovadev";

const customers = ["tuerlersee.ch", "hausen.ch", "baar.ch", "zug.ch", "cham.ch", "oberaegeri.ch"];

export default function ComboboxClearButton() {
  return (
    <Combobox items={customers} defaultValue="hausen.ch">
      <ComboboxInput placeholder="Search customers" aria-label="Customer" showClear className="w-64" />
      <ComboboxContent>
        <ComboboxEmpty>No customer matches.</ComboboxEmpty>
        <ComboboxList>
          {(customer: string) => (
            <ComboboxItem key={customer} value={customer}>
              <span className="text-label-13-mono">{customer}</span>
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}
