import {
  Bubble,
  BubbleContent,
  Message,
  MessageContent,
  MessageFooter,
  MessageHeader,
} from "@ovadev-gmbh/ui-internal";
import { CheckCheckIcon } from "lucide-react";

export default function MessageHeaderFooter() {
  return (
    <div className="flex w-full max-w-xl flex-col gap-4">
      <Message>
        <MessageContent>
          <MessageHeader>Jonas Frei, bergwerk-ag</MessageHeader>
          <Bubble variant="muted">
            <BubbleContent>Can we move from Team to Scale before the next invoice run?</BubbleContent>
          </Bubble>
          <MessageFooter>
            <time dateTime="2026-09-13T09:12+02:00" className="text-label-12-mono">
              09:12
            </time>
          </MessageFooter>
        </MessageContent>
      </Message>
      <Message align="end">
        <MessageContent>
          <MessageHeader>l.keller, support</MessageHeader>
          <Bubble>
            <BubbleContent>
              Done. Scale applies from <span className="text-copy-13-mono">2026-10-01</span>, and the difference for September is{" "}
              <span className="text-copy-13-mono">CHF 184.50</span>.
            </BubbleContent>
          </Bubble>
          <MessageFooter className="gap-1">
            <CheckCheckIcon className="size-3.5" aria-hidden />
            <span>Read</span>
            <time dateTime="2026-09-13T09:15+02:00" className="text-label-12-mono">
              09:15
            </time>
          </MessageFooter>
        </MessageContent>
      </Message>
    </div>
  );
}
