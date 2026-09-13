import { NativeSelect, NativeSelectOption } from "@ovadev-gmbh/ui-januna";

export default function NativeSelectDisabled() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <NativeSelect defaultValue="6" disabled aria-label="Party size, locked after check-in">
        <NativeSelectOption value="4">4 guests</NativeSelectOption>
        <NativeSelectOption value="6">6 guests</NativeSelectOption>
        <NativeSelectOption value="8">8 guests</NativeSelectOption>
      </NativeSelect>
      <NativeSelect defaultValue="6" aria-label="Party size">
        <NativeSelectOption value="4">4 guests</NativeSelectOption>
        <NativeSelectOption value="6">6 guests</NativeSelectOption>
        <NativeSelectOption value="12" disabled>
          12 guests, call the restaurant
        </NativeSelectOption>
      </NativeSelect>
    </div>
  );
}
