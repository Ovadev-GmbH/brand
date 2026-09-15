import type { ReactNode } from "react";
import {
  Bubble,
  BubbleContent,
  Message,
  MessageContent,
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "@ovadev-gmbh/ui-ticketova";

const mono = (text: string) => <span className="text-copy-13-mono">{text}</span>;

const thread: { id: string; from: "tenant" | "ops"; text: ReactNode }[] = [
  { id: "m1", from: "tenant", text: "Hi, the invoices page returns 502s since this morning." },
  { id: "m2", from: "ops", text: "Thanks, Anna. Which tenant, and since when?" },
  { id: "m3", from: "tenant", text: <>{mono("acme-logistics")}, from about {mono("08:35")}.</> },
  { id: "m4", from: "ops", text: <>That matches deployment {mono("d-8f3a21c")} in {mono("ch-zrh-1")}.</> },
  { id: "m5", from: "ops", text: <>We are rolling it back and have opened {mono("INC-0413")}.</> },
  { id: "m6", from: "tenant", text: "Do we need to resend anything?" },
  { id: "m7", from: "ops", text: "No. Failed requests were not stored, and your integration retries them." },
  { id: "m8", from: "ops", text: <>The rollback finished at {mono("08:52")}. The page loads again.</> },
  { id: "m9", from: "tenant", text: "Confirmed on our side. Thank you." },
];

export default function MessageScrollerDemo() {
  return (
    <MessageScrollerProvider>
      <MessageScroller className="h-80 w-full max-w-md material-base">
        <MessageScrollerViewport aria-label="Support conversation with acme-logistics" className="p-3">
          <MessageScrollerContent className="gap-2">
            {thread.map((message) => (
              <MessageScrollerItem key={message.id} messageId={message.id}>
                <Message align={message.from === "ops" ? "end" : "start"}>
                  <MessageContent>
                    <Bubble variant={message.from === "ops" ? "default" : "muted"}>
                      <BubbleContent>{message.text}</BubbleContent>
                    </Bubble>
                  </MessageContent>
                </Message>
              </MessageScrollerItem>
            ))}
          </MessageScrollerContent>
        </MessageScrollerViewport>
        <MessageScrollerButton />
      </MessageScroller>
    </MessageScrollerProvider>
  );
}
