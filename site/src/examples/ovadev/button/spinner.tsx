import { Button, Spinner } from "@ovadev-gmbh/ui-ovadev";

export default function ButtonSpinner() {
  return (
    <div className="flex items-center gap-2">
      <Button disabled>
        <Spinner data-icon="inline-start" />
        Deploying
      </Button>
      <Button variant="outline" disabled>
        Exporting
        <Spinner data-icon="inline-end" />
      </Button>
    </div>
  );
}
