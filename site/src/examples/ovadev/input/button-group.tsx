import { Button, ButtonGroup, Field, FieldLabel, Input } from "@ovadev-gmbh/ui-ovadev";

export default function InputWithButtonGroup() {
  return (
    <Field className="w-96">
      <FieldLabel htmlFor="input-button-group-key">Publishable key</FieldLabel>
      <ButtonGroup>
        <Input id="input-button-group-key" className="text-label-13-mono" defaultValue="pk_live_51Hq8v2c" readOnly />
        <Button variant="outline">Copy</Button>
      </ButtonGroup>
    </Field>
  );
}
