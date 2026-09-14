import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@ovadev-gmbh/ui-ovadev";

const timeZones = [
  "Europe/Zurich",
  "Europe/Berlin",
  "Europe/Vienna",
  "Europe/Paris",
  "Europe/Rome",
  "Europe/London",
  "UTC",
];

export default function ComboboxAutoHighlight() {
  return (
    <Combobox items={timeZones} autoHighlight>
      <ComboboxInput placeholder="Search time zones" aria-label="Time zone of the launch event" className="w-64" />
      <ComboboxContent>
        <ComboboxEmpty>No time zone matches.</ComboboxEmpty>
        <ComboboxList>
          {(zone: string) => (
            <ComboboxItem key={zone} value={zone}>
              <span className="text-label-13-mono">{zone}</span>
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}
