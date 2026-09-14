import { Bubble, BubbleContent, BubbleGroup } from "@ovadev-gmbh/ui-ovadev";

export default function BubbleGroupExample() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <BubbleGroup>
        <Bubble variant="muted">
          <BubbleContent>The sales export for August is empty.</BubbleContent>
        </Bubble>
        <Bubble variant="muted">
          <BubbleContent>Strandbad Türlersee, report sales-2026-08.</BubbleContent>
        </Bubble>
      </BubbleGroup>
      <BubbleGroup>
        <Bubble align="end">
          <BubbleContent>The export ran before the last till sync.</BubbleContent>
        </Bubble>
        <Bubble align="end">
          <BubbleContent>I have started it again.</BubbleContent>
        </Bubble>
        <Bubble align="end">
          <BubbleContent>It lists 212 rows now.</BubbleContent>
        </Bubble>
      </BubbleGroup>
    </div>
  );
}
