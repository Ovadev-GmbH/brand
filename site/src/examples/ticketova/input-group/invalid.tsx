import {
  Field,
  FieldError,
  FieldLabel,
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@ovadev-gmbh/ui-ticketova";

export default function InputGroupInvalid() {
  return (
    <Field data-invalid className="w-72">
      <FieldLabel htmlFor="input-group-invalid-limit">Monthly spend limit</FieldLabel>
      <InputGroup>
        <InputGroupInput
          id="input-group-invalid-limit"
          className="text-right text-label-13-mono"
          defaultValue="-50.00"
          aria-invalid
        />
        <InputGroupAddon align="inline-end">
          <InputGroupText>CHF</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <FieldError>Enter an amount of 0.00 or more.</FieldError>
    </Field>
  );
}
