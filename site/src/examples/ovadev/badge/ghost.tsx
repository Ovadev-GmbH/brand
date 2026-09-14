import { Badge } from "@ovadev-gmbh/ui-ovadev";

export default function BadgeGhost() {
  return (
    <div className="flex items-center gap-2 text-label-13">
      <span>
        Deployment <span className="text-label-13-mono">4f8c2a9</span> from
      </span>
      <Badge variant="ghost" className="text-label-12-mono" render={<a href="#branch-main" />}>
        main
      </Badge>
    </div>
  );
}
