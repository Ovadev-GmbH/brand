import { Button, Kbd, KbdGroup } from "@ovadev-gmbh/ui-januna";

export default function KbdButton() {
  return (
    <div className="flex items-center gap-2">
      <Button variant="ghost">
        Search guests
        <Kbd>/</Kbd>
      </Button>
      <Button variant="outline">
        New booking
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <Kbd>N</Kbd>
        </KbdGroup>
      </Button>
    </div>
  );
}
