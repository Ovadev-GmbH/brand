import { Alert, AlertDescription, AlertTitle, Button, Field, FieldGroup, FieldLabel, Input } from "@ovadev-gmbh/ui-ovadev";
import { CircleXIcon } from "lucide-react";

export default function AlertInForm() {
  return (
    <form className="flex w-80 flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
      <Alert variant="destructive">
        <CircleXIcon />
        <AlertTitle>Not subscribed</AlertTitle>
        <AlertDescription>The newsletter list is not taking new addresses until the maintenance ends at 02:30.</AlertDescription>
      </Alert>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="alert-in-form-name">Name</FieldLabel>
          <Input id="alert-in-form-name" defaultValue="Lea Brunner" />
        </Field>
        <Field>
          <FieldLabel htmlFor="alert-in-form-slug">E-mail</FieldLabel>
          <Input id="alert-in-form-slug" className="text-label-13-mono" defaultValue="lea.brunner@tuerlersee.ch" />
        </Field>
      </FieldGroup>
      <Button type="submit" className="self-start">
        Subscribe
      </Button>
    </form>
  );
}
