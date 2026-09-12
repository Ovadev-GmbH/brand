import {
  Avatar,
  AvatarFallback,
  Bubble,
  BubbleContent,
  Message,
  MessageAvatar,
  MessageContent,
  MessageFooter,
  MessageGroup,
  MessageHeader,
} from "@ovadev-gmbh/ui-internal";

export default function MessageDemo() {
  return (
    <MessageGroup className="w-full max-w-xl">
      <Message>
        <MessageAvatar>
          <Avatar>
            <AvatarFallback>LK</AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <MessageHeader>l.keller, support</MessageHeader>
          <Bubble variant="muted">
            <BubbleContent>
              Tenant acme-gmbh reports 502s on the invoices endpoint since the 08:30 deploy.
            </BubbleContent>
          </Bubble>
          <MessageFooter>
            <span className="text-label-12-mono">08:41</span>
          </MessageFooter>
        </MessageContent>
      </Message>
      <Message align="end">
        <MessageAvatar>
          <Avatar>
            <AvatarFallback>RM</AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <MessageHeader>r.markant, ops</MessageHeader>
          <Bubble align="end">
            <BubbleContent>
              Confirmed, d-8f3a21c is being rolled back. Opening INC-0413.
            </BubbleContent>
          </Bubble>
          <MessageFooter>
            <span className="text-label-12-mono">08:44</span>
          </MessageFooter>
        </MessageContent>
      </Message>
    </MessageGroup>
  );
}
