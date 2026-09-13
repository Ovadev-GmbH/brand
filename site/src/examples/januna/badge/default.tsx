import { Badge } from "@ovadev-gmbh/ui-januna";

export default function BadgeDefault() {
  return (
    <div className="flex items-center gap-2">
      <span className="text-label-14">Moreau, party of 8</span>
      <Badge>Large party</Badge>
    </div>
  );
}
