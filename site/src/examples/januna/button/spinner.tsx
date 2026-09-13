import { Button, Spinner } from "@ovadev-gmbh/ui-januna";

export default function ButtonSpinner() {
  return (
    <div className="flex items-center gap-2">
      <Button disabled>
        <Spinner data-icon="inline-start" />
        Charging deposit
      </Button>
      <Button variant="outline" disabled>
        Sending reminders
        <Spinner data-icon="inline-end" />
      </Button>
    </div>
  );
}
