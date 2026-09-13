import { Badge } from "@ovadev-gmbh/ui-januna";

export default function BadgeDestructive() {
  return (
    <div className="flex items-center gap-3">
      <span className="text-label-14">Huber, 19:45</span>
      <span className="text-label-13-mono text-content-secondary">CHF 60.00</span>
      <Badge variant="destructive">No-show</Badge>
    </div>
  );
}
