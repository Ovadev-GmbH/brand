import { Field, FieldContent, FieldDescription, FieldGroup, FieldLabel, Input } from "@ovadev-gmbh/ui-januna";

export default function FieldResponsive() {
  return (
    <FieldGroup className="w-full max-w-xl">
      <Field orientation="responsive">
        <FieldContent>
          <FieldLabel htmlFor="field-responsive-name">Restaurant name</FieldLabel>
          <FieldDescription>Shown on the booking page and in every confirmation.</FieldDescription>
        </FieldContent>
        <Input id="field-responsive-name" defaultValue="Lindenhof" />
      </Field>
      <Field orientation="responsive">
        <FieldContent>
          <FieldLabel htmlFor="field-responsive-email">Reservations e-mail</FieldLabel>
          <FieldDescription>Replies to confirmations arrive here.</FieldDescription>
        </FieldContent>
        <Input id="field-responsive-email" type="email" defaultValue="reservations@lindenhof.ch" />
      </Field>
    </FieldGroup>
  );
}
