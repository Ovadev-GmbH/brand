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
} from "@ovadev-gmbh/ui-januna";

const rows = [
  { id: "j-1", from: "guest", text: "Hello, a few questions about our three bookings." },
  { id: "j-2", from: "guest", text: "First, Friday 19:30 for 6: can we add one guest?" },
  { id: "j-3", from: "host", text: "Yes, T12 seats 7. The deposit becomes CHF 140.00." },
  { id: "j-4", from: "host", text: "Shall I charge the difference of CHF 20.00?" },
  { id: "j-5", from: "guest", text: "Please do." },
  { id: "j-6", from: "host", text: "Done, the booking now reads party of 7." },
  { id: "j-7", from: "guest", text: "Next, Saturday lunch for 2: can it move to 13:00?" },
  { id: "j-8", from: "host", text: "13:00 is free. I have moved it." },
  { id: "j-9", from: "guest", text: "Thanks. Last one." },
  { id: "j-10", from: "guest", text: "Sunday 18:00 for 4: is the terrace open that evening?" },
  { id: "j-11", from: "host", text: "It is, if the weather holds." },
  { id: "j-12", from: "host", text: "Terrace 2 is held for you, with T9 inside if it rains." },
] as const;

const mentions = [
  { id: "j-2", booking: "Friday 19:30" },
  { id: "j-7", booking: "Saturday lunch" },
  { id: "j-10", booking: "Sunday 18:00" },
];

function Mentions() {
  const { scrollToMessage, scrollToStart, scrollToEnd } = useMessageScroller();

  return (
    <nav aria-label="Bookings in this conversation" className="flex flex-wrap items-center gap-2">
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
          {mention.booking}
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
        <MessageScroller className="h-56 material-base">
          <MessageScrollerViewport aria-label="Conversation with Lea Brunner" className="p-3">
            <MessageScrollerContent className="gap-2">
              {rows.map((row) => (
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
        </MessageScroller>
      </MessageScrollerProvider>
    </div>
  );
}
