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
  { id: "e-1", text: "d-8f3a21c promoted to production in ch-zrh-1." },
  { id: "e-2", text: "d-77b0e19 promoted to staging in eu-central-1." },
  { id: "e-3", text: "Nightly invoice run finished: 38 issued, 0 failed." },
];

const steps = [
  "Checked out 9a1e442.",
  "Installed 412 packages in 8.2 s.",
  "Bundled dist/server.mjs, 1.84 MB.",
  "Pushed the image to ch-zrh-1.",
  "Health checks passed on 3 of 3 instances.",
  "Drained d-8f3a21c, 0 requests dropped.",
  "Promoted d-9a1e442 to production.",
];

export default function MessageScrollerFollowing() {
  const [run, setRun] = React.useState(0);
  const [done, setDone] = React.useState(0);
  const running = run > 0 && done < steps.length;

  // Stands in for the deploy reporting its steps.
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
          <MessageScrollerViewport aria-label="Deployments channel" className="p-3">
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
                          <BubbleContent>Deploy 9a1e442 to production.</BubbleContent>
                        </Bubble>
                      </MessageContent>
                    </Message>
                  </MessageScrollerItem>
                  <MessageScrollerItem messageId={`report-${run}`}>
                    <Message>
                      <MessageContent>
                        <MessageHeader>deploy-bot</MessageHeader>
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
        Deploy 9a1e442
      </Button>
    </div>
  );
}
