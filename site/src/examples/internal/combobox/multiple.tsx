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
} from "@ovadev-gmbh/ui-internal";

const environments = ["production", "staging", "preview", "development", "sandbox"];

export default function ComboboxMultiple() {
  const anchor = useComboboxAnchor();

  return (
    <div className="flex w-72 flex-col gap-2">
      <Label htmlFor="combobox-multiple-input">Key valid in</Label>
      <Combobox items={environments} multiple defaultValue={["production", "staging"]}>
        <ComboboxChips ref={anchor}>
          <ComboboxValue>
            {(values: string[]) => (
              <>
                {values.map((environment) => (
                  <ComboboxChip key={environment}>{environment}</ComboboxChip>
                ))}
                <ComboboxChipsInput id="combobox-multiple-input" placeholder="Add an environment" />
              </>
            )}
          </ComboboxValue>
        </ComboboxChips>
        <ComboboxContent anchor={anchor}>
          <ComboboxEmpty>No environment matches.</ComboboxEmpty>
          <ComboboxList>
            {(environment: string) => (
              <ComboboxItem key={environment} value={environment}>
                {environment}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  );
}
