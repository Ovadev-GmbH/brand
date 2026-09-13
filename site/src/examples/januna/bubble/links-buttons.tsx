import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { Bubble, BubbleContent, BubbleGroup } from "@ovadev-gmbh/ui-januna";

const suggestions = ["Confirm 19:30", "Offer 20:15 instead"];

export default function BubbleLinksButtons() {
  const [sent, setSent] = useState<string | null>(null);

  return (
    <BubbleGroup className="w-full max-w-md">
      <Bubble variant="outline">
        <BubbleContent render={<a href="#bubble-booking-JAN-4821" />}>
          <span className="flex items-center gap-2">
            <span className="text-label-13-mono">JAN-4821</span>
            <span className="text-content-secondary">Friday 19:30, party of 6</span>
            <HugeiconsIcon icon={ArrowUpRight01Icon} strokeWidth={2} className="size-3.5" aria-hidden />
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
