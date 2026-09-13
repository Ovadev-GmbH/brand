import {
  Avatar,
  AvatarFallback,
  Bubble,
  BubbleContent,
  Message,
  MessageAvatar,
  MessageContent,
  MessageGroup,
  MessageHeader,
} from "@ovadev-gmbh/ui-januna";

const lines = [
  "We are running about 15 minutes late.",
  "The car park at the station is full.",
  "Please keep the table, we are still 6.",
];

export default function MessageGroupExample() {
  return (
    <MessageGroup className="w-full max-w-xl">
      {lines.map((line, index) => {
        const first = index === 0;
        const last = index === lines.length - 1;
        return (
          <Message key={line}>
            <MessageAvatar>
              {last ? (
                <Avatar>
                  <AvatarFallback>MR</AvatarFallback>
                </Avatar>
              ) : null}
            </MessageAvatar>
            <MessageContent>
              {first ? <MessageHeader>Marco Rossi, booking at 19:00</MessageHeader> : null}
              <Bubble variant="muted">
                <BubbleContent>{line}</BubbleContent>
              </Bubble>
            </MessageContent>
          </Message>
        );
      })}
    </MessageGroup>
  );
}
