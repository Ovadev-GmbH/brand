import { Badge } from "@ovadev-gmbh/ui-januna";

export default function BadgeLink() {
  return (
    <div className="flex items-center gap-3">
      <Badge variant="secondary" render={<a href="#badge-link-dinner" />}>
        Dinner
      </Badge>
      <Badge variant="outline" className="text-label-12-mono" render={<a href="#badge-link-t12" />}>
        T12
      </Badge>
      <Badge variant="link" className="text-label-12-mono" render={<a href="#badge-link-booking" />}>
        BK-20417
      </Badge>
    </div>
  );
}
