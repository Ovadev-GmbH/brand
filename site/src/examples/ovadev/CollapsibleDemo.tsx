import {
  Button,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@ovadev-gmbh/ui-ovadev";
import { ChevronsUpDownIcon } from "lucide-react";

type Deployment = { id: string; result: string; duration: string };

const latest: Deployment = { id: "4f8c2a9", result: "Live", duration: "2m 14s" };
const older: Deployment[] = [
  { id: "b31e07d", result: "Replaced", duration: "2m 09s" },
  { id: "9d02c5f", result: "Rolled back", duration: "3m 41s" },
];

function Run({ run }: { run: Deployment }) {
  return (
    <div className="material-base flex items-center gap-3 px-3 py-2 text-label-13">
      <span className="text-label-13-mono">{run.id}</span>
      <span className="flex-1 text-content-secondary">{run.result}</span>
      <span className="text-label-13-mono text-content-secondary">{run.duration}</span>
    </div>
  );
}

export default function CollapsibleDemo() {
  return (
    <Collapsible className="flex w-full max-w-sm flex-col gap-2">
      <div className="flex items-center justify-between gap-4">
        <span className="text-heading-14">api-gateway deployments</span>
        <CollapsibleTrigger render={<Button variant="ghost" size="icon-sm" aria-label="Show older deployments" />}>
          <ChevronsUpDownIcon />
        </CollapsibleTrigger>
      </div>
      <Run run={latest} />
      <CollapsibleContent className="flex flex-col gap-2">
        {older.map((run) => (
          <Run key={run.id} run={run} />
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
}
