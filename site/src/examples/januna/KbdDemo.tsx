import { Kbd, KbdGroup } from "@ovadev-gmbh/ui-januna";

export default function KbdDemo() {
  return (
    <div className="flex max-w-2xl flex-col gap-4">
      <div className="flex flex-wrap items-center gap-4">
        <Kbd>⌘</Kbd>
        <Kbd>⇧</Kbd>
        <Kbd>⌥</Kbd>
        <Kbd>Ctrl</Kbd>
        <Kbd>Enter</Kbd>
        <Kbd>Esc</Kbd>
      </div>
      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
        <span className="flex items-center gap-2">
          New booking
          <KbdGroup>
            <Kbd>⌘</Kbd>
            <Kbd>N</Kbd>
          </KbdGroup>
        </span>
        <span className="flex items-center gap-2">
          Find a table
          <KbdGroup>
            <Kbd>⌘</Kbd>
            <Kbd>K</Kbd>
          </KbdGroup>
        </span>
        <span className="flex items-center gap-2">
          Next shift
          <KbdGroup>
            <Kbd>Ctrl</Kbd>
            <span>+</span>
            <Kbd>→</Kbd>
          </KbdGroup>
        </span>
      </div>
    </div>
  );
}
