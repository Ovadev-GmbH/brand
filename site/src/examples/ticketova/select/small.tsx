import { Button, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@ovadev-gmbh/ui-ticketova";
import { DownloadSimpleIcon } from "@ovadev-gmbh/ui-ticketova/icons";

const periods = [
  { label: "Last 7 days", value: "7d" },
  { label: "Last 30 days", value: "30d" },
  { label: "This quarter", value: "quarter" },
];

export default function SelectSmall() {
  return (
    <div className="flex items-center gap-2">
      <Select items={periods} defaultValue="30d">
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
        <DownloadSimpleIcon data-icon="inline-start" />
        Export
      </Button>
    </div>
  );
}
