import { Badge, Spinner } from "@ovadev-gmbh/ui-ovadev";

export default function BadgeWithSpinner() {
  return (
    <div className="flex items-center gap-3">
      <Badge variant="secondary">
        <Spinner data-icon="inline-start" />
        Publishing
      </Badge>
      <Badge variant="outline">
        <Spinner data-icon="inline-start" />
        Translating
      </Badge>
    </div>
  );
}
