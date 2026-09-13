import * as React from "react";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@ovadev-gmbh/ui-januna";

type Guest = { id: string; name: string; visits: number };

const directory: Guest[] = [
  { id: "G-1042", name: "Nora Keller", visits: 14 },
  { id: "G-2231", name: "Amir Haddad", visits: 3 },
  { id: "G-0877", name: "Lina Brunner", visits: 9 },
];

export default function CommandServerSearch() {
  const [query, setQuery] = React.useState("");
  const [results, setResults] = React.useState<Guest[]>(directory);
  const [loading, setLoading] = React.useState(false);
  const timer = React.useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  function search(next: string) {
    setQuery(next);
    setLoading(true);
    clearTimeout(timer.current);
    // Stands in for the request.
    timer.current = setTimeout(() => {
      const q = next.trim().toLowerCase();
      setResults(directory.filter((g) => g.name.toLowerCase().includes(q) || g.id.toLowerCase().includes(q)));
      setLoading(false);
    }, 400);
  }

  return (
    <Command shouldFilter={false} className="w-96 max-w-full">
      <CommandInput placeholder="Search all guests…" value={query} onValueChange={search} />
      <CommandList>
        <CommandEmpty>{loading ? "Searching…" : "No guest matches."}</CommandEmpty>
        <CommandGroup heading={loading ? "Searching…" : `${results.length} guests`}>
          {results.map((guest) => (
            <CommandItem key={guest.id} value={guest.id}>
              {guest.name}
              <span className="text-content-secondary">{guest.visits} visits</span>
              <span className="ml-auto text-label-12-mono text-content-tertiary">{guest.id}</span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
