import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  Field,
  FieldError,
  FieldLabel,
} from "@ovadev-gmbh/ui-januna";

const guests = ["Nora Keller", "Luca Bernasconi", "Anna Meier", "Samuel Frei", "Elif Yilmaz"];

export default function ComboboxInvalid() {
  return (
    <Field data-invalid className="w-72">
      <FieldLabel htmlFor="combobox-invalid-guest">Guest</FieldLabel>
      <Combobox items={guests}>
        <ComboboxInput id="combobox-invalid-guest" placeholder="Search guests" aria-invalid className="w-full" />
        <ComboboxContent>
          <ComboboxEmpty>No guest matches.</ComboboxEmpty>
          <ComboboxList>
            {(guest: string) => (
              <ComboboxItem key={guest} value={guest}>
                {guest}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
      <FieldError>Every booking needs a guest. Add a walk-in under the name they give.</FieldError>
    </Field>
  );
}
