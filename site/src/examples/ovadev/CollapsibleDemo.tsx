import {
  Button,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@ovadev-gmbh/ui-ovadev";
import { ChevronsUpDownIcon } from "lucide-react";

type Release = { version: string; note: string; date: string };

const latest: Release = { version: "2026.9", note: "Current", date: "2026-09-08" };
const older: Release[] = [
  { version: "2026.8", note: "Replaced", date: "2026-08-11" },
  { version: "2026.7", note: "Replaced", date: "2026-07-06" },
];

function Run({ run }: { run: Release }) {
  return (
    <div className="material-base flex items-center gap-3 px-3 py-2 text-label-13">
      <span className="text-label-13-mono">{run.version}</span>
      <span className="flex-1 text-content-secondary">{run.note}</span>
      <span className="text-label-13-mono text-content-secondary">{run.date}</span>
    </div>
  );
}

export default function CollapsibleDemo() {
  return (
    <Collapsible className="flex w-full max-w-sm flex-col gap-2">
      <div className="flex items-center justify-between gap-4">
        <span className="text-heading-14">TICKETOVA releases</span>
        <CollapsibleTrigger render={<Button variant="ghost" size="icon-sm" aria-label="Show older releases" />}>
          <ChevronsUpDownIcon />
        </CollapsibleTrigger>
      </div>
      <Run run={latest} />
      <CollapsibleContent className="flex flex-col gap-2">
        {older.map((run) => (
          <Run key={run.version} run={run} />
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
}
