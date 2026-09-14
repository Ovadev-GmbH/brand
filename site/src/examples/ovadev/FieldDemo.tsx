import {
  Button,
  Checkbox,
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  Input,
} from "@ovadev-gmbh/ui-ovadev";

export default function FieldDemo() {
  return (
    <form className="w-full max-w-sm" onSubmit={(event) => event.preventDefault()}>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="field-demo-name">Job title</FieldLabel>
          <Input id="field-demo-name" placeholder="Software engineer, Baar" autoComplete="off" spellCheck={false} />
          <FieldDescription>Appears on the jobs page and in the newsletter.</FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="field-demo-expiry">Applications close in (days)</FieldLabel>
          <Input id="field-demo-expiry" type="number" min={1} max={90} defaultValue={90} className="text-label-13-mono" />
          <FieldDescription>Up to 90 days. The posting comes down by itself.</FieldDescription>
        </Field>
        <Field orientation="horizontal">
          <Checkbox id="field-demo-readonly" defaultChecked />
          <FieldLabel htmlFor="field-demo-readonly">Remote possible</FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <Button type="submit">Publish posting</Button>
          <Button type="button" variant="outline">
            Cancel
          </Button>
        </Field>
      </FieldGroup>
    </form>
  );
}
