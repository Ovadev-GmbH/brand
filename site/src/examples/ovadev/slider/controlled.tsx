import * as React from "react";
import { Slider } from "@ovadev-gmbh/ui-ovadev";

const toArray = (value: number | readonly number[]) => (typeof value === "number" ? [value] : [...value]);
const chf = new Intl.NumberFormat("de-CH", { minimumFractionDigits: 2 });
const perPointOfSale = 45;

export default function SliderControlled() {
  const [pointsOfSale, setPointsOfSale] = React.useState([3]);
  const [saved, setSaved] = React.useState(3);
  const count = pointsOfSale[0] ?? 1;

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <div className="flex items-center justify-between">
        <span id="slider-controlled-label" className="text-label-13">
          Points of sale
        </span>
        <span className="text-label-13-mono">{count}</span>
      </div>
      <Slider
        value={pointsOfSale}
        onValueChange={(value) => setPointsOfSale(toArray(value))}
        onValueCommitted={(value) => setSaved(toArray(value)[0] ?? 1)}
        min={1}
        max={12}
        aria-labelledby="slider-controlled-label"
      />
      <div className="flex items-center justify-between text-label-13 text-content-secondary">
        <span>
          Saved: <span className="text-label-13-mono">{saved}</span>
        </span>
        <span className="text-label-13-mono">CHF {chf.format(count * perPointOfSale)} / month</span>
      </div>
    </div>
  );
}
