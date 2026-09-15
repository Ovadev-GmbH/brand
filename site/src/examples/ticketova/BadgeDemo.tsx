import { Badge } from "@ovadev-gmbh/ui-ticketova";

export default function BadgeDemo() {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-2">
        <span className="text-heading-16">helvetia-labs</span>
        <Badge variant="secondary">Trial</Badge>
      </div>
      <span className="text-label-13 text-content-secondary">
        Scale plan, trial ends <span className="text-label-13-mono">2026-09-30</span>
      </span>
    </div>
  );
}
