import { ScrollArea, ScrollBar } from "@ovadev-gmbh/ui-ovadev";

const releases = [
  { version: "3.4.0", product: "TICKETOVA", note: "season passes", at: "09-12" },
  { version: "0.9.0", product: "JANUNA", note: "kitchen display", at: "09-10" },
  { version: "3.3.2", product: "TICKETOVA", note: "TWINT refunds", at: "09-03" },
  { version: "3.3.1", product: "TICKETOVA", note: "gate scanner fix", at: "08-28" },
  { version: "0.8.0", product: "JANUNA", note: "orders", at: "08-21" },
  { version: "3.3.0", product: "TICKETOVA", note: "group tickets", at: "08-14" },
  { version: "0.7.0", product: "JANUNA", note: "till", at: "08-05" },
];

export default function ScrollAreaHorizontal() {
  return (
    <ScrollArea className="w-full max-w-xl material-base">
      <ol aria-label="Recent releases" className="flex w-max">
        {releases.map((release) => (
          <li key={`${release.product}-${release.version}`} className="flex w-44 flex-col gap-1 border-r border-divider px-3 pt-3 pb-4 last:border-r-0">
            <span className="text-label-13-mono">{release.version}</span>
            <span className="text-label-12 text-content-secondary">{release.product}, {release.note}</span>
            <span className="text-label-12-mono text-content-secondary">
              2026-{release.at}
            </span>
          </li>
        ))}
      </ol>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
