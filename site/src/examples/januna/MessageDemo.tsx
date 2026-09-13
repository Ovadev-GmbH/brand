import {
  Avatar,
  AvatarFallback,
  Bubble,
  BubbleContent,
  Message,
  MessageAvatar,
  MessageContent,
  MessageFooter,
} from "@ovadev-gmbh/ui-januna";

export default function MessageDemo() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <Message>
        <MessageAvatar>
          <Avatar>
            <AvatarFallback>LB</AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <Bubble variant="muted">
            <BubbleContent>Hello, we booked for 6 at 19:30. Could we sit outside if it stays dry?</BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
      <Message align="end">
        <MessageAvatar>
          <Avatar>
            <AvatarFallback>TS</AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <Bubble>
            <BubbleContent>Of course. Terrace 3 is set for you, and we will move you inside if it rains.</BubbleContent>
          </Bubble>
          <MessageFooter className="gap-1">
            <span>Read</span>
            <time dateTime="2026-09-12T17:44+02:00">17:44</time>
          </MessageFooter>
        </MessageContent>
      </Message>
    </div>
  );
}
