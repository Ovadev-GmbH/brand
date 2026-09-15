import { NativeSelect, NativeSelectOption } from "@ovadev-gmbh/ui-ticketova";

const ranges = [
  { value: "1h", label: "Last hour" },
  { value: "24h", label: "Last 24 hours" },
  { value: "7d", label: "Last 7 days" },
];

export default function NativeSelectSize() {
  return (
    <div className="flex items-center gap-3">
      <NativeSelect size="sm" defaultValue="24h" aria-label="Time range, small">
        {ranges.map((range) => (
          <NativeSelectOption key={range.value} value={range.value}>
            {range.label}
          </NativeSelectOption>
        ))}
      </NativeSelect>
      <NativeSelect defaultValue="24h" aria-label="Time range">
        {ranges.map((range) => (
          <NativeSelectOption key={range.value} value={range.value}>
            {range.label}
          </NativeSelectOption>
        ))}
      </NativeSelect>
    </div>
  );
}
