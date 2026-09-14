import { Field, FieldLabel, NativeSelect, NativeSelectOption } from "@ovadev-gmbh/ui-ovadev";

export default function NativeSelectDemo() {
  return (
    <Field className="w-full max-w-48">
      <FieldLabel htmlFor="native-select-terms">Visitors a day</FieldLabel>
      <NativeSelect id="native-select-terms" className="w-full" defaultValue="2000">
        <NativeSelectOption value="500">Up to 500</NativeSelectOption>
        <NativeSelectOption value="2000">Up to 2'000</NativeSelectOption>
        <NativeSelectOption value="more">More than 2'000</NativeSelectOption>
      </NativeSelect>
    </Field>
  );
}
