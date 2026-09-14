import { Badge } from "@ovadev-gmbh/ui-ovadev";

export default function BadgeLink() {
  return (
    <div className="flex items-center gap-3">
      <Badge variant="secondary" render={<a href="#plan-scale" />}>
        Scale
      </Badge>
      <Badge variant="outline" className="text-label-12-mono" render={<a href="#region-ch-zrh-1" />}>
        ch-zrh-1
      </Badge>
      <Badge variant="link" className="text-label-12-mono" render={<a href="#INV-2026-0142" />}>
        INV-2026-0142
      </Badge>
    </div>
  );
}
