import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@ovadev-gmbh/ui-ticketova";

const tenants = ["acme-logistics", "bergwerk-ag", "helvetia-labs"];
const amounts = ["1'240.00", "390.00", "585.00", "49.00", "2'310.50", "780.00"];

const invoices = Array.from({ length: 18 }, (_, i) => ({
  id: `INV-2026-${String(142 - i).padStart(4, "0")}`,
  tenant: tenants[i % tenants.length]!,
  amount: amounts[i % amounts.length]!,
}));

export default function CommandScrollable() {
  return (
    <Command className="w-[28rem]">
      <CommandInput placeholder="Search invoices…" />
      <CommandList>
        <CommandEmpty>No invoice matches.</CommandEmpty>
        <CommandGroup heading="Invoices, September 2026">
          {invoices.map((invoice) => (
            <CommandItem key={invoice.id} value={`${invoice.id} ${invoice.tenant}`}>
              <span className="text-label-13-mono">{invoice.id}</span>
              <span className="text-content-secondary">{invoice.tenant}</span>
              <span className="ml-auto text-label-13-mono">CHF {invoice.amount}</span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
