import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  Field,
  FieldLabel,
} from "@ovadev-gmbh/ui-januna";

const guests = ["Nora Keller", "Luca Bernasconi", "Anna Meier", "Samuel Frei", "Elif Yilmaz", "Jonas Weber"];

export default function ComboboxDemo() {
  return (
    <Field className="w-full max-w-64">
      <FieldLabel htmlFor="combobox-guest">Guest</FieldLabel>
      <Combobox items={guests}>
        <ComboboxInput id="combobox-guest" placeholder="Search returning guests" className="w-full" />
        <ComboboxContent>
          <ComboboxEmpty>No guest found. Add them as a new guest.</ComboboxEmpty>
          <ComboboxList>
            {(guest: string) => (
              <ComboboxItem key={guest} value={guest}>
                {guest}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </Field>
  );
}
