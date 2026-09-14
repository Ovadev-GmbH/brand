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
  useMessageScroller,
} from "@ovadev-gmbh/ui-ovadev";

const rows = [
  { id: "j-1", from: "customer", text: "Hello, a few questions about our quotes." },
  { id: "j-2", from: "customer", text: "Q-2026-0118 lists two scanners, we need three." },
  { id: "j-3", from: "support", text: "Confirmed, I have added a third scanner at CHF 890.00." },
  { id: "j-4", from: "support", text: "Do you want it delivered in September or at the season start?" },
  { id: "j-5", from: "customer", text: "September, please." },
  { id: "j-6", from: "support", text: "Done, the delivery date is 2026-09-28." },
  { id: "j-7", from: "customer", text: "Next, Q-2026-0131 still lists the old address." },
  { id: "j-8", from: "support", text: "It was issued before the change. I have reissued it." },
  { id: "j-9", from: "customer", text: "Thanks. Last one." },
  { id: "j-10", from: "customer", text: "Why is Q-2026-0142 higher than last season?" },
  { id: "j-11", from: "support", text: "It includes the reporting module for the sauna." },
  { id: "j-12", from: "support", text: "You asked for it on 2026-08-30, I can take it out again." },
] as const;

const mentions = [
  { id: "j-2", quote: "Q-2026-0118" },
  { id: "j-7", quote: "Q-2026-0131" },
  { id: "j-10", quote: "Q-2026-0142" },
];

function Mentions() {
  const { scrollToMessage, scrollToStart, scrollToEnd } = useMessageScroller();

  return (
    <nav aria-label="Quotes in this conversation" className="flex flex-wrap items-center gap-2">
      <Button variant="ghost" size="xs" onClick={() => scrollToStart({ behavior: "smooth" })}>
        First
      </Button>
      {mentions.map((mention) => (
        <Button
          key={mention.id}
          variant="outline"
          size="xs"
          onClick={() => scrollToMessage(mention.id, { align: "center", behavior: "smooth" })}
        >
          <span className="text-label-12-mono">{mention.quote}</span>
        </Button>
      ))}
      <Button variant="ghost" size="xs" onClick={() => scrollToEnd({ behavior: "smooth" })}>
        Latest
      </Button>
    </nav>
  );
}

export default function MessageScrollerJump() {
  return (
    <div className="flex w-full max-w-xl flex-col gap-3">
      <MessageScrollerProvider defaultScrollPosition="start">
        <Mentions />
        <MessageScroller className="h-56 border border-divider">
          <MessageScrollerViewport aria-label="Conversation with Gemeinde Cham" className="p-3">
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
        </MessageScroller>
      </MessageScrollerProvider>
    </div>
  );
}
