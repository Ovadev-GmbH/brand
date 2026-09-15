import { Separator } from "@ovadev-gmbh/ui-ticketova";

export default function SeparatorVertical() {
  return (
    <div className="flex h-5 items-center gap-3 text-label-13">
      <span className="text-label-13-mono">d-8f3a21c</span>
      <Separator orientation="vertical" />
      <span>production</span>
      <Separator orientation="vertical" />
      <span className="text-label-13-mono">ch-zrh-1</span>
      <Separator orientation="vertical" />
      <span className="text-label-13-mono text-content-secondary">2026-09-12 14:03 CEST</span>
    </div>
  );
}
