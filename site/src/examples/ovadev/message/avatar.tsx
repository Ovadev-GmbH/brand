import {
  Avatar,
  AvatarFallback,
  Bubble,
  BubbleContent,
  Message,
  MessageAvatar,
  MessageContent,
} from "@ovadev-gmbh/ui-ovadev";
import { BotIcon } from "lucide-react";

export default function MessageWithAvatar() {
  return (
    <div className="flex w-full max-w-xl flex-col gap-4">
      <Message>
        <MessageAvatar>
          <Avatar>
            <AvatarFallback>JF</AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <Bubble variant="muted">
            <BubbleContent>The logo in our TICKETOVA shop is still the old one from 2024.</BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
      <Message>
        <MessageAvatar className="size-8 text-content-secondary">
          <BotIcon className="size-4" aria-label="System" />
        </MessageAvatar>
        <MessageContent>
          <Bubble variant="outline">
            <BubbleContent>
              The file <span className="text-copy-13-mono">logo-gemeinde-cham.svg</span> arrived through the contact form at 07:58 CEST and is waiting for review.
            </BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
      <Message align="end">
        <MessageAvatar>
          <Avatar>
            <AvatarFallback>RM</AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <Bubble>
            <BubbleContent>Swapped. The shop shows the new logo since 08:10.</BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
    </div>
  );
}
