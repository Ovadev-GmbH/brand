import { Badge } from "@ovadev-gmbh/ui-januna";

export default function BadgeOutline() {
  return (
    <div className="flex items-center gap-2">
      <span className="text-label-14">Keller, 19:30</span>
      <Badge variant="outline" className="text-label-12-mono">
        T12
      </Badge>
      <Badge variant="outline">Dining room</Badge>
    </div>
  );
}
