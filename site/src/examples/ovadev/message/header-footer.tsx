import {
  Bubble,
  BubbleContent,
  Message,
  MessageContent,
  MessageFooter,
  MessageHeader,
} from "@ovadev-gmbh/ui-ovadev";
import { CheckCheckIcon } from "lucide-react";

export default function MessageHeaderFooter() {
  return (
    <div className="flex w-full max-w-xl flex-col gap-4">
      <Message>
        <MessageContent>
          <MessageHeader>Jonas Frei, Gemeinde Cham</MessageHeader>
          <Bubble variant="muted">
            <BubbleContent>Can we add the sauna to the season pass before the pre-sale starts?</BubbleContent>
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
          <MessageHeader>Philip, Ovadev</MessageHeader>
          <Bubble>
            <BubbleContent>
              Done. The sauna is on the pass from <span className="text-copy-13-mono">2026-09-21</span>, and the pass price is{" "}
              <span className="text-copy-13-mono">CHF 480.00</span>.
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
