import { Field, FieldLabel, Textarea } from "@ovadev-gmbh/ui-ovadev";

const summary = `2026-09-11 TICKETOVA 2.14.0 released.
Shop: season passes can be renewed from the confirmation e-mail.
Admission: scanners keep working for 30 minutes without a connection.
Reporting: visitors per hour, by entrance.
Fixed: a duplicate confirmation e-mail on retried payments.`;

export default function TextareaHeight() {
  return (
    <Field className="w-96">
      <FieldLabel htmlFor="textarea-height-summary">Changelog entry</FieldLabel>
      <Textarea id="textarea-height-summary" className="min-h-24 max-h-40" defaultValue={summary} />
    </Field>
  );
}
