import * as React from "react";
import { Bubble, BubbleContent, BubbleGroup } from "@ovadev-gmbh/ui-ovadev";
import { ArrowUpRightIcon } from "lucide-react";

const suggestions = ["Mark as answered", "Forward to Philip"];

export default function BubbleLinksButtons() {
  const [sent, setSent] = React.useState<string | null>(null);

  return (
    <BubbleGroup className="w-full max-w-md">
      <Bubble variant="outline">
        <BubbleContent render={<a href="#Q-2026-0142" />}>
          <span className="flex items-center gap-2">
            <span className="text-copy-13-mono">Q-2026-0142</span>
            <span className="text-content-secondary">CHF 4'800.00, open</span>
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
