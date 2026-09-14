import { Field, FieldLabel, NativeSelect, NativeSelectOptGroup, NativeSelectOption } from "@ovadev-gmbh/ui-ovadev";

export default function NativeSelectGroups() {
  return (
    <Field className="w-72">
      <FieldLabel htmlFor="native-select-groups-target">Related post</FieldLabel>
      <NativeSelect id="native-select-groups-target" className="w-full" defaultValue="season-opening-tuerlersee">
        <NativeSelectOptGroup label="2026">
          <NativeSelectOption value="admission-offline">Admission control without a network, 2026-08-20</NativeSelectOption>
          <NativeSelectOption value="season-opening-tuerlersee">Season opening at Türlersee, 2026-05-02</NativeSelectOption>
          <NativeSelectOption value="januna-early-access">JANUNA early access, 2026-02-11</NativeSelectOption>
        </NativeSelectOptGroup>
        <NativeSelectOptGroup label="2025">
          <NativeSelectOption value="ticketova-reporting">Real-time reporting for pools, 2025-11-04</NativeSelectOption>
          <NativeSelectOption value="hello">Ovadev, Baar, 2025-06-30</NativeSelectOption>
        </NativeSelectOptGroup>
      </NativeSelect>
    </Field>
  );
}
