import * as React from "react";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@ovadev-gmbh/ui-ovadev";

type Customer = { slug: string; product: string; canton: string };

const customers: Customer[] = [
  { slug: "tuerlersee.ch", product: "TICKETOVA", canton: "ZH" },
  { slug: "hausen.ch", product: "TICKETOVA", canton: "ZH" },
  { slug: "baar.ch", product: "JANUNA", canton: "ZG" },
];

export default function ComboboxControlled() {
  const [customer, setCustomer] = React.useState<Customer | null>(customers[0] ?? null);

  return (
    <div className="flex flex-col items-start gap-2">
      <Combobox
        items={customers}
        value={customer}
        onValueChange={setCustomer}
        itemToStringLabel={(c: Customer) => c.slug}
      >
        <ComboboxInput placeholder="Search customers" aria-label="Customer" className="w-64" />
        <ComboboxContent>
          <ComboboxEmpty>No customer matches.</ComboboxEmpty>
          <ComboboxList>
            {(c: Customer) => (
              <ComboboxItem key={c.slug} value={c}>
                <span className="text-label-13-mono">{c.slug}</span>
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
      <span className="text-label-13 text-content-secondary">
        {customer ? (
          <>
            {customer.product} in <span className="text-label-13-mono">{customer.canton}</span>
          </>
        ) : (
          "No customer chosen"
        )}
      </span>
    </div>
  );
}
