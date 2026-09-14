import * as React from "react";
import { Bubble, BubbleContent, Button, Collapsible, CollapsibleContent, CollapsibleTrigger } from "@ovadev-gmbh/ui-ovadev";

const trace = `Error: upstream timeout after 30000 ms
    at postPaymentNotice (shop/src/payments/notify.ts:84:13)
    at retry (shop/src/lib/retry.ts:41:18)
    at OrderPaid.notify (shop/src/orders/events.ts:122:9)
    at processTicksAndRejections (node:internal/process/task_queues:105:5)`;

export default function BubbleShowMore() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex w-full max-w-lg flex-col">
      <Bubble variant="outline">
        <BubbleContent>
          <Collapsible open={open} onOpenChange={setOpen} className="flex flex-col items-start gap-1">
            <p>The payment notice to Strandbad Türlersee failed 3 times since 08:30.</p>
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
