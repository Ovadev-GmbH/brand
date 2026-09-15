import { Badge } from "@ovadev-gmbh/ui-ticketova";

export default function BadgeDestructive() {
  return (
    <div className="flex items-center gap-3">
      <span className="text-label-13-mono">INV-2026-0139</span>
      <span className="text-label-13-mono text-content-secondary">CHF 49.00</span>
      <Badge variant="destructive">Overdue</Badge>
    </div>
  );
}
