import { Field, FieldLabel, NativeSelect, NativeSelectOption } from "@ovadev-gmbh/ui-januna";

const sizes = [1, 2, 3, 4, 5, 6, 7, 8];

export default function NativeSelectDemo() {
  return (
    <Field className="w-full max-w-48">
      <FieldLabel htmlFor="native-select-party">Party size</FieldLabel>
      <NativeSelect id="native-select-party" className="w-full" defaultValue="2">
        {sizes.map((size) => (
          <NativeSelectOption key={size} value={String(size)}>
            {size === 1 ? "1 guest" : `${size} guests`}
          </NativeSelectOption>
        ))}
      </NativeSelect>
    </Field>
  );
}
