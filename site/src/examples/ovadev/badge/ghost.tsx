import { Badge } from "@ovadev-gmbh/ui-ovadev";

export default function BadgeGhost() {
  return (
    <div className="flex items-center gap-2 text-label-13">
      <span>
        Post <span className="text-label-13-mono">2026-09-08</span> filed under
      </span>
      <Badge variant="ghost" className="text-label-12-mono" render={<a href="#tag-engineering" />}>
        engineering
      </Badge>
    </div>
  );
}
