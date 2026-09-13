import * as React from "react";
import { Bubble, BubbleContent, BubbleGroup, BubbleReactions, Button } from "@ovadev-gmbh/ui-internal";
import { CheckIcon, CopyIcon } from "lucide-react";

export default function BubbleWithReactions() {
  const [acknowledged, setAcknowledged] = React.useState(false);

  return (
    <BubbleGroup className="w-full max-w-md gap-8 py-3">
      <Bubble variant="muted">
        <BubbleContent>Deployment d-8f3a21c is live in ch-zrh-1.</BubbleContent>
        <BubbleReactions>
          <CheckIcon className="size-3.5" aria-hidden />
          <span className="text-label-12-mono">2</span>
          <span className="sr-only">confirmations</span>
        </BubbleReactions>
      </Bubble>
      <Bubble align="end">
        <BubbleContent>Rolling back bergwerk-ag to d-77b0e19.</BubbleContent>
        <BubbleReactions side="top" align="start">
          <Button
            variant="ghost"
            size="icon-xs"
            aria-label="Acknowledge"
            aria-pressed={acknowledged}
            onClick={() => setAcknowledged((a) => !a)}
          >
            <CheckIcon />
          </Button>
          <Button variant="ghost" size="icon-xs" aria-label="Copy message">
            <CopyIcon />
          </Button>
        </BubbleReactions>
      </Bubble>
    </BubbleGroup>
  );
}
