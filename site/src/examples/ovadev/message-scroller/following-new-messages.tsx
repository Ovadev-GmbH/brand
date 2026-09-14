import * as React from "react";
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
} from "@ovadev-gmbh/ui-ovadev";

const earlier = [
  { id: "e-1", text: "Blog post \"A season at Türlersee in numbers\" published on ova.dev." },
  { id: "e-2", text: "Press kit updated to 2026-09, 12.4 MB." },
  { id: "e-3", text: "August newsletter sent: 1'188 delivered, 0 bounced." },
];

const steps = [
  "Rendered the issue in DE and EN.",
  "Checked 38 links, 0 broken.",
  "Queued 1'204 recipients.",
  "Sent 400 of 1'204.",
  "Sent 800 of 1'204.",
  "Sent 1'204 of 1'204, 0 bounced.",
  "Archived the issue on ova.dev/blog.",
];

export default function MessageScrollerFollowing() {
  const [run, setRun] = React.useState(0);
  const [done, setDone] = React.useState(0);
  const running = run > 0 && done < steps.length;

  // Stands in for the mailer reporting its steps.
  React.useEffect(() => {
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
        <MessageScroller className="h-64 border border-divider">
          <MessageScrollerViewport aria-label="Site channel" className="p-3">
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
                          <BubbleContent>Send the September newsletter.</BubbleContent>
                        </Bubble>
                      </MessageContent>
                    </Message>
                  </MessageScrollerItem>
                  <MessageScrollerItem messageId={`report-${run}`}>
                    <Message>
                      <MessageContent>
                        <MessageHeader>site-bot</MessageHeader>
                        <Bubble variant="outline">
                          <BubbleContent>
                            <ol className="flex flex-col gap-1">
                              {done === 0 ? <li>Queued.</li> : null}
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
        Send the September newsletter
      </Button>
    </div>
  );
}
