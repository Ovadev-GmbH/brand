import * as React from "react";
import {
  Bubble,
  BubbleContent,
  Button,
  Message,
  MessageContent,
  MessageScroller,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "@ovadev-gmbh/ui-ticketova";

const positions = ["end", "last-anchor", "start"] as const;

const thread = [
  { id: "t-1", from: "customer", text: "We are moving helvetia-labs to ch-zrh-1." },
  { id: "t-2", from: "support", text: "Noted. Which week suits you?" },
  { id: "t-3", from: "customer", text: "The week of 2026-09-21." },
  { id: "t-4", from: "support", text: "Booked for Saturday 2026-09-26, 02:00 CEST. What do you need from us before then?" },
  { id: "t-5", from: "customer", text: "A list of the API keys in use." },
  { id: "t-6", from: "customer", text: "And the IP ranges of ch-zrh-1 for our firewall." },
  { id: "t-7", from: "customer", text: "Also, does the tenant slug stay the same?" },
  { id: "t-8", from: "customer", text: "Our webhooks point at the old region's hostname." },
  { id: "t-9", from: "customer", text: "Thanks, that is everything for now." },
] as const;

export default function MessageScrollerOpeningPosition() {
  const [position, setPosition] = React.useState<(typeof positions)[number]>("last-anchor");

  return (
    <div className="flex w-full max-w-xl flex-col gap-3">
      <div role="group" aria-label="Opening position" className="flex gap-2">
        {positions.map((p) => (
          <Button key={p} size="sm" variant={p === position ? "default" : "outline"} aria-pressed={p === position} onClick={() => setPosition(p)}>
            {p}
          </Button>
        ))}
      </div>
      {/* A new key remounts the scroller, which is when the opening position applies. */}
      <MessageScrollerProvider key={position} defaultScrollPosition={position}>
        <MessageScroller className="h-56 border border-divider">
          <MessageScrollerViewport aria-label="Conversation with helvetia-labs" className="p-3">
            <MessageScrollerContent className="gap-2">
              {thread.map((row) => (
                <MessageScrollerItem key={row.id} messageId={row.id} scrollAnchor={row.from === "support"}>
                  <Message align={row.from === "support" ? "end" : "start"}>
                    <MessageContent>
                      <Bubble variant={row.from === "support" ? "default" : "muted"}>
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
