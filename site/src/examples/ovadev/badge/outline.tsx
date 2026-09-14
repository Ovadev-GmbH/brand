import { Badge } from "@ovadev-gmbh/ui-ovadev";

export default function BadgeOutline() {
  return (
    <div className="flex items-center gap-2">
      <span className="text-label-13">api-gateway</span>
      <Badge variant="outline" className="text-label-12-mono">
        v2.14.0
      </Badge>
      <Badge variant="outline" className="text-label-12-mono">
        ch-zrh-1
      </Badge>
    </div>
  );
}
