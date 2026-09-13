import { useEffect, useState } from "react";
import {
  Bubble,
  BubbleContent,
  Button,
  Message,
  MessageContent,
  MessageHeader,
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "@ovadev-gmbh/ui-januna";

const earlier = [
  { id: "e-1", text: "Okafor, party of 4, seated at T7 at 19:02." },
  { id: "e-2", text: "Meier, party of 2, added to the waitlist at 19:10." },
  { id: "e-3", text: "Rossi, party of 6, added to the waitlist at 19:14." },
];

const steps = [
  "T12 cleared at 20:41.",
  "Text message sent to Marco Rossi.",
  "Delivered at 20:42.",
  "Marco Rossi replied: on our way, 3 minutes.",
  "Party of 6 checked in at the lectern.",
  "Seated at T12 at 20:47.",
];

export default function MessageScrollerFollowing() {
  const [run, setRun] = useState(0);
  const [done, setDone] = useState(0);
  const running = run > 0 && done < steps.length;

  // Stands in for Januna reporting each step as it happens.
  useEffect(() => {
    if (run === 0) return;
    let count = 0;
    const timer = setInterval(() => {
      count += 1;
      setDone(count);
      if (count >= steps.length) clearInterval(timer);
    }, 700);
    return () => clearInterval(timer);
  }, [run]);

  return (
    <div className="flex w-full max-w-xl flex-col gap-3">
      <MessageScrollerProvider autoScroll>
        <MessageScroller className="h-64 material-base">
          <MessageScrollerViewport aria-label="Waitlist activity" className="p-3">
            <MessageScrollerContent className="gap-2">
              {earlier.map((row) => (
                <MessageScrollerItem key={row.id} messageId={row.id}>
                  <Bubble variant="outline">
                    <BubbleContent>{row.text}</BubbleContent>
                  </Bubble>
                </MessageScrollerItem>
              ))}
              {run > 0 ? (
                <>
                  <MessageScrollerItem messageId={`request-${run}`} scrollAnchor>
                    <Message align="end">
                      <MessageContent>
                        <Bubble>
                          <BubbleContent>Tell the Rossi party their table is ready.</BubbleContent>
                        </Bubble>
                      </MessageContent>
                    </Message>
                  </MessageScrollerItem>
                  <MessageScrollerItem messageId={`report-${run}`}>
                    <Message>
                      <MessageContent>
                        <MessageHeader>Januna</MessageHeader>
                        <Bubble variant="outline">
                          <BubbleContent>
                            <ol className="flex flex-col gap-1">
                              {done === 0 ? <li>Waiting for T12 to be cleared.</li> : null}
                              {steps.slice(0, done).map((step) => (
                                <li key={step}>{step}</li>
                              ))}
                            </ol>
                          </BubbleContent>
                        </Bubble>
                      </MessageContent>
                    </Message>
                  </MessageScrollerItem>
                </>
              ) : null}
            </MessageScrollerContent>
          </MessageScrollerViewport>
          <MessageScrollerButton />
        </MessageScroller>
      </MessageScrollerProvider>
      <Button
        variant="outline"
        size="sm"
        className="self-start"
        disabled={running}
        onClick={() => {
          setDone(0);
          setRun((r) => r + 1);
        }}
      >
        Notify the Rossi party
      </Button>
    </div>
  );
}
