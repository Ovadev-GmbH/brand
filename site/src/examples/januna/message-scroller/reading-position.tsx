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
} from "@ovadev-gmbh/ui-januna";

const turns = [
  {
    id: "turn-party",
    topic: "Party size",
    rows: ["We are now 8 instead of 6.", "T12 seats 8, so nothing changes for you.", "Great, thank you."],
  },
  {
    id: "turn-diet",
    topic: "Dietary needs",
    rows: ["Two of us are vegan.", "The kitchen has a vegan menu of three courses.", "Perfect."],
  },
  {
    id: "turn-deposit",
    topic: "Deposit",
    rows: ["Is there a deposit for 8?", "Yes, CHF 20.00 per guest, CHF 160.00 in total.", "Paid just now."],
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
        Rows in view <span className="text-content-primary">{visibleMessageIds.length}</span>
      </span>
    </p>
  );
}

export default function MessageScrollerReadingPosition() {
  return (
    <div className="flex w-full max-w-xl flex-col gap-3">
      <MessageScrollerProvider defaultScrollPosition="start">
        <Position />
        <MessageScroller className="h-56 material-base">
          <MessageScrollerViewport aria-label="Conversation with Anna Keller" className="p-3">
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
