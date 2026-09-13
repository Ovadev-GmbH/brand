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

type Row = { id: string; from: "guest" | "host"; text: string };

const history: Row[] = [
  { id: "m-1", from: "guest", text: "We would like to book for 8 on Saturday at 19:30." },
  { id: "m-2", from: "host", text: "Saturday 19:30 is free for 8. Shall I hold T12 for you?" },
  { id: "m-3", from: "guest", text: "Yes please. It is a 40th birthday." },
  { id: "m-4", from: "host", text: "Held. For parties of 8 we ask a deposit of CHF 20.00 per guest." },
  { id: "m-5", from: "guest", text: "Can we pay it at the lectern instead?" },
];

const script = [
  { reply: "We need it online by Thursday, CHF 160.00 in total. The link is in your booking.", answer: "Paid, thank you." },
  { reply: "Received. Booking JAN-4821 is confirmed.", answer: "Can we bring our own cake?" },
  { reply: "Of course. We keep it cold and serve it at 21:00.", answer: "Perfect, see you on Saturday." },
];

export default function MessageScrollerAnchors() {
  const [rows, setRows] = useState(history);
  const [turn, setTurn] = useState(0);
  const next = script[turn];

  function send() {
    if (!next) return;
    setRows((current) => [...current, { id: `reply-${turn}`, from: "host", text: next.reply }]);
    setTurn(turn + 1);
    // Stands in for the guest answering.
    setTimeout(() => {
      setRows((current) => [...current, { id: `answer-${turn}`, from: "guest", text: next.answer }]);
    }, 800);
  }

  return (
    <div className="flex w-full max-w-xl flex-col gap-3">
      <MessageScrollerProvider>
        <MessageScroller className="h-64 material-base">
          <MessageScrollerViewport aria-label="Conversation with Anna Keller" className="p-3">
            <MessageScrollerContent className="gap-2">
              {rows.map((row) => (
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
          <MessageScrollerButton />
        </MessageScroller>
      </MessageScrollerProvider>
      <Button variant="outline" size="sm" className="self-start" disabled={!next} onClick={send}>
        Send reply
      </Button>
    </div>
  );
}
