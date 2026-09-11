import * as React from "react";
import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
  Label,
  useComboboxAnchor,
} from "@ovadev-gmbh/ui-januna";

const guests = [
  "Ada Lovelace",
  "Grace Hopper",
  "Alan Turing",
  "Katherine Johnson",
  "Linus Torvalds",
  "Margaret Hamilton",
];

const tags = ["Birthday", "Anniversary", "Window seat", "High chair", "Vegan", "Allergy"];

export default function ComboboxDemo() {
  const [guest, setGuest] = React.useState<string | null>(null);
  const [selectedTags, setSelectedTags] = React.useState<string[]>(["Window seat"]);
  const anchor = useComboboxAnchor();

  return (
    <div className="grid max-w-[640px] gap-6">
      <div className="grid gap-2">
        <Label htmlFor="combobox-guest">Guest</Label>
        <Combobox items={guests} value={guest} onValueChange={setGuest}>
          <ComboboxInput
            id="combobox-guest"
            placeholder="Search returning guests"
            showClear
            className="w-72"
          />
          <ComboboxContent>
            <ComboboxEmpty>No guest found. Add them as a new guest.</ComboboxEmpty>
            <ComboboxList>
              {(item: string) => (
                <ComboboxItem key={item} value={item}>
                  {item}
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
        <p className="text-sm text-muted-foreground">
          {guest ? `Booking for ${guest}` : "No guest selected"}
        </p>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="combobox-tags">Booking tags</Label>
        <Combobox
          items={tags}
          multiple
          value={selectedTags}
          onValueChange={setSelectedTags}
        >
          <ComboboxChips ref={anchor}>
            <ComboboxValue>
              {(value: string[]) => (
                <React.Fragment>
                  {value.map((tag) => (
                    <ComboboxChip key={tag}>{tag}</ComboboxChip>
                  ))}
                  <ComboboxChipsInput id="combobox-tags" placeholder="Add a tag…" />
                </React.Fragment>
              )}
            </ComboboxValue>
          </ComboboxChips>
          <ComboboxContent anchor={anchor}>
            <ComboboxEmpty>No matching tag.</ComboboxEmpty>
            <ComboboxList>
              {(item: string) => (
                <ComboboxItem key={item} value={item}>
                  {item}
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="combobox-disabled">Table (disabled)</Label>
        <Combobox items={["Table 1", "Table 2"]} disabled>
          <ComboboxInput id="combobox-disabled" placeholder="Assigned by the host" className="w-72" />
        </Combobox>
      </div>
    </div>
  );
}
