import {
  Field,
  FieldDescription,
  FieldLabel,
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  Spinner,
} from "@ovadev-gmbh/ui-januna";

export default function SpinnerInputGroup() {
  return (
    <Field className="w-80">
      <FieldLabel htmlFor="spinner-input-group-reference">Booking reference</FieldLabel>
      <InputGroup>
        <InputGroupInput id="spinner-input-group-reference" defaultValue="BK-20417" className="text-label-14-mono" />
        <InputGroupAddon align="inline-end">
          <Spinner aria-label="Looking up the booking" />
        </InputGroupAddon>
      </InputGroup>
      <FieldDescription>Looking up the booking for tonight.</FieldDescription>
    </Field>
  );
}
