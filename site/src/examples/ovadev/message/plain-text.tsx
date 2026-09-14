import {
  Bubble,
  BubbleContent,
  Message,
  MessageContent,
  MessageFooter,
  MessageHeader,
} from "@ovadev-gmbh/ui-ovadev";

export default function MessagePlainText() {
  return (
    <Message className="w-full max-w-xl">
      <MessageContent>
        <MessageHeader>Note for the team, Robin</MessageHeader>
        <Bubble variant="ghost">
          <BubbleContent>
            Refund of <span className="text-copy-13-mono">CHF 42.00</span> approved for order{" "}
            <span className="text-copy-13-mono">T-2026-08814</span>. The guest bought two day tickets on{" "}
            <span className="text-copy-13-mono">2026-08-12</span>, the bath closed for a storm at 14:00, and the pool's rules
            cover that case. The refund goes out with tonight's payout.
          </BubbleContent>
        </Bubble>
        <MessageFooter>Only visible to the team</MessageFooter>
      </MessageContent>
    </Message>
  );
}
