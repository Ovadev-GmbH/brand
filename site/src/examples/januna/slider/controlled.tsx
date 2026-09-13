import * as React from "react";
import { Slider } from "@ovadev-gmbh/ui-januna";

const toArray = (value: number | readonly number[]) => (typeof value === "number" ? [value] : [...value]);

export default function SliderControlled() {
  const [pacing, setPacing] = React.useState([12]);
  const [saved, setSaved] = React.useState(12);
  const covers = pacing[0] ?? 0;

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <div className="flex items-center justify-between">
        <span id="slider-controlled-label" className="text-label-14">
          Covers per quarter hour
        </span>
        <span className="text-label-13-mono">{covers}</span>
      </div>
      <Slider
        value={pacing}
        onValueChange={(value) => setPacing(toArray(value))}
        onValueCommitted={(value) => setSaved(toArray(value)[0] ?? 0)}
        min={4}
        max={24}
        step={2}
        aria-labelledby="slider-controlled-label"
      />
      <div className="flex items-center justify-between text-label-13 text-content-secondary">
        <span>
          Saved: <span className="text-label-13-mono">{saved}</span>
        </span>
        <span>
          Up to <span className="text-label-13-mono">{covers * 4}</span> arrivals an hour
        </span>
      </div>
    </div>
  );
}
