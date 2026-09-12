import { Button, Kbd, KbdGroup } from "@ovadev-gmbh/ui-internal";

export default function KbdDemo() {
  return (
    <div className="flex w-full max-w-xl flex-wrap items-center gap-3">
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <Kbd>K</Kbd>
      </KbdGroup>
      <KbdGroup className="text-label-13 text-content-tertiary">
        <Kbd>Ctrl</Kbd>
        <span>+</span>
        <Kbd>Shift</Kbd>
        <span>+</span>
        <Kbd>D</Kbd>
      </KbdGroup>
      <Kbd>Esc</Kbd>
      <span className="text-label-13 text-content-secondary">
        Search audit log <Kbd>/</Kbd>
      </span>
      <Button variant="outline">
        Deploy
        <Kbd>⏎</Kbd>
      </Button>
    </div>
  );
}
