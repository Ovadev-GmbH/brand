import { NativeSelect, NativeSelectOption } from "@ovadev-gmbh/ui-ovadev";

export default function NativeSelectDisabled() {
  return (
    <div className="flex items-center gap-3">
      <NativeSelect defaultValue="season" disabled aria-label="Plan, locked">
        <NativeSelectOption value="starter">Starter</NativeSelectOption>
        <NativeSelectOption value="season">Season</NativeSelectOption>
        <NativeSelectOption value="venue">Venue</NativeSelectOption>
      </NativeSelect>
      <NativeSelect defaultValue="season" aria-label="Plan">
        <NativeSelectOption value="starter" disabled>
          Starter (one point of sale)
        </NativeSelectOption>
        <NativeSelectOption value="season">Season</NativeSelectOption>
        <NativeSelectOption value="venue">Venue</NativeSelectOption>
      </NativeSelect>
    </div>
  );
}
