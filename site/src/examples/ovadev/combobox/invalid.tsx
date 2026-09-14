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
} from "@ovadev-gmbh/ui-ovadev";

const members = ["beni@ova.dev", "robin@ova.dev", "philip@ova.dev"];

export default function ComboboxInvalid() {
  return (
    <Field data-invalid className="w-64">
      <FieldLabel htmlFor="combobox-invalid-owner">Author</FieldLabel>
      <Combobox items={members}>
        <ComboboxInput id="combobox-invalid-owner" placeholder="Search the team" aria-invalid className="w-full" />
        <ComboboxContent>
          <ComboboxEmpty>No one on the team matches.</ComboboxEmpty>
          <ComboboxList>
            {(email: string) => (
              <ComboboxItem key={email} value={email}>
                <span className="text-label-13-mono">{email}</span>
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
      <FieldError>Every post on the blog names an author.</FieldError>
    </Field>
  );
}
