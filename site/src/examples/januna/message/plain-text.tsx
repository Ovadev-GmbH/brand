import {
  Bubble,
  BubbleContent,
  Message,
  MessageContent,
  MessageFooter,
  MessageHeader,
} from "@ovadev-gmbh/ui-januna";

export default function MessagePlainText() {
  return (
    <Message className="w-full max-w-xl">
      <MessageContent>
        <MessageHeader>Note for the team, Marta at the lectern</MessageHeader>
        <Bubble variant="ghost">
          <BubbleContent>
            Keller, party of 6 at 19:30, asked for the round table. T12 is held for them from 19:15, so the two-top booked
            there at 19:00 moves to T4. Their deposit of CHF 120.00 is paid, and a birthday cake arrives at 21:00.
          </BubbleContent>
        </Bubble>
        <MessageFooter>Only visible to the team</MessageFooter>
      </MessageContent>
    </Message>
  );
}
