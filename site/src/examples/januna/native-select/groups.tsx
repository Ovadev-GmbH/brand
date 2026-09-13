import { Field, FieldLabel, NativeSelect, NativeSelectOptGroup, NativeSelectOption } from "@ovadev-gmbh/ui-januna";

export default function NativeSelectGroups() {
  return (
    <Field className="w-64">
      <FieldLabel htmlFor="native-select-groups-time">Move the booking to</FieldLabel>
      <NativeSelect id="native-select-groups-time" className="w-full" defaultValue="19:30">
        <NativeSelectOptGroup label="Lunch">
          <NativeSelectOption value="12:00">12:00</NativeSelectOption>
          <NativeSelectOption value="12:30">12:30</NativeSelectOption>
          <NativeSelectOption value="13:00">13:00</NativeSelectOption>
        </NativeSelectOptGroup>
        <NativeSelectOptGroup label="Dinner">
          <NativeSelectOption value="18:30">18:30</NativeSelectOption>
          <NativeSelectOption value="19:30">19:30</NativeSelectOption>
          <NativeSelectOption value="20:00" disabled>
            20:00, fully booked
          </NativeSelectOption>
          <NativeSelectOption value="21:00">21:00</NativeSelectOption>
        </NativeSelectOptGroup>
      </NativeSelect>
    </Field>
  );
}
