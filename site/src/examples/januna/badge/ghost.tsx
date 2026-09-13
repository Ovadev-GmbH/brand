import { Badge } from "@ovadev-gmbh/ui-januna";

export default function BadgeGhost() {
  return (
    <div className="flex items-center gap-2 text-label-14">
      <span>Rossi, party of 2, booked through</span>
      <Badge variant="ghost" render={<a href="#badge-ghost-source" />}>
        Website
      </Badge>
    </div>
  );
}
