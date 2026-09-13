import { Field, FieldLabel, InputGroup, InputGroupAddon, InputGroupInput, InputGroupText } from "@ovadev-gmbh/ui-januna";

export default function InputWithInputGroup() {
  return (
    <Field className="w-80">
      <FieldLabel htmlFor="input-input-group-deposit">Deposit</FieldLabel>
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>CHF</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput id="input-input-group-deposit" inputMode="decimal" defaultValue="25.00" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>per guest</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </Field>
  );
}
