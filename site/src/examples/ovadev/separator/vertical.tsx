import { Separator } from "@ovadev-gmbh/ui-ovadev";

export default function SeparatorVertical() {
  return (
    <div className="flex h-5 items-center gap-3 text-label-13">
      <span className="text-label-13-mono">2026-09-12</span>
      <Separator orientation="vertical" />
      <span>Engineering</span>
      <Separator orientation="vertical" />
      <span className="text-label-13-mono">Robin</span>
      <Separator orientation="vertical" />
      <span className="text-label-13-mono text-content-secondary">6 min read</span>
    </div>
  );
}
