import {
  Bubble,
  BubbleContent,
  Marker,
  MarkerContent,
  Message,
  MessageContent,
  MessageScroller,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
  useMessageScrollerVisibility,
} from "@ovadev-gmbh/ui-ovadev";

const turns = [
  {
    id: "turn-passes",
    topic: "Season passes",
    rows: ["Our reporting lists 412 passes, the till says 418.", "Six were sold at the door and paid in cash.", "Can they be added to the report?"],
  },
  {
    id: "turn-refund",
    topic: "Refund",
    rows: ["The refund for order T-2026-08814 is issued.", "It covers 2 day tickets, CHF 42.00.", "It is on the payout of 2026-09-15."],
  },
  {
    id: "turn-scanner",
    topic: "Third scanner",
    rows: ["We would like a third scanner for the main gate.", "It ships on 2026-09-28.", "The price is CHF 890.00."],
  },
];

function Position() {
  const { currentAnchorId, visibleMessageIds } = useMessageScrollerVisibility();
  const topic = turns.find((turn) => turn.id === currentAnchorId)?.topic ?? "None";

  return (
    <p className="flex gap-6 text-label-12 text-content-secondary">
      <span>
        Reading <span className="text-content-primary">{topic}</span>
      </span>
      <span>
        Rows in view <span className="text-label-12-mono text-content-primary">{visibleMessageIds.length}</span>
      </span>
    </p>
  );
}

export default function MessageScrollerReadingPosition() {
  return (
    <div className="flex w-full max-w-xl flex-col gap-3">
      <MessageScrollerProvider defaultScrollPosition="start">
        <Position />
        <MessageScroller className="h-56 border border-divider">
          <MessageScrollerViewport aria-label="Conversation with Strandbad Türlersee" className="p-3">
            <MessageScrollerContent className="gap-2">
              {turns.map((turn) => [
                <MessageScrollerItem key={turn.id} messageId={turn.id} scrollAnchor>
                  <Marker variant="separator">
                    <MarkerContent>{turn.topic}</MarkerContent>
                  </Marker>
                </MessageScrollerItem>,
                ...turn.rows.map((text, index) => (
                  <MessageScrollerItem key={`${turn.id}-${index}`} messageId={`${turn.id}-${index}`}>
                    <Message align={index % 2 === 1 ? "end" : "start"}>
                      <MessageContent>
                        <Bubble variant={index % 2 === 1 ? "default" : "muted"}>
                          <BubbleContent>{text}</BubbleContent>
                        </Bubble>
                      </MessageContent>
                    </Message>
                  </MessageScrollerItem>
                )),
              ])}
            </MessageScrollerContent>
          </MessageScrollerViewport>
        </MessageScroller>
      </MessageScrollerProvider>
    </div>
  );
}
