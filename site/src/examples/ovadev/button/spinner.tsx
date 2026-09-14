import { Button, Spinner } from "@ovadev-gmbh/ui-ovadev";

export default function ButtonSpinner() {
  return (
    <div className="flex items-center gap-2">
      <Button disabled>
        <Spinner data-icon="inline-start" />
        Sending
      </Button>
      <Button variant="outline" disabled>
        Preparing download
        <Spinner data-icon="inline-end" />
      </Button>
    </div>
  );
}
