import * as React from "react";
import { Label, Slider } from "@ovadev-gmbh/ui-januna";

export default function SliderDemo() {
  const [minutes, setMinutes] = React.useState(15);

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <div className="flex items-center justify-between">
        <Label id="slider-hold-label">Hold the table for late guests</Label>
        <span className="text-label-13-mono text-content-secondary">{minutes} min</span>
      </div>
      <Slider
        value={minutes}
        onValueChange={(value) => setMinutes(typeof value === "number" ? value : (value[0] ?? 0))}
        min={0}
        max={60}
        step={5}
        aria-labelledby="slider-hold-label"
      />
    </div>
  );
}
