import * as React from "react";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@ovadev-gmbh/ui-internal";

type Tenant = { slug: string; id: string; plan: string };

const directory: Tenant[] = [
  { slug: "acme-logistics", id: "ten_8f3a2c", plan: "Scale" },
  { slug: "bergwerk-ag", id: "ten_1b77e0", plan: "Team" },
  { slug: "helvetia-labs", id: "ten_c40d19", plan: "Scale" },
];

export default function CommandServerSearch() {
  const [query, setQuery] = React.useState("");
  const [results, setResults] = React.useState<Tenant[]>(directory);
  const [loading, setLoading] = React.useState(false);
  const timer = React.useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  function search(next: string) {
    setQuery(next);
    setLoading(true);
    clearTimeout(timer.current);
    // Stands in for the request.
    timer.current = setTimeout(() => {
      const q = next.trim().toLowerCase();
      setResults(directory.filter((t) => t.slug.includes(q) || t.id.includes(q)));
      setLoading(false);
    }, 400);
  }

  return (
    <Command shouldFilter={false} className="w-96">
      <CommandInput placeholder="Search all tenants…" value={query} onValueChange={search} />
      <CommandList>
        <CommandEmpty>{loading ? "Searching…" : "No tenant matches."}</CommandEmpty>
        <CommandGroup heading={loading ? "Searching…" : `${results.length} tenants`}>
          {results.map((tenant) => (
            <CommandItem key={tenant.id} value={tenant.id}>
              {tenant.slug}
              <span className="text-content-secondary">{tenant.plan}</span>
              <span className="ml-auto text-label-12-mono text-content-tertiary">{tenant.id}</span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
