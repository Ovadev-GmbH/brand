import { Field, FieldLabel, Textarea } from "@ovadev-gmbh/ui-internal";

const summary = `14:02 UTC error rate on ch-zrh-1 above 5%.
14:05 UTC dpl_9f31c identified as the cause.
14:07 UTC rolled back to dpl_9e02a.
14:19 UTC queue backlog drained, error rate back to 0.1%.
Follow-up: add a canary step before production deploys.`;

export default function TextareaHeight() {
  return (
    <Field className="w-96">
      <FieldLabel htmlFor="textarea-height-summary">Incident summary</FieldLabel>
      <Textarea id="textarea-height-summary" className="min-h-24 max-h-40" defaultValue={summary} />
    </Field>
  );
}
