import {
  Avatar,
  AvatarFallback,
  Bubble,
  BubbleContent,
  Message,
  MessageAvatar,
  MessageContent,
  MessageFooter,
} from "@ovadev-gmbh/ui-ovadev";

export default function MessageDemo() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <Message>
        <MessageAvatar>
          <Avatar>
            <AvatarFallback>NB</AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <Bubble variant="muted">
            <BubbleContent>
              The reporting page shows <span className="text-copy-13-mono">412</span> season passes. Our till says 418.
            </BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
      <Message align="end">
        <MessageAvatar>
          <Avatar>
            <AvatarFallback>PH</AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <Bubble>
            <BubbleContent>
              Six were sold at the door and paid in cash. The till syncs at{" "}
              <span className="text-copy-13-mono">18:00</span>, then the page lists{" "}
              <span className="text-copy-13-mono">418</span>.
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
