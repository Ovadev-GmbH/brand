import {
  Bubble,
  BubbleContent,
  Message,
  MessageContent,
  MessageFooter,
  MessageHeader,
} from "@ovadev-gmbh/ui-internal";

export default function MessagePlainText() {
  return (
    <Message className="w-full max-w-xl">
      <MessageContent>
        <MessageHeader>Internal note, r.markant</MessageHeader>
        <Bubble variant="ghost">
          <BubbleContent>
            Refund of <span className="text-copy-13-mono">CHF 42.00</span> approved for{" "}
            <span className="text-copy-13-mono">INV-2026-0142</span>. The seats were removed on{" "}
            <span className="text-copy-13-mono">2026-08-12</span> but billed to the end of the period, which the contract does not
            allow for Scale. Credit note to follow with the September run.
          </BubbleContent>
        </Bubble>
        <MessageFooter>Only visible to the team</MessageFooter>
      </MessageContent>
    </Message>
  );
}
