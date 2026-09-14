import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@ovadev-gmbh/ui-ovadev";

const authors = ["Beni", "Robin", "Philip"];
const readings = ["6 min", "4 min", "3 min", "8 min", "5 min", "2 min"];

const posts = Array.from({ length: 18 }, (_, i) => ({
  date: `2026-${String(9 - Math.floor(i / 4)).padStart(2, "0")}-${String(28 - (i % 4) * 7).padStart(2, "0")}`,
  author: authors[i % authors.length]!,
  reading: readings[i % readings.length]!,
}));

export default function CommandScrollable() {
  return (
    <Command className="w-[28rem]">
      <CommandInput placeholder="Search posts…" />
      <CommandList>
        <CommandEmpty>No post matches.</CommandEmpty>
        <CommandGroup heading="Posts, 2026">
          {posts.map((post) => (
            <CommandItem key={post.date} value={`${post.date} ${post.author}`}>
              <span className="text-label-13-mono">{post.date}</span>
              <span className="text-content-secondary">{post.author}</span>
              <span className="ml-auto text-label-13-mono">{post.reading}</span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
