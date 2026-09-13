import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown02Icon } from "@hugeicons/core-free-icons";
import {
  Bubble,
  BubbleContent,
  Message,
  MessageContent,
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "@ovadev-gmbh/ui-januna";

const times = ["18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30"];

const rows = Array.from({ length: 14 }, (_, index) => ({
  id: `s-${index + 1}`,
  from: index % 2 === 0 ? "guest" : "host",
  text:
    index % 2 === 0
      ? `Can our booking on ${15 + index} September move to ${times[(index / 2) % times.length]}?`
      : "Done, your table is held at the new time.",
}));

export default function MessageScrollerButtons() {
  return (
    <MessageScrollerProvider defaultScrollPosition="start">
      <MessageScroller className="h-64 w-full max-w-xl material-base">
        <MessageScrollerViewport aria-label="Conversation with Jonas Weber" className="p-3">
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
        <MessageScrollerButton direction="start" />
        <MessageScrollerButton variant="outline" size="sm">
          Latest
          <HugeiconsIcon icon={ArrowDown02Icon} strokeWidth={2} data-icon="inline-end" />
        </MessageScrollerButton>
      </MessageScroller>
    </MessageScrollerProvider>
  );
}
