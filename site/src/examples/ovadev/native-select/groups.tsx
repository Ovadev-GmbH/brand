import { Field, FieldLabel, NativeSelect, NativeSelectOptGroup, NativeSelectOption } from "@ovadev-gmbh/ui-ovadev";

export default function NativeSelectGroups() {
  return (
    <Field className="w-72">
      <FieldLabel htmlFor="native-select-groups-target">Roll back to</FieldLabel>
      <NativeSelect id="native-select-groups-target" className="w-full" defaultValue="dpl_7c21">
        <NativeSelectOptGroup label="Production">
          <NativeSelectOption value="dpl_8a4f">dpl_8a4f, 2026-09-13 09:12</NativeSelectOption>
          <NativeSelectOption value="dpl_7c21">dpl_7c21, 2026-09-11 14:02</NativeSelectOption>
          <NativeSelectOption value="dpl_66b0">dpl_66b0, 2026-09-08 16:45</NativeSelectOption>
        </NativeSelectOptGroup>
        <NativeSelectOptGroup label="Staging">
          <NativeSelectOption value="dpl_91d3">dpl_91d3, 2026-09-13 08:40</NativeSelectOption>
          <NativeSelectOption value="dpl_90aa">dpl_90aa, 2026-09-12 17:21</NativeSelectOption>
        </NativeSelectOptGroup>
      </NativeSelect>
    </Field>
  );
}
