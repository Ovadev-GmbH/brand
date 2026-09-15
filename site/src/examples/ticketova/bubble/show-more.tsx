import * as React from "react";
import { Bubble, BubbleContent, Button, Collapsible, CollapsibleContent, CollapsibleTrigger } from "@ovadev-gmbh/ui-ticketova";

const trace = `Error: upstream timeout after 30000 ms
    at postWebhook (billing/src/webhooks/deliver.ts:84:13)
    at retry (billing/src/lib/retry.ts:41:18)
    at InvoiceIssued.notify (billing/src/invoices/events.ts:122:9)
    at processTicksAndRejections (node:internal/process/task_queues:105:5)`;

export default function BubbleShowMore() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex w-full max-w-lg flex-col">
      <Bubble variant="outline">
        <BubbleContent>
          <Collapsible open={open} onOpenChange={setOpen} className="flex flex-col items-start gap-1">
            <p>The webhook to acme-logistics failed 3 times since 08:30.</p>
            <CollapsibleContent className="w-full">
              <pre className="overflow-x-auto bg-surface-quaternary p-2 text-label-12-mono">{trace}</pre>
            </CollapsibleContent>
            <CollapsibleTrigger render={<Button variant="link" size="xs" className="px-0" />}>
              {open ? "Hide stack trace" : "Show stack trace"}
            </CollapsibleTrigger>
          </Collapsible>
        </BubbleContent>
      </Bubble>
    </div>
  );
}
