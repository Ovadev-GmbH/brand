import { Bubble, BubbleContent } from "@ovadev-gmbh/ui-internal";

export default function BubbleAlign() {
  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <Bubble variant="muted">
        <BubbleContent>Is ch-zrh-1 affected by the incident?</BubbleContent>
      </Bubble>
      <Bubble align="end">
        <BubbleContent>No, only eu-central-1. The status page is updated.</BubbleContent>
      </Bubble>
    </div>
  );
}
