import { Button, ButtonGroup, Field, FieldLabel, Input } from "@ovadev-gmbh/ui-ovadev";

export default function InputWithButtonGroup() {
  return (
    <Field className="w-96">
      <FieldLabel htmlFor="input-button-group-key">Link to this post</FieldLabel>
      <ButtonGroup>
        <Input id="input-button-group-key" className="text-label-13-mono" defaultValue="ova.dev/blog/tuerlersee" readOnly />
        <Button variant="outline">Copy</Button>
      </ButtonGroup>
    </Field>
  );
}
