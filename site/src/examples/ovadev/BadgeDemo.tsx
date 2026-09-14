import { Badge } from "@ovadev-gmbh/ui-ovadev";

export default function BadgeDemo() {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-2">
        <span className="text-heading-16">JANUNA</span>
        <Badge variant="secondary">Coming soon</Badge>
      </div>
      <span className="text-label-13 text-content-secondary">
        Restaurant operations, first restaurants from <span className="text-label-13-mono">2026-10-01</span>
      </span>
    </div>
  );
}
