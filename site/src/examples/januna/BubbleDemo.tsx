import { Bubble, BubbleContent } from "@ovadev-gmbh/ui-januna";

export default function BubbleDemo() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <Bubble variant="muted">
        <BubbleContent>Hello, is there a table for 6 on Saturday around 20:00?</BubbleContent>
      </Bubble>
      <Bubble align="end">
        <BubbleContent>Good evening. T12 is free at 20:00, shall I book it for you?</BubbleContent>
      </Bubble>
      <Bubble variant="muted">
        <BubbleContent>Yes please, under Brunner. Thank you!</BubbleContent>
      </Bubble>
    </div>
  );
}
