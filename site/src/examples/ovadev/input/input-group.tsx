import { Field, FieldLabel, InputGroup, InputGroupAddon, InputGroupInput, InputGroupText } from "@ovadev-gmbh/ui-ovadev";

export default function InputWithInputGroup() {
  return (
    <Field className="w-80">
      <FieldLabel htmlFor="input-group-subdomain">Post slug</FieldLabel>
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>ova.dev/blog/</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput id="input-group-subdomain" placeholder="tuerlersee" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>.html</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </Field>
  );
}
