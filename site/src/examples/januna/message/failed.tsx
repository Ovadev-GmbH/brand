import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { AlertCircleIcon } from "@hugeicons/core-free-icons";
import {
  Bubble,
  BubbleContent,
  Button,
  Message,
  MessageContent,
  MessageFooter,
  Spinner,
} from "@ovadev-gmbh/ui-januna";

export default function MessageFailed() {
  const [retrying, setRetrying] = useState(false);

  return (
    <Message align="end" className="w-full max-w-xl">
      <MessageContent>
        <Bubble variant="destructive">
          <BubbleContent>Your table T12 is ready. Please come to the lectern.</BubbleContent>
        </Bubble>
        <MessageFooter className="gap-2">
          <span role="status" className="flex items-center gap-1 text-status-danger">
            <HugeiconsIcon icon={AlertCircleIcon} strokeWidth={2} className="size-3.5" aria-hidden />
            Not delivered: the guest's number is not reachable
          </span>
          <Button variant="outline" size="xs" disabled={retrying} onClick={() => setRetrying(true)}>
            {retrying ? <Spinner data-icon="inline-start" /> : null}
            Send again
          </Button>
        </MessageFooter>
      </MessageContent>
    </Message>
  );
}
