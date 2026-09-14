import {
  Bubble,
  BubbleContent,
  Message,
  MessageContent,
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "@ovadev-gmbh/ui-ovadev";
import { ArrowDownIcon } from "lucide-react";

const rows = Array.from({ length: 14 }, (_, index) => ({
  id: `s-${index + 1}`,
  from: index % 2 === 0 ? "customer" : "support",
  text:
    index % 2 === 0
      ? `Payment for INV-2026-01${String(20 + index).padStart(2, "0")} was sent on 2026-09-${String(1 + index).padStart(2, "0")}.`
      : "Received and matched. The invoice is marked as paid.",
}));

export default function MessageScrollerButtons() {
  return (
    <MessageScrollerProvider defaultScrollPosition="start">
      <MessageScroller className="h-64 w-full max-w-xl border border-divider">
        <MessageScrollerViewport aria-label="Conversation with acme-logistics" className="p-3">
          <MessageScrollerContent className="gap-2">
            {rows.map((row) => (
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
        <MessageScrollerButton direction="start" />
        <MessageScrollerButton variant="outline" size="sm">
          Latest
          <ArrowDownIcon data-icon="inline-end" />
        </MessageScrollerButton>
      </MessageScroller>
    </MessageScrollerProvider>
  );
}
