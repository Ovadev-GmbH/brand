import { Bubble, BubbleContent } from "@ovadev-gmbh/ui-ovadev";

export default function BubbleDemo() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <Bubble variant="muted">
        <BubbleContent>
          Does the shop on <span className="text-copy-13-mono">tuerlersee.ticketova.ch</span> stay online over the winter?
        </BubbleContent>
      </Bubble>
      <Bubble align="end">
        <BubbleContent>
          Yes. Season passes for 2027 go on sale on <span className="text-copy-13-mono">2027-03-01</span>, day tickets from{" "}
          <span className="text-copy-13-mono">2027-05-09</span>. The reporting stays available meanwhile.
        </BubbleContent>
      </Bubble>
      <Bubble variant="muted">
        <BubbleContent>Thanks, we will link it from our website.</BubbleContent>
      </Bubble>
    </div>
  );
}
