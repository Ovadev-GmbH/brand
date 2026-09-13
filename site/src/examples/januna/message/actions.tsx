import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Calendar03Icon, Copy01Icon, Message01Icon, Tick02Icon } from "@hugeicons/core-free-icons";
import {
  Bubble,
  BubbleContent,
  Button,
  Message,
  MessageContent,
  MessageFooter,
  MessageHeader,
} from "@ovadev-gmbh/ui-januna";

const text = "One of us has a severe nut allergy. Can the kitchen take care of that on Saturday?";

export default function MessageActions() {
  const [copied, setCopied] = useState(false);

  function copy() {
    navigator.clipboard.writeText(text).then(
      () => setCopied(true),
      () => undefined,
    );
  }

  return (
    <Message className="w-full max-w-xl">
      <MessageContent>
        <MessageHeader>Anna Keller, booking on Saturday at 19:30</MessageHeader>
        <Bubble variant="muted">
          <BubbleContent>{text}</BubbleContent>
        </Bubble>
        <MessageFooter className="gap-1">
          <time dateTime="2026-09-12T10:02+02:00" className="mr-1">
            10:02
          </time>
          <Button variant="ghost" size="icon-xs" aria-label={copied ? "Copied" : "Copy message"} onClick={copy}>
            <HugeiconsIcon icon={copied ? Tick02Icon : Copy01Icon} strokeWidth={2} />
          </Button>
          <Button variant="ghost" size="icon-xs" aria-label="Open booking for Anna Keller">
            <HugeiconsIcon icon={Calendar03Icon} strokeWidth={2} />
          </Button>
          <Button variant="ghost" size="icon-xs" aria-label="Add to booking notes">
            <HugeiconsIcon icon={Message01Icon} strokeWidth={2} />
          </Button>
        </MessageFooter>
      </MessageContent>
    </Message>
  );
}
