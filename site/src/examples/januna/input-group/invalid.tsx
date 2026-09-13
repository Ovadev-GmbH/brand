import {
  Field,
  FieldError,
  FieldLabel,
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@ovadev-gmbh/ui-januna";

export default function InputGroupInvalid() {
  return (
    <Field data-invalid className="w-80">
      <FieldLabel htmlFor="input-group-invalid-deposit">Deposit per guest</FieldLabel>
      <InputGroup>
        <InputGroupInput
          id="input-group-invalid-deposit"
          inputMode="decimal"
          className="text-right"
          defaultValue="-25.00"
          aria-invalid
        />
        <InputGroupAddon>
          <InputGroupText>CHF</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <FieldError>Enter an amount of CHF 0.00 or more.</FieldError>
    </Field>
  );
}
