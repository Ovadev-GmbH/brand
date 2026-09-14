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
} from "@ovadev-gmbh/ui-ovadev";

const lines = [
  "We are opening the Hallenbad Cham on 2026-10-03.",
  "Can the shop sell season passes before that date?",
  "Our pre-sale would start on Monday, 2026-09-21.",
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
              {first ? <MessageHeader>Sandra Weber, Gemeinde Cham</MessageHeader> : null}
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
