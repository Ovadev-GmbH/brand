import { CheckIcon } from "lucide-react";
import { Bubble, BubbleContent, BubbleGroup, BubbleReactions } from "@ovadev-gmbh/ui-internal";

export default function BubbleDemo() {
  return (
    <BubbleGroup className="w-full max-w-xl">
      <Bubble variant="muted">
        <BubbleContent>Can you rotate the API key for nordlicht? Their old one leaked in a CI log.</BubbleContent>
      </Bubble>
      <Bubble align="end">
        <BubbleContent>
          Rotated. New key ends in <span className="text-label-12-mono">…c31e</span>, old one revoked.
        </BubbleContent>
        <BubbleReactions>
          <CheckIcon className="size-3.5" />
          <span className="text-label-12">1</span>
        </BubbleReactions>
      </Bubble>
      <Bubble variant="outline">
        <BubbleContent>Thanks. Please add a note to the audit log as well.</BubbleContent>
      </Bubble>
      <Bubble variant="secondary" align="end">
        <BubbleContent>Logged as api_key.rotated at 09:12.</BubbleContent>
      </Bubble>
    </BubbleGroup>
  );
}
