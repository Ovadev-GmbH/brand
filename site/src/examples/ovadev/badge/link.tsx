import { Badge } from "@ovadev-gmbh/ui-ovadev";

export default function BadgeLink() {
  return (
    <div className="flex items-center gap-3">
      <Badge variant="secondary" render={<a href="#product-ticketova" />}>
        TICKETOVA
      </Badge>
      <Badge variant="outline" className="text-label-12-mono" render={<a href="#tag-engineering" />}>
        engineering
      </Badge>
      <Badge variant="link" className="text-label-12-mono" render={<a href="#post-2026-09-08" />}>
        2026-09-08
      </Badge>
    </div>
  );
}
