import { ScrollArea } from "@ovadev-gmbh/ui-januna";

const waitlist = [
  { name: "Lea Brunner", party: 2 },
  { name: "Chidi Okafor", party: 4 },
  { name: "Sofia Lindqvist", party: 2 },
  { name: "Marco Rossi", party: 6 },
  { name: "Nadia Haddad", party: 3 },
  { name: "Jonas Huber", party: 2 },
  { name: "Claire Moreau", party: 5 },
  { name: "Aiko Nakamura", party: 2 },
  { name: "Felix Gerber", party: 8 },
  { name: "Ana Da Silva", party: 4 },
  { name: "Tobias Weber", party: 2 },
  { name: "Elena Fischer", party: 3 },
];

export default function ScrollAreaDemo() {
  return (
    <ScrollArea className="h-72 w-64 material-base">
      <div className="flex flex-col gap-3 p-4">
        <h4 className="text-heading-14">Tonight's waitlist</h4>
        <ul className="flex flex-col gap-3">
          {waitlist.map((guest) => (
            <li key={guest.name} className="flex items-center justify-between gap-3 text-label-14">
              <span className="truncate">{guest.name}</span>
              <span className="shrink-0 text-content-secondary">party of {guest.party}</span>
            </li>
          ))}
        </ul>
      </div>
    </ScrollArea>
  );
}
