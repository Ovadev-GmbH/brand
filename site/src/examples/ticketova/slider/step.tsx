import * as React from "react";
import { Slider } from "@ovadev-gmbh/ui-ticketova";

const toArray = (value: number | readonly number[]) => (typeof value === "number" ? [value] : [...value]);

export default function SliderStep() {
  const [limit, setLimit] = React.useState([1000]);

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <div className="flex items-center justify-between">
        <span id="slider-step-label" className="text-label-13">
          Rate limit
        </span>
        <span className="text-label-13-mono text-content-secondary">
          {(limit[0] ?? 0).toLocaleString("de-CH")} req/min
        </span>
      </div>
      <Slider
        value={limit}
        onValueChange={(value) => setLimit(toArray(value))}
        min={100}
        max={5000}
        step={100}
        largeStep={1000}
        aria-labelledby="slider-step-label"
      />
    </div>
  );
}
