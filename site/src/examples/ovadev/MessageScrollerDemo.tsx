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
} from "@ovadev-gmbh/ui-ovadev";

const mono = (text: string) => <span className="text-copy-13-mono">{text}</span>;

const thread: { id: string; from: "customer" | "ovadev"; text: ReactNode }[] = [
  { id: "m1", from: "customer", text: "Hi, the scanner at the main entrance stopped reading tickets this morning." },
  { id: "m2", from: "ovadev", text: "Thanks, Nina. Which entrance, and since when?" },
  { id: "m3", from: "customer", text: <>The main gate at {mono("Strandbad Türlersee")}, from about {mono("08:35")}.</> },
  { id: "m4", from: "ovadev", text: <>That matches the admission app update {mono("2.14.0")} we released at {mono("08:30")}.</> },
  { id: "m5", from: "ovadev", text: <>We are rolling it back and have posted a note on {mono("status.ova.dev")}.</> },
  { id: "m6", from: "customer", text: "Do the guests need new tickets?" },
  { id: "m7", from: "ovadev", text: "No. The tickets are valid, and the scanner checks them again once it is back." },
  { id: "m8", from: "ovadev", text: <>The rollback finished at {mono("08:52")}. Scanning works again.</> },
  { id: "m9", from: "customer", text: "Confirmed at the gate. Thank you." },
];

export default function MessageScrollerDemo() {
  return (
    <MessageScrollerProvider>
      <MessageScroller className="h-80 w-full max-w-md material-base">
        <MessageScrollerViewport aria-label="Support conversation with Strandbad Türlersee" className="p-3">
          <MessageScrollerContent className="gap-2">
            {thread.map((message) => (
              <MessageScrollerItem key={message.id} messageId={message.id}>
                <Message align={message.from === "ovadev" ? "end" : "start"}>
                  <MessageContent>
                    <Bubble variant={message.from === "ovadev" ? "default" : "muted"}>
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
