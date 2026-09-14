import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  Field,
  FieldLabel,
} from "@ovadev-gmbh/ui-ovadev";

const customers = ["tuerlersee.ch", "hausen.ch", "baar.ch", "zug.ch", "cham.ch", "oberaegeri.ch"];

export default function ComboboxDemo() {
  return (
    <Field className="w-full max-w-64">
      <FieldLabel htmlFor="combobox-customer">Customer</FieldLabel>
      <Combobox items={customers}>
        <ComboboxInput id="combobox-customer" placeholder="Search customers" className="w-full" />
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
    </Field>
  );
}
