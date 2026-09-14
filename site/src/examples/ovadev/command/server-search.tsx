import * as React from "react";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@ovadev-gmbh/ui-ovadev";

type Customer = { slug: string; id: string; product: string };

const directory: Customer[] = [
  { slug: "strandbad-tuerlersee", id: "cus_8f3a2c", product: "TICKETOVA" },
  { slug: "gemeinde-hausen", id: "cus_1b77e0", product: "TICKETOVA" },
  { slug: "hallenbad-baar", id: "cus_c40d19", product: "JANUNA" },
];

export default function CommandServerSearch() {
  const [query, setQuery] = React.useState("");
  const [results, setResults] = React.useState<Customer[]>(directory);
  const [loading, setLoading] = React.useState(false);
  const timer = React.useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  function search(next: string) {
    setQuery(next);
    setLoading(true);
    clearTimeout(timer.current);
    // Stands in for the request.
    timer.current = setTimeout(() => {
      const q = next.trim().toLowerCase();
      setResults(directory.filter((c) => c.slug.includes(q) || c.id.includes(q)));
      setLoading(false);
    }, 400);
  }

  return (
    <Command shouldFilter={false} className="w-96">
      <CommandInput placeholder="Search all customers…" value={query} onValueChange={search} />
      <CommandList>
        <CommandEmpty>{loading ? "Searching…" : "No customer matches."}</CommandEmpty>
        <CommandGroup heading={loading ? "Searching…" : `${results.length} customers`}>
          {results.map((customer) => (
            <CommandItem key={customer.id} value={customer.id}>
              {customer.slug}
              <span className="text-content-secondary">{customer.product}</span>
              <span className="ml-auto text-label-12-mono text-content-tertiary">{customer.id}</span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
