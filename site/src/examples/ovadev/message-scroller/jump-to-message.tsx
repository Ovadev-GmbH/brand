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
  { id: "j-1", from: "customer", text: "Hello, a few questions about our invoices." },
  { id: "j-2", from: "customer", text: "INV-2026-0118 was paid twice in June." },
  { id: "j-3", from: "support", text: "Confirmed, the second payment of CHF 1'240.00 arrived on 2026-06-19." },
  { id: "j-4", from: "support", text: "Do you want it refunded or carried forward?" },
  { id: "j-5", from: "customer", text: "Carried forward, please." },
  { id: "j-6", from: "support", text: "Done, it shows as a credit on the account." },
  { id: "j-7", from: "customer", text: "Next, INV-2026-0131 still lists the old address." },
  { id: "j-8", from: "support", text: "It was issued before the change. I have reissued it." },
  { id: "j-9", from: "customer", text: "Thanks. Last one." },
  { id: "j-10", from: "customer", text: "Why is INV-2026-0142 higher than August?" },
  { id: "j-11", from: "support", text: "Three seats were billed to the end of the period." },
  { id: "j-12", from: "support", text: "Credit note CN-2026-0031 corrects it." },
] as const;

const mentions = [
  { id: "j-2", invoice: "INV-2026-0118" },
  { id: "j-7", invoice: "INV-2026-0131" },
  { id: "j-10", invoice: "INV-2026-0142" },
];

function Mentions() {
  const { scrollToMessage, scrollToStart, scrollToEnd } = useMessageScroller();

  return (
    <nav aria-label="Invoices in this conversation" className="flex flex-wrap items-center gap-2">
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
          <span className="text-label-12-mono">{mention.invoice}</span>
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
        </MessageScroller>
      </MessageScrollerProvider>
    </div>
  );
}
