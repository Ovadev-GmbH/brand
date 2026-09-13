import { useState } from "react";
import {
  Bubble,
  BubbleContent,
  Button,
  Marker,
  MarkerContent,
  Message,
  MessageContent,
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "@ovadev-gmbh/ui-januna";

const thread = [
  "Hello, we would like to book the private room in October.",
  "Of course. Which date, and for how many guests?",
  "Saturday 18 October, 14 guests.",
  "The private room is free that evening from 19:00.",
  "Is there a set menu for groups?",
  "Yes, three courses at CHF 78.00 per guest.",
  "That works. Do you need a deposit?",
  "For the private room we ask CHF 300.00, paid online.",
  "Paid just now.",
  "Received. The room is yours on 18 October at 19:00.",
  "Can we bring flowers for the table?",
  "Please do. We will put them in water when you arrive.",
  "Thank you.",
  "Anything else we can do for the evening?",
].map((text, index) => ({ id: `p-${index + 1}`, from: index % 2 === 0 ? "guest" : "host", text }));

export default function MessageScrollerLoadingEarlier() {
  const [first, setFirst] = useState(9);

  return (
    <MessageScrollerProvider>
      <MessageScroller className="h-64 w-full max-w-xl material-base">
        <MessageScrollerViewport aria-label="Conversation with Sofia Santos" className="p-3">
          <MessageScrollerContent className="gap-2">
            {first > 0 ? (
              <Button variant="ghost" size="xs" className="self-center" onClick={() => setFirst((f) => Math.max(0, f - 4))}>
                Load earlier messages
              </Button>
            ) : (
              <Marker variant="separator">
                <MarkerContent>Conversation opened on 2 September</MarkerContent>
              </Marker>
            )}
            {thread.slice(first).map((row) => (
              <MessageScrollerItem key={row.id} messageId={row.id}>
                <Message align={row.from === "host" ? "end" : "start"}>
                  <MessageContent>
                    <Bubble variant={row.from === "host" ? "default" : "muted"}>
                      <BubbleContent>{row.text}</BubbleContent>
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
  );
}
