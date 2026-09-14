import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@ovadev-gmbh/ui-ovadev";

const customers = ["tuerlersee.ch", "hausen.ch", "baar.ch", "oberaegeri.ch"];
const closed = ["oberaegeri.ch"];

export default function ComboboxDisabled() {
  return (
    <div className="flex flex-col gap-3">
      <Combobox items={customers} defaultValue="baar.ch">
        <ComboboxInput aria-label="Customer, locked" disabled className="w-64" />
        <ComboboxContent>
          <ComboboxList>
            {(customer: string) => (
              <ComboboxItem key={customer} value={customer}>
                {customer}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
      <Combobox items={customers}>
        <ComboboxInput placeholder="Assign the quote to a customer" aria-label="Customer" className="w-64" />
        <ComboboxContent>
          <ComboboxEmpty>No customer matches.</ComboboxEmpty>
          <ComboboxList>
            {(customer: string) => (
              <ComboboxItem key={customer} value={customer} disabled={closed.includes(customer)}>
                <span className="text-label-13-mono">{customer}</span>
                {closed.includes(customer) ? (
                  <span className="ml-auto text-label-12 text-content-tertiary">season over</span>
                ) : null}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  );
}
