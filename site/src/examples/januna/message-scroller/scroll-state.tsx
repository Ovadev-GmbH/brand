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
} from "@ovadev-gmbh/ui-januna";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const rows = Array.from({ length: 12 }, (_, index) => ({
  id: `st-${index + 1}`,
  from: index % 2 === 0 ? "guest" : "host",
  text:
    index % 2 === 0
      ? `Is there a table for 2 on ${days[index / 2]} at 20:00?`
      : "Yes, T3 is free then. Shall I book it for you?",
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
        <MessageScroller className="h-56 material-base">
          <MessageScrollerViewport aria-label="Conversation with Sofia Santos" className="p-3">
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
