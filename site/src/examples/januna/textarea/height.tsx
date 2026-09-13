import { Field, FieldLabel, Textarea } from "@ovadev-gmbh/ui-januna";

const handover = `17:40 Terrace closed, rain expected from 18:00.
18:15 Moved the 19:30 party of 6 from Terrace 3 to T12.
19:05 Two walk-ins seated at the bar.
20:20 Deposit of CHF 150.00 refunded after a late cancellation.
21:10 Waitlist cleared, 112 covers served.
Tomorrow: the wine delivery comes before lunch.`;

export default function TextareaHeight() {
  return (
    <Field className="w-96">
      <FieldLabel htmlFor="textarea-height-handover">Handover for the manager</FieldLabel>
      <Textarea id="textarea-height-handover" className="min-h-32 max-h-40" defaultValue={handover} />
    </Field>
  );
}
