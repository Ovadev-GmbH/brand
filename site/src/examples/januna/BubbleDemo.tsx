import { HugeiconsIcon } from "@hugeicons/react";
import { ThumbsUpIcon } from "@hugeicons/core-free-icons";
import { Bubble, BubbleContent, BubbleGroup, BubbleReactions } from "@ovadev-gmbh/ui-januna";

export default function BubbleDemo() {
  return (
    <BubbleGroup className="w-full max-w-md">
      <Bubble variant="muted">
        <BubbleContent>Hi, is there a table for 6 on the patio on Saturday around 20:00?</BubbleContent>
      </Bubble>
      <Bubble align="end">
        <BubbleContent>Yes, Patio 2 is free at 20:15. I have held it for 15 minutes.</BubbleContent>
        <BubbleReactions>
          <HugeiconsIcon icon={ThumbsUpIcon} strokeWidth={2} className="size-3.5" />
          <span className="text-label-12">1</span>
        </BubbleReactions>
      </Bubble>
      <Bubble variant="outline">
        <BubbleContent>Perfect, please book it under Brunner.</BubbleContent>
      </Bubble>
      <Bubble variant="tinted" align="end">
        <BubbleContent>Booked. A confirmation is on its way to your phone.</BubbleContent>
      </Bubble>
    </BubbleGroup>
  );
}
