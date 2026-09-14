import { Badge, Spinner } from "@ovadev-gmbh/ui-ovadev";

export default function SpinnerBadge() {
  return (
    <div className="flex items-center gap-2">
      <span className="text-label-13">Seebad Zug</span>
      <Badge variant="outline">
        <Spinner data-icon="inline-start" />
        Setting up shop
      </Badge>
    </div>
  );
}
