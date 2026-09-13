import * as React from "react";
import { Snippet } from "@ovadev-gmbh/ui-januna";

const cards = [
  { name: "CHF 60.00 gift card", code: "GIFT-60-K7PQ-2026" },
  { name: "CHF 120.00 gift card", code: "GIFT-120-M2XD-2026" },
];

export default function SnippetControlled() {
  const [copied, setCopied] = React.useState<string | null>(null);

  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      {cards.map((card) => (
        <Snippet
          key={card.code}
          prompt={false}
          text={card.code}
          copied={copied === card.name}
          onCopy={() => setCopied(card.name)}
        />
      ))}
      <span className="text-label-13 text-content-secondary">
        {copied ? `Code for the ${copied} copied` : "No code copied yet"}
      </span>
    </div>
  );
}
