import { Badge, Spinner } from "@ovadev-gmbh/ui-ticketova";

export default function BadgeWithSpinner() {
  return (
    <div className="flex items-center gap-3">
      <Badge variant="secondary">
        <Spinner data-icon="inline-start" />
        Building
      </Badge>
      <Badge variant="outline">
        <Spinner data-icon="inline-start" />
        Syncing
      </Badge>
    </div>
  );
}
