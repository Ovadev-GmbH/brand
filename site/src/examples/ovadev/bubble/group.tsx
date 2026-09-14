import { Bubble, BubbleContent, BubbleGroup } from "@ovadev-gmbh/ui-ovadev";

export default function BubbleGroupExample() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <BubbleGroup>
        <Bubble variant="muted">
          <BubbleContent>The export for August is empty.</BubbleContent>
        </Bubble>
        <Bubble variant="muted">
          <BubbleContent>Tenant helvetia-labs, report usage-2026-08.</BubbleContent>
        </Bubble>
      </BubbleGroup>
      <BubbleGroup>
        <Bubble align="end">
          <BubbleContent>The job ran before the last usage sync.</BubbleContent>
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
