import { NativeSelect, NativeSelectOption } from "@ovadev-gmbh/ui-januna";

const periods = [
  { value: "tonight", label: "Tonight" },
  { value: "week", label: "This week" },
  { value: "month", label: "This month" },
];

export default function NativeSelectSize() {
  return (
    <div className="flex items-center gap-3">
      <NativeSelect size="sm" defaultValue="week" aria-label="Period, small">
        {periods.map((period) => (
          <NativeSelectOption key={period.value} value={period.value}>
            {period.label}
          </NativeSelectOption>
        ))}
      </NativeSelect>
      <NativeSelect defaultValue="week" aria-label="Period">
        {periods.map((period) => (
          <NativeSelectOption key={period.value} value={period.value}>
            {period.label}
          </NativeSelectOption>
        ))}
      </NativeSelect>
    </div>
  );
}
