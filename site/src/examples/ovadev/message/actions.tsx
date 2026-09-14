import * as React from "react";
import {
  Bubble,
  BubbleContent,
  Button,
  Message,
  MessageContent,
  MessageFooter,
  MessageHeader,
} from "@ovadev-gmbh/ui-ovadev";
import { ChartColumnIcon, CheckIcon, CopyIcon, MailIcon } from "lucide-react";

const text = "The reporting page shows 412 season passes sold. Our till says 418.";

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
        <MessageHeader>Nina Baumann, Strandbad Türlersee</MessageHeader>
        <Bubble variant="muted">
          <BubbleContent>{text}</BubbleContent>
        </Bubble>
        <MessageFooter className="gap-1">
          <span className="mr-1 text-label-12-mono">10:02</span>
          <Button variant="ghost" size="icon-xs" aria-label={copied ? "Copied" : "Copy message"} onClick={copy}>
            {copied ? <CheckIcon /> : <CopyIcon />}
          </Button>
          <Button variant="ghost" size="icon-xs" aria-label="Open the reporting for Strandbad Türlersee">
            <ChartColumnIcon />
          </Button>
          <Button variant="ghost" size="icon-xs" aria-label="Reply by e-mail">
            <MailIcon />
          </Button>
        </MessageFooter>
      </MessageContent>
    </Message>
  );
}
