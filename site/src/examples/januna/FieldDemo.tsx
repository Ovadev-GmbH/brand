import {
  Button,
  Checkbox,
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  Input,
} from "@ovadev-gmbh/ui-januna";

export default function FieldDemo() {
  return (
    <form className="w-full max-w-sm" onSubmit={(event) => event.preventDefault()}>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="field-demo-name">Guest name</FieldLabel>
          <Input id="field-demo-name" placeholder="Lena Brunner" autoComplete="off" />
          <FieldDescription>Shown on the floor plan and the door list.</FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="field-demo-party">Party size</FieldLabel>
          <Input id="field-demo-party" type="number" min={1} max={12} defaultValue={6} />
          <FieldDescription>Up to 12 guests at one table.</FieldDescription>
        </Field>
        <Field orientation="horizontal">
          <Checkbox id="field-demo-reminder" defaultChecked />
          <FieldLabel htmlFor="field-demo-reminder">Text the guest a reminder</FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <Button type="submit">Book table</Button>
          <Button type="button" variant="outline">
            Discard
          </Button>
        </Field>
      </FieldGroup>
    </form>
  );
}
