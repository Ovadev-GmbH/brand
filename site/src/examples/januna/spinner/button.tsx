import { Button, Spinner } from "@ovadev-gmbh/ui-januna";

export default function SpinnerButton() {
  return (
    <div className="flex items-center gap-2">
      <Button disabled>
        <Spinner data-icon="inline-start" aria-hidden />
        Confirming booking
      </Button>
      <Button variant="outline" size="sm" disabled>
        <Spinner data-icon="inline-start" aria-hidden />
        Sending reminders
      </Button>
    </div>
  );
}
