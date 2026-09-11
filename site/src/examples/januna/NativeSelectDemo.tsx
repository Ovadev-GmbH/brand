import {
  Label,
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption,
} from "@ovadev-gmbh/ui-januna";

export default function NativeSelectDemo() {
  return (
    <div className="grid max-w-[640px] gap-6">
      <div className="grid gap-2">
        <Label htmlFor="native-party">Party size</Label>
        <NativeSelect id="native-party" defaultValue="2">
          <NativeSelectOption value="1">1 guest</NativeSelectOption>
          <NativeSelectOption value="2">2 guests</NativeSelectOption>
          <NativeSelectOption value="4">4 guests</NativeSelectOption>
          <NativeSelectOption value="6">6 guests</NativeSelectOption>
          <NativeSelectOption value="8">8 guests</NativeSelectOption>
        </NativeSelect>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="native-table">Table</Label>
        <NativeSelect id="native-table" className="w-full" defaultValue="">
          <NativeSelectOption value="" disabled>
            Choose a table
          </NativeSelectOption>
          <NativeSelectOptGroup label="Inside">
            <NativeSelectOption value="t1">Table 1 · 2 seats</NativeSelectOption>
            <NativeSelectOption value="t5">Table 5 · 4 seats</NativeSelectOption>
          </NativeSelectOptGroup>
          <NativeSelectOptGroup label="Terrace">
            <NativeSelectOption value="t8">Table 8 · 6 seats</NativeSelectOption>
            <NativeSelectOption value="t12" disabled>
              Table 12 · closed
            </NativeSelectOption>
          </NativeSelectOptGroup>
        </NativeSelect>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <NativeSelect size="sm" aria-label="Shift" defaultValue="dinner">
          <NativeSelectOption value="lunch">Lunch</NativeSelectOption>
          <NativeSelectOption value="dinner">Dinner</NativeSelectOption>
        </NativeSelect>

        <NativeSelect aria-label="Shift, invalid" aria-invalid defaultValue="">
          <NativeSelectOption value="">Shift required</NativeSelectOption>
          <NativeSelectOption value="lunch">Lunch</NativeSelectOption>
          <NativeSelectOption value="dinner">Dinner</NativeSelectOption>
        </NativeSelect>

        <NativeSelect aria-label="Shift, disabled" disabled defaultValue="dinner">
          <NativeSelectOption value="dinner">Dinner</NativeSelectOption>
        </NativeSelect>
      </div>
    </div>
  );
}
