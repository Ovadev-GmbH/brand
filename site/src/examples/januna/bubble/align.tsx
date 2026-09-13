import { Bubble, BubbleContent } from "@ovadev-gmbh/ui-januna";

export default function BubbleAlign() {
  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <Bubble variant="muted">
        <BubbleContent>Can we bring our dog to the terrace?</BubbleContent>
      </Bubble>
      <Bubble align="end">
        <BubbleContent>Yes, dogs are welcome outside. We will bring a bowl of water.</BubbleContent>
      </Bubble>
    </div>
  );
}
