import { Badge, Spinner } from "@ovadev-gmbh/ui-januna";

export default function SpinnerBadge() {
  return (
    <div className="flex items-center gap-2">
      <span className="text-label-14">Moreau, party of 8</span>
      <Badge variant="outline">
        <Spinner data-icon="inline-start" aria-hidden />
        Charging deposit
      </Badge>
    </div>
  );
}
