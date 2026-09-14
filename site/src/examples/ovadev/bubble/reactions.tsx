import * as React from "react";
import { Bubble, BubbleContent, BubbleGroup, BubbleReactions, Button } from "@ovadev-gmbh/ui-ovadev";
import { CheckIcon, CopyIcon } from "lucide-react";

export default function BubbleWithReactions() {
  const [acknowledged, setAcknowledged] = React.useState(false);

  return (
    <BubbleGroup className="w-full max-w-md gap-8 py-3">
      <Bubble variant="muted">
        <BubbleContent>The post "A season at Türlersee in numbers" is live on ova.dev/blog.</BubbleContent>
        <BubbleReactions>
          <CheckIcon className="size-3.5" aria-hidden />
          <span className="text-label-12-mono">2</span>
          <span className="sr-only">confirmations</span>
        </BubbleReactions>
      </Bubble>
      <Bubble align="end">
        <BubbleContent>Reverting the Cham shop to version 2.13.2.</BubbleContent>
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
