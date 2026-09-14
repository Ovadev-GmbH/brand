import * as React from "react";
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
} from "@ovadev-gmbh/ui-ovadev";

const thread = [
  "Hello, we would like to add a second contact for the shop.",
  "Sure. Which address should receive the daily sales report?",
  "bad@cham.ch, in addition to the current one.",
  "Added. Both receive the report from 2026-09-03 onwards.",
  "Can refund notices go only to bad@cham.ch?",
  "Yes, refund notices now go to bad@cham.ch only.",
  "Thanks. One more thing: our VAT number changed.",
  "Please send the new one and the date it applies from.",
  "CHE-114.227.905 MWST, from 2026-09-01.",
  "Updated. The September invoice will carry it.",
  "Will August be reissued?",
  "No, August was issued before the change and stays as it is.",
  "Understood.",
  "Anything else I can do for Gemeinde Cham today?",
].map((text, index) => ({ id: `b-${index + 1}`, from: index % 2 === 0 ? "customer" : "support", text }));

export default function MessageScrollerLoadingEarlier() {
  const [first, setFirst] = React.useState(9);

  return (
    <MessageScrollerProvider>
      <MessageScroller className="h-64 w-full max-w-xl border border-divider">
        <MessageScrollerViewport aria-label="Conversation with Gemeinde Cham" className="p-3">
          <MessageScrollerContent className="gap-2">
            {first > 0 ? (
              <Button variant="ghost" size="xs" className="self-center" onClick={() => setFirst((f) => Math.max(0, f - 4))}>
                Load earlier messages
              </Button>
            ) : (
              <Marker variant="separator">
                <MarkerContent>
                  Conversation opened <span className="text-label-12-mono">2026-09-02</span>
                </MarkerContent>
              </Marker>
            )}
            {thread.slice(first).map((row) => (
              <MessageScrollerItem key={row.id} messageId={row.id}>
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
        <MessageScrollerButton />
      </MessageScroller>
    </MessageScrollerProvider>
  );
}
