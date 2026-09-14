import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
  Label,
  useComboboxAnchor,
} from "@ovadev-gmbh/ui-ovadev";

const tags = ["ticketova", "januna", "release", "company", "engineering"];

export default function ComboboxMultiple() {
  const anchor = useComboboxAnchor();

  return (
    <div className="flex w-72 flex-col gap-2">
      <Label htmlFor="combobox-multiple-input">Post tags</Label>
      <Combobox items={tags} multiple defaultValue={["ticketova", "release"]}>
        <ComboboxChips ref={anchor}>
          <ComboboxValue>
            {(values: string[]) => (
              <>
                {values.map((tag) => (
                  <ComboboxChip key={tag}>{tag}</ComboboxChip>
                ))}
                <ComboboxChipsInput id="combobox-multiple-input" placeholder="Add a tag" />
              </>
            )}
          </ComboboxValue>
        </ComboboxChips>
        <ComboboxContent anchor={anchor}>
          <ComboboxEmpty>No tag matches.</ComboboxEmpty>
          <ComboboxList>
            {(tag: string) => (
              <ComboboxItem key={tag} value={tag}>
                {tag}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  );
}
