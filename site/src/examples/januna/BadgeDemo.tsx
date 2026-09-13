import { Badge } from "@ovadev-gmbh/ui-januna";

export default function BadgeDemo() {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-2">
        <span className="text-heading-16">Anna Keller</span>
        <Badge variant="secondary">Large party</Badge>
      </div>
      <span className="text-label-14 text-content-secondary">
        Party of 8 at <span className="text-label-13-mono">19:30</span>, table{" "}
        <span className="text-label-13-mono">T12</span>
      </span>
    </div>
  );
}
