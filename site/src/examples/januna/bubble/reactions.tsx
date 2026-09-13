import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Copy01Icon, ThumbsUpIcon, Tick02Icon } from "@hugeicons/core-free-icons";
import { Bubble, BubbleContent, BubbleGroup, BubbleReactions, Button } from "@ovadev-gmbh/ui-januna";

export default function BubbleWithReactions() {
  const [seen, setSeen] = useState(false);

  return (
    <BubbleGroup className="w-full max-w-md gap-8 py-3">
      <Bubble align="end">
        <BubbleContent>Your table T12 is ready. Please come to the lectern.</BubbleContent>
        <BubbleReactions>
          <HugeiconsIcon icon={ThumbsUpIcon} strokeWidth={2} className="size-3.5" aria-hidden />
          <span className="text-label-12">1</span>
          <span className="sr-only">like from the guest</span>
        </BubbleReactions>
      </Bubble>
      <Bubble variant="muted">
        <BubbleContent>We are at the bar, coming over now.</BubbleContent>
        <BubbleReactions side="top" align="end">
          <Button
            variant="ghost"
            size="icon-xs"
            aria-label="Mark as seen"
            aria-pressed={seen}
            onClick={() => setSeen((s) => !s)}
          >
            <HugeiconsIcon icon={Tick02Icon} strokeWidth={2} />
          </Button>
          <Button variant="ghost" size="icon-xs" aria-label="Copy message">
            <HugeiconsIcon icon={Copy01Icon} strokeWidth={2} />
          </Button>
        </BubbleReactions>
      </Bubble>
    </BubbleGroup>
  );
}
