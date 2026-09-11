import { ScrollArea, Separator } from "@ovadev-gmbh/ui-januna";

const waitlist = Array.from({ length: 24 }, (_, i) => ({
  name: `Guest ${i + 1}`,
  party: 2 + (i % 5),
  minutes: 5 + i * 3,
}));

export default function ScrollAreaDemo() {
  return (
    <ScrollArea className="h-60 w-64 rounded-2xl border">
      <div className="p-4">
        {waitlist.map((entry, index) => (
          <div key={entry.name}>
            {index > 0 ? <Separator className="my-2" /> : null}
            <div className="flex justify-between text-copy-14">
              <span>
                {entry.name}, party of {entry.party}
              </span>
              <span className="text-content-secondary">{entry.minutes} min</span>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}
