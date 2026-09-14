import { NativeSelect, NativeSelectOption } from "@ovadev-gmbh/ui-ovadev";

export default function NativeSelectDisabled() {
  return (
    <div className="flex items-center gap-3">
      <NativeSelect defaultValue="team" disabled aria-label="Plan, locked">
        <NativeSelectOption value="starter">Starter</NativeSelectOption>
        <NativeSelectOption value="team">Team</NativeSelectOption>
        <NativeSelectOption value="scale">Scale</NativeSelectOption>
      </NativeSelect>
      <NativeSelect defaultValue="team" aria-label="Plan">
        <NativeSelectOption value="starter" disabled>
          Starter (up to 5 seats)
        </NativeSelectOption>
        <NativeSelectOption value="team">Team</NativeSelectOption>
        <NativeSelectOption value="scale">Scale</NativeSelectOption>
      </NativeSelect>
    </div>
  );
}
