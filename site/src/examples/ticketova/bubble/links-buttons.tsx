import * as React from "react";
import { Bubble, BubbleContent, BubbleGroup } from "@ovadev-gmbh/ui-ticketova";
import { ArrowUpRightIcon } from "@ovadev-gmbh/ui-ticketova/icons";

const suggestions = ["Mark as resolved", "Escalate to billing"];

export default function BubbleLinksButtons() {
  const [sent, setSent] = React.useState<string | null>(null);

  return (
    <BubbleGroup className="w-full max-w-md">
      <Bubble variant="outline">
        <BubbleContent render={<a href="#INV-2026-0142" />}>
          <span className="flex items-center gap-2">
            <span className="text-copy-13-mono">INV-2026-0142</span>
            <span className="text-content-secondary">CHF 1'240.00, open</span>
            <ArrowUpRightIcon className="size-3.5" aria-hidden />
          </span>
        </BubbleContent>
      </Bubble>
      {sent ? (
        <Bubble align="end">
          <BubbleContent>{sent}</BubbleContent>
        </Bubble>
      ) : (
        suggestions.map((suggestion) => (
          <Bubble key={suggestion} variant="muted" align="end">
            <BubbleContent render={<button type="button" onClick={() => setSent(suggestion)} />}>{suggestion}</BubbleContent>
          </Bubble>
        ))
      )}
    </BubbleGroup>
  );
}
