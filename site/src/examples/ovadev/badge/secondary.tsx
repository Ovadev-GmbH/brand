import { Badge } from "@ovadev-gmbh/ui-ovadev";

export default function BadgeSecondary() {
  return (
    <div className="flex items-center gap-2">
      <span className="text-label-13">JANUNA</span>
      <Badge variant="secondary">Coming soon</Badge>
    </div>
  );
}
