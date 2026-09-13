import { HugeiconsIcon } from "@hugeicons/react";
import { TickDouble02Icon } from "@hugeicons/core-free-icons";
import {
  Bubble,
  BubbleContent,
  Message,
  MessageContent,
  MessageFooter,
  MessageHeader,
} from "@ovadev-gmbh/ui-januna";

export default function MessageHeaderFooter() {
  return (
    <div className="flex w-full max-w-xl flex-col gap-4">
      <Message>
        <MessageContent>
          <MessageHeader>Chidi Okafor, booking at 19:00</MessageHeader>
          <Bubble variant="muted">
            <BubbleContent>Is there a high chair for our daughter tonight?</BubbleContent>
          </Bubble>
          <MessageFooter>
            <time dateTime="2026-09-12T17:42+02:00">17:42</time>
          </MessageFooter>
        </MessageContent>
      </Message>
      <Message align="end">
        <MessageContent>
          <MessageHeader>Marta, Trattoria Sole</MessageHeader>
          <Bubble>
            <BubbleContent>Yes, one is set at T7 for you, party of 4 at 19:00.</BubbleContent>
          </Bubble>
          <MessageFooter className="gap-1">
            <HugeiconsIcon icon={TickDouble02Icon} strokeWidth={2} className="size-3.5" aria-hidden />
            <span>Read</span>
            <time dateTime="2026-09-12T17:44+02:00">17:44</time>
          </MessageFooter>
        </MessageContent>
      </Message>
    </div>
  );
}
