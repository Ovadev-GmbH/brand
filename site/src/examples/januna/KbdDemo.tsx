import { Kbd, KbdGroup } from "@ovadev-gmbh/ui-januna";

export default function KbdDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Kbd>⌘</Kbd>
      <Kbd>⇧</Kbd>
      <Kbd>Ctrl</Kbd>
      <Kbd>Enter</Kbd>
      <Kbd>Esc</Kbd>
      <span className="ml-3 flex items-center gap-2 text-label-13 text-content-secondary">
        Find a table
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
        </KbdGroup>
      </span>
    </div>
  );
}
