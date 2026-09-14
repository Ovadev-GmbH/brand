import { Badge } from "@ovadev-gmbh/ui-ovadev";

export default function BadgeDefault() {
  return (
    <div className="flex items-center gap-2">
      <span className="text-label-13-mono">acme.ova.dev</span>
      <Badge>Production</Badge>
    </div>
  );
}
