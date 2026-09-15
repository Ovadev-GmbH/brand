import {
  Button,
  Checkbox,
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  Input,
} from "@ovadev-gmbh/ui-ticketova";

export default function FieldDemo() {
  return (
    <form className="w-full max-w-sm" onSubmit={(event) => event.preventDefault()}>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="field-demo-name">Key name</FieldLabel>
          <Input id="field-demo-name" placeholder="billing-sync" autoComplete="off" spellCheck={false} />
          <FieldDescription>Appears in the audit log next to every request.</FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="field-demo-expiry">Expires in (days)</FieldLabel>
          <Input id="field-demo-expiry" type="number" min={1} max={90} defaultValue={90} className="text-label-13-mono" />
          <FieldDescription>Up to 90 days. Rotate the key before it runs out.</FieldDescription>
        </Field>
        <Field orientation="horizontal">
          <Checkbox id="field-demo-readonly" defaultChecked />
          <FieldLabel htmlFor="field-demo-readonly">Read-only</FieldLabel>
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
