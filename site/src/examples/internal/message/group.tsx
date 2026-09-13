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
} from "@ovadev-gmbh/ui-internal";

const lines = [
  "We are moving helvetia-labs from eu-central-1 to ch-zrh-1.",
  "Is there downtime while the data is copied?",
  "Our window would be Saturday, 02:00 to 04:00 CEST.",
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
                  <AvatarFallback>SW</AvatarFallback>
                </Avatar>
              ) : null}
            </MessageAvatar>
            <MessageContent>
              {first ? <MessageHeader>Sandra Weber, helvetia-labs</MessageHeader> : null}
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
