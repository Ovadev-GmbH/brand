import {
  Combobox,
  ComboboxCollection,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
  ComboboxSeparator,
} from "@ovadev-gmbh/ui-januna";

const notes = [
  { value: "Allergies", items: ["Nuts", "Shellfish", "Gluten", "Lactose"] },
  { value: "Diets", items: ["Vegetarian", "Vegan", "Halal"] },
  { value: "Occasions", items: ["Birthday", "Anniversary", "Business dinner"] },
];

export default function ComboboxGroups() {
  return (
    <Combobox items={notes}>
      <ComboboxInput placeholder="Add a note to the booking" aria-label="Booking note" className="w-72" />
      <ComboboxContent>
        <ComboboxEmpty>No note matches.</ComboboxEmpty>
        <ComboboxList>
          {(group: (typeof notes)[number], index: number) => (
            <ComboboxGroup key={group.value} items={group.items}>
              <ComboboxLabel>{group.value}</ComboboxLabel>
              <ComboboxCollection>
                {(note: string) => (
                  <ComboboxItem key={note} value={note}>
                    {note}
                  </ComboboxItem>
                )}
              </ComboboxCollection>
              {index < notes.length - 1 ? <ComboboxSeparator /> : null}
            </ComboboxGroup>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}
