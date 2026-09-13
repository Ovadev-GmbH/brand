import * as React from "react";
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

type Row = { id: string; from: "customer" | "support"; text: string };

const history: Row[] = [
  { id: "m-1", from: "customer", text: "Our August invoice shows 14 seats." },
  { id: "m-2", from: "support", text: "Let me check INV-2026-0142 for you." },
  { id: "m-3", from: "customer", text: "We removed three people on 2026-08-12." },
  { id: "m-4", from: "support", text: "I see the removals. The seats were billed to the end of the period." },
  { id: "m-5", from: "customer", text: "Can that be credited?" },
];

const script = [
  { reply: "I have issued credit note CN-2026-0031 for 3 seats, CHF 87.00.", answer: "Thank you, that works for us." },
  { reply: "It is deducted from the September invoice.", answer: "Will the PDF of INV-2026-0142 change?" },
  { reply: "No, the credit note is a document of its own.", answer: "Understood, closing this on our side." },
];

export default function MessageScrollerAnchors() {
  const [rows, setRows] = React.useState(history);
  const [turn, setTurn] = React.useState(0);
  const next = script[turn];

  function send() {
    if (!next) return;
    setRows((current) => [...current, { id: `reply-${turn}`, from: "support", text: next.reply }]);
    setTurn(turn + 1);
    // Stands in for the customer answering.
    setTimeout(() => {
      setRows((current) => [...current, { id: `answer-${turn}`, from: "customer", text: next.answer }]);
    }, 800);
  }

  return (
    <div className="flex w-full max-w-xl flex-col gap-3">
      <MessageScrollerProvider>
        <MessageScroller className="h-64 border border-divider">
          <MessageScrollerViewport aria-label="Conversation with acme-logistics" className="p-3">
            <MessageScrollerContent className="gap-2">
              {rows.map((row) => (
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
          <MessageScrollerButton />
        </MessageScroller>
      </MessageScrollerProvider>
      <Button variant="outline" size="sm" className="self-start" disabled={!next} onClick={send}>
        Send reply
      </Button>
    </div>
  );
}
