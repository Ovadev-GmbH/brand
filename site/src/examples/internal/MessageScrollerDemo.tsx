import { useState } from "react";
import {
  Bubble,
  BubbleContent,
  Button,
  Message,
  MessageContent,
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "@ovadev-gmbh/ui-internal";

type Entry = { id: number; from: "tenant" | "ops"; text: string };

const seed: Entry[] = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  from: i % 2 === 0 ? "tenant" : "ops",
  text:
    i % 2 === 0
      ? `Invoice INV-2026-01${String(30 + i).padStart(2, "0")} still shows as unpaid on our side.`
      : `Checked, the payment landed on ${1 + (i % 9)} September. Marking it as settled now.`,
}));

export default function MessageScrollerDemo() {
  const [entries, setEntries] = useState(seed);

  const add = () => {
    setEntries((current) => [
      ...current,
      {
        id: current.length + 1,
        from: current.length % 2 === 0 ? "tenant" : "ops",
        text: current.length % 2 === 0 ? "Thanks, that matches our ledger." : "Done. Ticket closed.",
      },
    ]);
  };

  return (
    <div className="flex w-full max-w-xl flex-col gap-3">
      <MessageScrollerProvider>
        <MessageScroller className="h-56 border">
          <MessageScrollerViewport className="p-3">
            <MessageScrollerContent className="gap-2">
              {entries.map((entry) => (
                <MessageScrollerItem key={entry.id} messageId={String(entry.id)}>
                  <Message align={entry.from === "ops" ? "end" : "start"}>
                    <MessageContent>
                      <Bubble
                        variant={entry.from === "ops" ? "default" : "muted"}
                        align={entry.from === "ops" ? "end" : "start"}
                      >
                        <BubbleContent>{entry.text}</BubbleContent>
                      </Bubble>
                    </MessageContent>
                  </Message>
                </MessageScrollerItem>
              ))}
            </MessageScrollerContent>
          </MessageScrollerViewport>
          <MessageScrollerButton />
        </MessageScroller>
      </MessageScrollerProvider>
      <Button variant="outline" size="sm" className="self-start" onClick={add}>
        Add message
      </Button>
    </div>
  );
}
