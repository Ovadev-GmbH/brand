import { useState } from "react";
import {
  Bubble,
  BubbleContent,
  Message,
  MessageContent,
  MessageScroller,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
  Toggle,
} from "@ovadev-gmbh/ui-januna";

const positions = ["end", "last-anchor", "start"] as const;

const thread = [
  { id: "t-1", from: "guest", text: "We have a booking for 4 on Friday at 19:00." },
  { id: "t-2", from: "host", text: "Yes, T7 is held for you. How can we help?" },
  { id: "t-3", from: "guest", text: "Could it move to 20:00?" },
  { id: "t-4", from: "host", text: "20:00 is free on the terrace. I have moved you to Terrace 2. Anything else?" },
  { id: "t-5", from: "guest", text: "One of us uses a wheelchair." },
  { id: "t-6", from: "guest", text: "Is the terrace step-free?" },
  { id: "t-7", from: "guest", text: "And is there a parking space close by?" },
  { id: "t-8", from: "guest", text: "We would arrive by car from Winterthur." },
  { id: "t-9", from: "guest", text: "Thanks, that is everything for now." },
] as const;

export default function MessageScrollerOpeningPosition() {
  const [position, setPosition] = useState<(typeof positions)[number]>("last-anchor");

  return (
    <div className="flex w-full max-w-xl flex-col gap-3">
      <div role="group" aria-label="Opening position" className="flex gap-2">
        {positions.map((p) => (
          <Toggle key={p} variant="outline" size="sm" pressed={p === position} onPressedChange={() => setPosition(p)}>
            {p}
          </Toggle>
        ))}
      </div>
      {/* A new key remounts the scroller, which is when the opening position applies. */}
      <MessageScrollerProvider key={position} defaultScrollPosition={position}>
        <MessageScroller className="h-56 material-base">
          <MessageScrollerViewport aria-label="Conversation with Chidi Okafor" className="p-3">
            <MessageScrollerContent className="gap-2">
              {thread.map((row) => (
                <MessageScrollerItem key={row.id} messageId={row.id} scrollAnchor={row.from === "host"}>
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
        </MessageScroller>
      </MessageScrollerProvider>
    </div>
  );
}
