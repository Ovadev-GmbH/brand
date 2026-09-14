import { Badge } from "@ovadev-gmbh/ui-ovadev";

export default function BadgeDestructive() {
  return (
    <div className="flex items-center gap-3">
      <span className="text-label-13-mono">Pool season 2026</span>
      <span className="text-label-13-mono text-content-secondary">2026-09-13</span>
      <Badge variant="destructive">Ended</Badge>
    </div>
  );
}
