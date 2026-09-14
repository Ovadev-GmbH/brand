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
} from "@ovadev-gmbh/ui-ovadev";

type Row = { id: string; from: "customer" | "support"; text: string };

const history: Row[] = [
  { id: "m-1", from: "customer", text: "Our reporting shows 412 season passes." },
  { id: "m-2", from: "support", text: "Let me check the sales for Strandbad Türlersee." },
  { id: "m-3", from: "customer", text: "We sold six at the door on 2026-08-12." },
  { id: "m-4", from: "support", text: "I see the till entries. They were paid in cash and not synced yet." },
  { id: "m-5", from: "customer", text: "Can they be added to the report?" },
];

const script = [
  { reply: "I have synced the till. The report lists 418 passes now.", answer: "Thank you, that matches." },
  { reply: "The sync runs every hour from now on.", answer: "Will the August PDF change?" },
  { reply: "No, the August PDF stays as it was exported.", answer: "Understood, closing this on our side." },
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
          <MessageScrollerViewport aria-label="Conversation with Strandbad Türlersee" className="p-3">
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
