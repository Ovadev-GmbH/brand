import { Badge } from "@ovadev-gmbh/ui-januna";

export default function BadgeSecondary() {
  return (
    <div className="flex items-center gap-2">
      <span className="text-label-14">Graf, party of 3</span>
      <Badge variant="secondary">Walk-in</Badge>
    </div>
  );
}
