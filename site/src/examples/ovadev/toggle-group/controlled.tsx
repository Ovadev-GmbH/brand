import * as React from "react";
import { ToggleGroup, ToggleGroupItem } from "@ovadev-gmbh/ui-ovadev";

const ranges: Record<string, string> = {
  "2024": "3 posts, first on 2024-11-04",
  "2025": "11 posts, first on 2025-01-20",
  "2026": "8 posts, latest on 2026-09-11",
};

export default function ToggleGroupControlled() {
  const [range, setRange] = React.useState("2026");

  return (
    <div className="flex flex-col items-start gap-2">
      <ToggleGroup
        variant="outline"
        spacing={0}
        value={[range]}
        onValueChange={(next) => {
          if (next[0]) setRange(next[0]);
        }}
        aria-label="Blog archive year"
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
