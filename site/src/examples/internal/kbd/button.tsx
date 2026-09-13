import { Button, Kbd, KbdGroup } from "@ovadev-gmbh/ui-internal";

export default function KbdButton() {
  return (
    <div className="flex items-center gap-2">
      <Button variant="ghost">
        Search
        <Kbd>/</Kbd>
      </Button>
      <Button variant="outline">
        Retry deployment
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <Kbd>R</Kbd>
        </KbdGroup>
      </Button>
    </div>
  );
}
