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
  useMessageScrollerScrollable,
} from "@ovadev-gmbh/ui-ticketova";

const rows = Array.from({ length: 12 }, (_, index) => ({
  id: `st-${index + 1}`,
  from: index % 2 === 0 ? "customer" : "support",
  text:
    index % 2 === 0
      ? `Is ${["ch-zrh-1", "eu-central-1"][index % 4 === 0 ? 0 : 1]} affected by incident INC-0413?`
      : "Not any more. The fix was deployed with d-8f3a21c at 14:03 CEST.",
}));

function Status() {
  const { end } = useMessageScrollerScrollable();
  const { scrollToEnd } = useMessageScroller();

  return (
    <div className="flex h-7 items-center justify-between gap-3">
      <p role="status" className="text-label-12 text-content-secondary">
        {end ? "Newer messages below" : "At the latest message"}
      </p>
      {end ? (
        <Button variant="outline" size="xs" onClick={() => scrollToEnd({ behavior: "smooth" })}>
          Jump to latest
        </Button>
      ) : null}
    </div>
  );
}

export default function MessageScrollerScrollState() {
  return (
    <div className="flex w-full max-w-xl flex-col gap-2">
      <MessageScrollerProvider defaultScrollPosition="start">
        <Status />
        <MessageScroller className="h-56 border border-divider">
          <MessageScrollerViewport aria-label="Conversation with bergwerk-ag" className="p-3">
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
