import { Field, FieldError, FieldLabel, NativeSelect, NativeSelectOption } from "@ovadev-gmbh/ui-ovadev";

export default function NativeSelectInvalid() {
  return (
    <Field data-invalid className="w-56">
      <FieldLabel htmlFor="native-select-invalid-env">Environment</FieldLabel>
      <NativeSelect id="native-select-invalid-env" className="w-full" defaultValue="" aria-invalid>
        <NativeSelectOption value="" disabled>
          Choose an environment
        </NativeSelectOption>
        <NativeSelectOption value="production">Production</NativeSelectOption>
        <NativeSelectOption value="staging">Staging</NativeSelectOption>
        <NativeSelectOption value="preview">Preview</NativeSelectOption>
      </NativeSelect>
      <FieldError>Choose where the API key is valid.</FieldError>
    </Field>
  );
}
