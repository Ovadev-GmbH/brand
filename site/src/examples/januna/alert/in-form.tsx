import { Alert, AlertDescription, AlertTitle, Button, Field, FieldGroup, FieldLabel, Input } from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { AlertCircleIcon } from "@hugeicons/core-free-icons";

export default function AlertInForm() {
  return (
    <form className="flex w-80 flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
      <Alert variant="destructive">
        <HugeiconsIcon icon={AlertCircleIcon} strokeWidth={2} />
        <AlertTitle>Booking not saved</AlertTitle>
        <AlertDescription>Bookings are paused while the floor plan is edited. Try again in a few minutes.</AlertDescription>
      </Alert>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="alert-in-form-guest">Guest name</FieldLabel>
          <Input id="alert-in-form-guest" defaultValue="Anna Keller" />
        </Field>
        <Field>
          <FieldLabel htmlFor="alert-in-form-party">Party size</FieldLabel>
          <Input id="alert-in-form-party" type="number" defaultValue={6} className="text-label-14-mono" />
        </Field>
      </FieldGroup>
      <Button type="submit" className="self-start">
        Save booking
      </Button>
    </form>
  );
}
