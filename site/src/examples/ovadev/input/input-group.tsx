import { Field, FieldLabel, InputGroup, InputGroupAddon, InputGroupInput, InputGroupText } from "@ovadev-gmbh/ui-ovadev";

export default function InputWithInputGroup() {
  return (
    <Field className="w-80">
      <FieldLabel htmlFor="input-group-subdomain">Subdomain</FieldLabel>
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput id="input-group-subdomain" placeholder="acme" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>.ova.dev</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </Field>
  );
}
