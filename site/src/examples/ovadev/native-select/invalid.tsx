import { Field, FieldError, FieldLabel, NativeSelect, NativeSelectOption } from "@ovadev-gmbh/ui-ovadev";

export default function NativeSelectInvalid() {
  return (
    <Field data-invalid className="w-56">
      <FieldLabel htmlFor="native-select-invalid-env">Product</FieldLabel>
      <NativeSelect id="native-select-invalid-env" className="w-full" defaultValue="" aria-invalid>
        <NativeSelectOption value="" disabled>
          Choose a product
        </NativeSelectOption>
        <NativeSelectOption value="ticketova">TICKETOVA</NativeSelectOption>
        <NativeSelectOption value="januna">JANUNA</NativeSelectOption>
        <NativeSelectOption value="consulting">Consulting</NativeSelectOption>
      </NativeSelect>
      <FieldError>Choose what the quote is for.</FieldError>
    </Field>
  );
}
