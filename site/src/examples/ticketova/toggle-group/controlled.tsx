import * as React from "react";
import { ToggleGroup, ToggleGroupItem } from "@ovadev-gmbh/ui-ticketova";

const ranges: Record<string, string> = {
  "1h": "2026-09-13 13:00 to 14:00 UTC",
  "24h": "2026-09-12 14:00 to 2026-09-13 14:00 UTC",
  "7d": "2026-09-06 to 2026-09-13 UTC",
};

export default function ToggleGroupControlled() {
  const [range, setRange] = React.useState("24h");

  return (
    <div className="flex flex-col items-start gap-2">
      <ToggleGroup
        variant="outline"
        spacing={0}
        value={[range]}
        onValueChange={(next) => {
          if (next[0]) setRange(next[0]);
        }}
        aria-label="Audit log range"
      >
        {Object.keys(ranges).map((key) => (
          <ToggleGroupItem key={key} value={key}>
            {key}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      <span className="text-label-13-mono text-content-secondary">{ranges[range]}</span>
    </div>
  );
}
