import { Kbd, KbdGroup } from "@ovadev-gmbh/ui-januna";

export default function KbdGroupExample() {
  return (
    <p className="m-0 flex flex-wrap items-center gap-2 text-label-13 text-content-secondary">
      Find a booking with
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
