import * as React from "react";
import {
  Bubble,
  BubbleContent,
  Button,
  Message,
  MessageContent,
  MessageFooter,
  Spinner,
} from "@ovadev-gmbh/ui-internal";
import { CircleAlertIcon } from "lucide-react";

export default function MessageFailed() {
  const [retrying, setRetrying] = React.useState(false);

  return (
    <Message align="end" className="w-full max-w-xl">
      <MessageContent>
        <Bubble variant="destructive">
          <BubbleContent>The payment link for INV-2026-0142 is below. It expires on 2026-09-30.</BubbleContent>
        </Bubble>
        <MessageFooter className="gap-2">
          <span role="status" className="flex items-center gap-1 text-status-danger">
            <CircleAlertIcon className="size-3.5" aria-hidden />
            Not delivered: the mailbox billing@acme-logistics.ch is full
          </span>
          <Button variant="outline" size="xs" disabled={retrying} onClick={() => setRetrying(true)}>
            {retrying ? <Spinner data-icon="inline-start" /> : null}
            Retry
          </Button>
        </MessageFooter>
      </MessageContent>
    </Message>
  );
}
