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
} from "@ovadev-gmbh/ui-januna";

const conversation = [
  { id: "m1", from: "guest", text: "Good evening, we have a table for 6 at 19:30, under Keller." },
  { id: "m2", from: "host", text: "Good evening, Ms Keller. T12 on the terrace is ready for you." },
  { id: "m3", from: "guest", text: "Lovely. One of us is vegan, is that alright?" },
  { id: "m4", from: "host", text: "Of course. The kitchen has a vegan risotto and a sorbet tonight." },
  { id: "m5", from: "guest", text: "It is also my mother's birthday. Could you bring a candle with dessert?" },
  { id: "m6", from: "host", text: "With pleasure. We will bring it out at 21:00." },
  { id: "m7", from: "guest", text: "We are running about ten minutes late, sorry." },
  { id: "m8", from: "host", text: "No trouble at all. We will hold T12 for you until 19:45." },
  { id: "m9", from: "guest", text: "Thank you, see you soon." },
];

export default function MessageScrollerDemo() {
  return (
    <MessageScrollerProvider>
      <MessageScroller className="h-80 w-full max-w-md material-base">
        <MessageScrollerViewport aria-label="Conversation with Nina Keller" className="p-4">
          <MessageScrollerContent className="gap-3">
            {conversation.map((message) => (
              <MessageScrollerItem key={message.id} messageId={message.id}>
                <Message align={message.from === "host" ? "end" : "start"}>
                  <MessageContent>
                    <Bubble variant={message.from === "host" ? "default" : "muted"}>
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
