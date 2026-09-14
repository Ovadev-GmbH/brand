import { Button, Collapsible, CollapsibleContent, CollapsibleTrigger } from "@ovadev-gmbh/ui-ovadev";

const lines = [
  "14:02:11  Reading tariff_2026.csv, 14 rows",
  "14:02:19  Created 14 ticket types",
  "14:02:23  Set season 2026-05-09 to 2026-09-13",
  "14:02:31  Shop for Strandbad Türlersee is open",
];

export default function CollapsibleHiddenUntilFound() {
  return (
    <Collapsible className="flex w-full max-w-md flex-col gap-2">
      <div className="flex items-center justify-between gap-4">
        <span className="text-label-13">
          Import log <span className="text-label-13-mono text-content-secondary">tariff_2026.csv, CEST</span>
        </span>
        <CollapsibleTrigger render={<Button variant="outline" size="sm" />}>Show log</CollapsibleTrigger>
      </div>
      <CollapsibleContent hiddenUntilFound>
        <pre className="bg-surface-secondary p-3 text-label-13-mono whitespace-pre-wrap">{lines.join("\n")}</pre>
      </CollapsibleContent>
    </Collapsible>
  );
}
