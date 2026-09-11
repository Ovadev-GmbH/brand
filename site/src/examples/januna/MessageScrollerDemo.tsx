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
} from "@ovadev-gmbh/ui-januna";

type Entry = { id: number; from: "guest" | "host"; text: string };

const seed: Entry[] = Array.from({ length: 14 }, (_, i) => ({
  id: i + 1,
  from: i % 2 === 0 ? "guest" : "host",
  text:
    i % 2 === 0
      ? `Is a table for ${2 + (i % 4)} free at ${18 + (i % 4)}:00 tonight?`
      : `Yes, Table ${3 + i} is available. Shall I hold it for you?`,
}));

export default function MessageScrollerDemo() {
  const [entries, setEntries] = useState(seed);

  const add = () => {
    setEntries((current) => [
      ...current,
      {
        id: current.length + 1,
        from: current.length % 2 === 0 ? "guest" : "host",
        text: current.length % 2 === 0 ? "Great, please hold it." : "Done. Booking confirmed.",
      },
    ]);
  };

  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <MessageScrollerProvider>
        <MessageScroller className="h-80 rounded-2xl border">
          <MessageScrollerViewport className="p-4">
            <MessageScrollerContent className="gap-3">
              {entries.map((entry) => (
                <MessageScrollerItem key={entry.id} messageId={String(entry.id)}>
                  <Message align={entry.from === "host" ? "end" : "start"}>
                    <MessageContent>
                      <Bubble
                        variant={entry.from === "host" ? "default" : "muted"}
                        align={entry.from === "host" ? "end" : "start"}
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
