import { Field, FieldLabel, NativeSelect, NativeSelectOption } from "@ovadev-gmbh/ui-internal";

export default function NativeSelectDemo() {
  return (
    <Field className="w-full max-w-48">
      <FieldLabel htmlFor="native-select-terms">Payment terms</FieldLabel>
      <NativeSelect id="native-select-terms" className="w-full" defaultValue="30">
        <NativeSelectOption value="10">Net 10</NativeSelectOption>
        <NativeSelectOption value="30">Net 30</NativeSelectOption>
        <NativeSelectOption value="60">Net 60</NativeSelectOption>
      </NativeSelect>
    </Field>
  );
}
