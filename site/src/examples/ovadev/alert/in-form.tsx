import { Alert, AlertDescription, AlertTitle, Button, Field, FieldGroup, FieldLabel, Input } from "@ovadev-gmbh/ui-ovadev";
import { CircleXIcon } from "lucide-react";

export default function AlertInForm() {
  return (
    <form className="flex w-80 flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
      <Alert variant="destructive">
        <CircleXIcon />
        <AlertTitle>Tenant not created</AlertTitle>
        <AlertDescription>ch-zrh-1 takes no new tenants until the maintenance ends at 02:30 UTC.</AlertDescription>
      </Alert>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="alert-in-form-name">Display name</FieldLabel>
          <Input id="alert-in-form-name" defaultValue="Bergwerk AG" />
        </Field>
        <Field>
          <FieldLabel htmlFor="alert-in-form-slug">Slug</FieldLabel>
          <Input id="alert-in-form-slug" className="text-label-13-mono" defaultValue="bergwerk-ag" />
        </Field>
      </FieldGroup>
      <Button type="submit" className="self-start">
        Create tenant
      </Button>
    </form>
  );
}
