import {
  Bubble,
  BubbleContent,
  Message,
  MessageAvatar,
  MessageContent,
  MessageFooter,
  MessageGroup,
  MessageHeader,
} from "@ovadev-gmbh/ui-januna";

export default function MessageDemo() {
  return (
    <MessageGroup className="w-full max-w-md">
      <Message>
        <MessageAvatar className="size-8 text-label-12 font-medium">AR</MessageAvatar>
        <MessageContent>
          <MessageHeader>Anna Rossi</MessageHeader>
          <Bubble variant="muted">
            <BubbleContent>
              Hi, could we move our booking tonight from 18:30 to 19:00? We are running late.
            </BubbleContent>
          </Bubble>
          <MessageFooter>17:42</MessageFooter>
        </MessageContent>
      </Message>
      <Message align="end">
        <MessageContent>
          <MessageHeader>Januna, Trattoria Sole</MessageHeader>
          <Bubble align="end">
            <BubbleContent>
              Of course. Table 7 is now held for 4 guests at 19:00. See you soon!
            </BubbleContent>
          </Bubble>
          <MessageFooter>17:44, delivered</MessageFooter>
        </MessageContent>
      </Message>
    </MessageGroup>
  );
}
