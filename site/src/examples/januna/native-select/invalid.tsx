import { Field, FieldError, FieldLabel, NativeSelect, NativeSelectOption } from "@ovadev-gmbh/ui-januna";

export default function NativeSelectInvalid() {
  return (
    <Field data-invalid className="w-64">
      <FieldLabel htmlFor="native-select-invalid-area">Seating area</FieldLabel>
      <NativeSelect id="native-select-invalid-area" className="w-full" defaultValue="" aria-invalid>
        <NativeSelectOption value="" disabled>
          Choose where to sit
        </NativeSelectOption>
        <NativeSelectOption value="inside">Inside</NativeSelectOption>
        <NativeSelectOption value="terrace">Terrace</NativeSelectOption>
        <NativeSelectOption value="bar">Bar</NativeSelectOption>
      </NativeSelect>
      <FieldError>Choose a seating area to see the free times.</FieldError>
    </Field>
  );
}
