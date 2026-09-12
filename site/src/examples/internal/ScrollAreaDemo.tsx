import { ScrollArea, Separator } from "@ovadev-gmbh/ui-internal";

const entries = Array.from({ length: 24 }, (_, i) => ({
  time: `08:${String(41 - i).padStart(2, "0")}`,
  actor: i % 3 === 0 ? "r.markant" : i % 3 === 1 ? "l.keller" : "system",
  action:
    i % 4 === 0
      ? "invoice.issued"
      : i % 4 === 1
        ? "deployment.promoted"
        : i % 4 === 2
          ? "api_key.rotated"
          : "plan.changed",
}));

export default function ScrollAreaDemo() {
  return (
    <ScrollArea className="h-56 w-full max-w-xl border">
      <div className="p-3">
        {entries.map((entry, index) => (
          <div key={entry.time}>
            {index > 0 ? <Separator className="my-2" /> : null}
            <div className="flex items-center gap-3 text-label-13">
              <span className="text-label-13-mono text-content-secondary">{entry.time}</span>
              <span className="w-24">{entry.actor}</span>
              <span className="text-label-13-mono">{entry.action}</span>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}
