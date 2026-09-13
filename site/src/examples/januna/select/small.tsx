import { Button, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { Download01Icon } from "@hugeicons/core-free-icons";

const periods = [
  { label: "Tonight", value: "tonight" },
  { label: "This week", value: "week" },
  { label: "This month", value: "month" },
];

export default function SelectSmall() {
  return (
    <div className="flex items-center gap-2">
      <Select items={periods} defaultValue="week">
        <SelectTrigger size="sm" aria-label="Period">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {periods.map((period) => (
            <SelectItem key={period.value} value={period.value}>
              {period.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button variant="outline" size="sm">
        <HugeiconsIcon icon={Download01Icon} strokeWidth={2} data-icon="inline-start" />
        Export covers
      </Button>
    </div>
  );
}
