import { Badge, Spinner } from "@ovadev-gmbh/ui-januna";

export default function BadgeWithSpinner() {
  return (
    <div className="flex items-center gap-3">
      <Badge variant="secondary">
        <Spinner data-icon="inline-start" aria-hidden />
        Charging deposit
      </Badge>
      <Badge variant="outline">
        <Spinner data-icon="inline-start" aria-hidden />
        Sending reminder
      </Badge>
    </div>
  );
}
