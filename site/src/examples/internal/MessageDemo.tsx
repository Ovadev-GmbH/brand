import {
  Avatar,
  AvatarFallback,
  Bubble,
  BubbleContent,
  Message,
  MessageAvatar,
  MessageContent,
  MessageFooter,
} from "@ovadev-gmbh/ui-internal";

export default function MessageDemo() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <Message>
        <MessageAvatar>
          <Avatar>
            <AvatarFallback>AR</AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <Bubble variant="muted">
            <BubbleContent>
              Invoice <span className="text-copy-13-mono">INV-2026-0142</span> lists 14 seats. We only have 12.
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
            <BubbleContent>
              You are right. Credit note <span className="text-copy-13-mono">CN-2026-0031</span> for{" "}
              <span className="text-copy-13-mono">CHF 177.14</span> is on its way.
            </BubbleContent>
          </Bubble>
          <MessageFooter className="gap-1">
            <span>Read</span>
            <time dateTime="2026-09-14T09:15+02:00" className="text-label-12-mono">
              09:15
            </time>
          </MessageFooter>
        </MessageContent>
      </Message>
    </div>
  );
}
