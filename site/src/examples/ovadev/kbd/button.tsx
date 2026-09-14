import { Button, Kbd, KbdGroup } from "@ovadev-gmbh/ui-ovadev";

export default function KbdButton() {
  return (
    <div className="flex items-center gap-2">
      <Button variant="ghost">
        Search
        <Kbd>/</Kbd>
      </Button>
      <Button variant="outline">
        Publish post
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <Kbd>↵</Kbd>
        </KbdGroup>
      </Button>
    </div>
  );
}
