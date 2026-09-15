import { Button, Collapsible, CollapsibleContent, CollapsibleTrigger } from "@ovadev-gmbh/ui-ticketova";

const lines = [
  "14:02:11  Pulling registry.ova.dev/api-gateway:4f8c2a9",
  "14:02:19  Running migration 0142_invoice_index",
  "14:02:23  Applied 0142_invoice_index in 3.8 s",
  "14:02:31  Health check passed on 3 of 3 instances",
];

export default function CollapsibleHiddenUntilFound() {
  return (
    <Collapsible className="flex w-full max-w-md flex-col gap-2">
      <div className="flex items-center justify-between gap-4">
        <span className="text-label-13">
          Deploy log <span className="text-label-13-mono text-content-secondary">4f8c2a9, UTC</span>
        </span>
        <CollapsibleTrigger render={<Button variant="outline" size="sm" />}>Show log</CollapsibleTrigger>
      </div>
      <CollapsibleContent hiddenUntilFound>
        <pre className="bg-surface-secondary p-3 text-label-13-mono whitespace-pre-wrap">{lines.join("\n")}</pre>
      </CollapsibleContent>
    </Collapsible>
  );
}
