import * as React from "react";
import {
  Bubble,
  BubbleContent,
  Button,
  Message,
  MessageContent,
  MessageFooter,
  MessageHeader,
} from "@ovadev-gmbh/ui-internal";
import { CheckIcon, CopyIcon, ReceiptIcon, TicketIcon } from "lucide-react";

const text = "Invoice INV-2026-0142 lists 14 seats, we only have 11.";

export default function MessageActions() {
  const [copied, setCopied] = React.useState(false);

  function copy() {
    navigator.clipboard.writeText(text).then(
      () => setCopied(true),
      () => undefined,
    );
  }

  return (
    <Message className="w-full max-w-xl">
      <MessageContent>
        <MessageHeader>Anna Roth, acme-logistics</MessageHeader>
        <Bubble variant="muted">
          <BubbleContent>{text}</BubbleContent>
        </Bubble>
        <MessageFooter className="gap-1">
          <span className="mr-1 text-label-12-mono">10:02</span>
          <Button variant="ghost" size="icon-xs" aria-label={copied ? "Copied" : "Copy message"} onClick={copy}>
            {copied ? <CheckIcon /> : <CopyIcon />}
          </Button>
          <Button variant="ghost" size="icon-xs" aria-label="Open INV-2026-0142">
            <ReceiptIcon />
          </Button>
          <Button variant="ghost" size="icon-xs" aria-label="Create ticket">
            <TicketIcon />
          </Button>
        </MessageFooter>
      </MessageContent>
    </Message>
  );
}
