import { Bubble, BubbleContent } from "@ovadev-gmbh/ui-ticketova";

export default function BubbleDemo() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <Bubble variant="muted">
        <BubbleContent>
          Is the maintenance on <span className="text-copy-13-mono">ch-zrh-1</span> still on for Saturday?
        </BubbleContent>
      </Bubble>
      <Bubble align="end">
        <BubbleContent>
          Yes, <span className="text-copy-13-mono">02:00</span> to <span className="text-copy-13-mono">04:00</span> CEST.
          The API stays read-only meanwhile.
        </BubbleContent>
      </Bubble>
      <Bubble variant="muted">
        <BubbleContent>Thanks, we will pause our imports until then.</BubbleContent>
      </Bubble>
    </div>
  );
}
