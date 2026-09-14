import { Button, Spinner } from "@ovadev-gmbh/ui-ovadev";

export default function SpinnerButton() {
  return (
    <div className="flex items-center gap-2">
      <Button disabled>
        <Spinner data-icon="inline-start" />
        Retrying deployment
      </Button>
      <Button variant="outline" size="sm" disabled>
        <Spinner data-icon="inline-start" />
        Sending reminders
      </Button>
    </div>
  );
}
