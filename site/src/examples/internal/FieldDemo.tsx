import * as React from "react";
import {
  Button,
  Checkbox,
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
  Input,
} from "@ovadev-gmbh/ui-internal";

export default function FieldDemo() {
  const [days, setDays] = React.useState("120");
  const tooLong = Number(days) > 90;

  return (
    <form
      className="w-full max-w-xl"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <FieldGroup>
        <FieldSet>
          <FieldLegend>New API key</FieldLegend>
          <FieldDescription>Scoped to the tenant. The secret is shown once.</FieldDescription>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="field-key-name">Key name</FieldLabel>
              <Input id="field-key-name" placeholder="billing-sync" autoComplete="off" />
              <FieldDescription>Appears in the audit log next to every request.</FieldDescription>
            </Field>
            <Field data-invalid={tooLong}>
              <FieldLabel htmlFor="field-key-expiry">Expires in (days)</FieldLabel>
              <Input
                id="field-key-expiry"
                type="number"
                min={1}
                className="w-32 text-label-13-mono"
                aria-invalid={tooLong}
                value={days}
                onChange={(event) => setDays(event.target.value)}
              />
              {tooLong ? (
                <FieldError>Keys live at most 90 days. Rotate instead.</FieldError>
              ) : (
                <FieldDescription>Up to 90 days.</FieldDescription>
              )}
            </Field>
          </FieldGroup>
        </FieldSet>
        <Field orientation="horizontal">
          <Checkbox id="field-key-readonly" defaultChecked />
          <FieldContent>
            <FieldLabel htmlFor="field-key-readonly">Read-only</FieldLabel>
            <FieldDescription>Can list invoices and deployments but not change them.</FieldDescription>
          </FieldContent>
        </Field>
        <Field orientation="horizontal">
          <Button type="submit">Create key</Button>
          <Button type="button" variant="outline">
            Cancel
          </Button>
        </Field>
      </FieldGroup>
    </form>
  );
}
