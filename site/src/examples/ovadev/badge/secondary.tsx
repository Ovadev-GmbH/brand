import { Badge } from "@ovadev-gmbh/ui-ovadev";

export default function BadgeSecondary() {
  return (
    <div className="flex items-center gap-2">
      <span className="text-label-13">helvetia-labs</span>
      <Badge variant="secondary">Trial</Badge>
    </div>
  );
}
