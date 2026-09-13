import { Kbd, KbdGroup } from "@ovadev-gmbh/ui-internal";

export default function KbdGroupExample() {
  return (
    <p className="flex flex-wrap items-center gap-2 text-label-13 text-content-secondary">
      Open the command menu with
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <Kbd>K</Kbd>
      </KbdGroup>
      or
      <KbdGroup>
        <Kbd>Ctrl</Kbd>
        <Kbd>K</Kbd>
      </KbdGroup>
    </p>
  );
}
