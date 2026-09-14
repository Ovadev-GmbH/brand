import {
  Button,
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxTrigger,
  ComboboxValue,
} from "@ovadev-gmbh/ui-ovadev";

const customers = ["tuerlersee.ch", "hausen.ch", "baar.ch", "zug.ch", "cham.ch", "oberaegeri.ch"];

export default function ComboboxPopup() {
  return (
    <Combobox items={customers} defaultValue="tuerlersee.ch">
      <ComboboxTrigger render={<Button variant="outline" className="w-56 justify-between" />}>
        <span className="text-label-13-mono">
          <ComboboxValue />
        </span>
      </ComboboxTrigger>
      <ComboboxContent>
        <ComboboxInput showTrigger={false} placeholder="Search customers" aria-label="Search customers" />
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
