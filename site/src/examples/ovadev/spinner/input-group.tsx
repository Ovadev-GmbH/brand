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
      <FieldLabel htmlFor="spinner-input-group-subdomain">Subdomain</FieldLabel>
      <InputGroup>
        <InputGroupInput id="spinner-input-group-subdomain" defaultValue="bergwerk" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>.ova.dev</InputGroupText>
          <Spinner aria-label="Checking availability" />
        </InputGroupAddon>
      </InputGroup>
      <FieldDescription>Checking whether bergwerk.ova.dev is free.</FieldDescription>
    </Field>
  );
}
