import * as React from "react";
import { Label, Slider } from "@ovadev-gmbh/ui-ovadev";

export default function SliderDemo() {
  const [days, setDays] = React.useState(30);

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <div className="flex items-center justify-between">
        <Label id="slider-retention-label">Ticket validity</Label>
        <span className="text-label-13-mono text-content-secondary">{days} days</span>
      </div>
      <Slider
        value={days}
        onValueChange={(value) => setDays(typeof value === "number" ? value : (value[0] ?? 7))}
        min={7}
        max={90}
        aria-labelledby="slider-retention-label"
      />
    </div>
  );
}
