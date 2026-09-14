import {
  Field,
  FieldDescription,
  FieldLabel,
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
  Spinner,
} from "@ovadev-gmbh/ui-ovadev";

export default function SpinnerInputGroup() {
  return (
    <Field className="w-80">
      <FieldLabel htmlFor="spinner-input-group-subdomain">Shop address</FieldLabel>
      <InputGroup>
        <InputGroupInput id="spinner-input-group-subdomain" defaultValue="tuerlersee" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>.ticketova.ch</InputGroupText>
          <Spinner aria-label="Checking availability" />
        </InputGroupAddon>
      </InputGroup>
      <FieldDescription>Checking whether tuerlersee.ticketova.ch is free.</FieldDescription>
    </Field>
  );
}
