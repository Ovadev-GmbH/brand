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
    id: "turn-seats",
    topic: "Seat count",
    rows: ["Our invoice lists 14 seats, we have 11.", "Three removals were billed to the end of August.", "Can that be corrected?"],
  },
  {
    id: "turn-credit",
    topic: "Credit note",
    rows: ["Credit note CN-2026-0031 is issued.", "It covers 3 seats, CHF 87.00.", "It is deducted in September."],
  },
  {
    id: "turn-plan",
    topic: "Plan change",
    rows: ["We would like to move to Scale.", "Scale applies from 2026-10-01.", "The difference for September is CHF 184.50."],
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
          <MessageScrollerViewport aria-label="Conversation with acme-logistics" className="p-3">
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
