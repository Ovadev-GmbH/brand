import { Bubble, BubbleContent } from "@ovadev-gmbh/ui-ovadev";

export default function BubbleAlign() {
  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <Bubble variant="muted">
        <BubbleContent>Is the Türlersee shop affected by the outage?</BubbleContent>
      </Bubble>
      <Bubble align="end">
        <BubbleContent>No, only the reporting page. The status page is updated.</BubbleContent>
      </Bubble>
    </div>
  );
}
