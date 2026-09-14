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
            <BubbleContent>Our API key for bergwerk-ag stopped working this morning.</BubbleContent>
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
              Key <span className="text-copy-13-mono">ovk_live_…9f2a</span> was revoked at 07:58 CEST after it appeared in a public repository.
            </BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
      <Message align="end">
        <MessageAvatar>
          <Avatar>
            <AvatarFallback>LK</AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <Bubble>
            <BubbleContent>I have issued a new key and sent it to your account owner.</BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
    </div>
  );
}
