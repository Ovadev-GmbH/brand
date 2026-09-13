import { Bubble, BubbleContent, BubbleGroup } from "@ovadev-gmbh/ui-januna";

export default function BubbleGroupExample() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <BubbleGroup>
        <Bubble variant="muted">
          <BubbleContent>We booked for 4 on Friday at 19:30.</BubbleContent>
        </Bubble>
        <Bubble variant="muted">
          <BubbleContent>Two more friends would like to join.</BubbleContent>
        </Bubble>
      </BubbleGroup>
      <BubbleGroup>
        <Bubble align="end">
          <BubbleContent>No problem, a party of 6 fits at T12.</BubbleContent>
        </Bubble>
        <Bubble align="end">
          <BubbleContent>I have moved your booking there.</BubbleContent>
        </Bubble>
        <Bubble align="end">
          <BubbleContent>The deposit stays at CHF 120.00.</BubbleContent>
        </Bubble>
      </BubbleGroup>
    </div>
  );
}
