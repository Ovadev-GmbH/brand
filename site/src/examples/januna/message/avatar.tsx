import { HugeiconsIcon } from "@hugeicons/react";
import { Calendar03Icon } from "@hugeicons/core-free-icons";
import {
  Avatar,
  AvatarFallback,
  Bubble,
  BubbleContent,
  Message,
  MessageAvatar,
  MessageContent,
} from "@ovadev-gmbh/ui-januna";

export default function MessageWithAvatar() {
  return (
    <div className="flex w-full max-w-xl flex-col gap-4">
      <Message>
        <MessageAvatar>
          <Avatar>
            <AvatarFallback>LB</AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <Bubble variant="muted">
            <BubbleContent>Could we sit outside tonight if it stays dry?</BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
      <Message>
        <MessageAvatar className="size-8 text-content-secondary">
          <HugeiconsIcon icon={Calendar03Icon} strokeWidth={2} className="size-4" role="img" aria-label="Januna" />
        </MessageAvatar>
        <MessageContent>
          <Bubble variant="outline">
            <BubbleContent>Booking moved from T4 to Terrace 3 by Marta at 18:12.</BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
      <Message align="end">
        <MessageAvatar>
          <Avatar>
            <AvatarFallback>MB</AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <Bubble>
            <BubbleContent>Terrace 3 is yours at 19:30. We will move you inside if it rains.</BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
    </div>
  );
}
