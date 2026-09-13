import * as React from "react";
import { Slider } from "@ovadev-gmbh/ui-januna";

const toArray = (value: number | readonly number[]) => (typeof value === "number" ? [value] : [...value]);

export default function SliderStep() {
  const [deposit, setDeposit] = React.useState([50]);

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <div className="flex items-center justify-between">
        <span id="slider-step-label" className="text-label-14">
          Deposit per guest
        </span>
        <span className="text-label-13-mono text-content-secondary">CHF {(deposit[0] ?? 0).toFixed(2)}</span>
      </div>
      <Slider
        value={deposit}
        onValueChange={(value) => setDeposit(toArray(value))}
        min={0}
        max={150}
        step={5}
        largeStep={25}
        aria-labelledby="slider-step-label"
      />
    </div>
  );
}
