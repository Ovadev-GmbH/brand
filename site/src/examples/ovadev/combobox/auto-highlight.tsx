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
  "Europe/London",
  "Europe/Lisbon",
  "America/New_York",
  "Asia/Singapore",
  "UTC",
];

export default function ComboboxAutoHighlight() {
  return (
    <Combobox items={timeZones} autoHighlight>
      <ComboboxInput placeholder="Search time zones" aria-label="Time zone for invoices" className="w-64" />
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
