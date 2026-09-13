import * as React from "react";
import { DirectionProvider, Label, Slider } from "@ovadev-gmbh/ui-internal";

type Direction = "ltr" | "rtl";

function UsageAlert({ direction }: { direction: Direction }) {
  const [threshold, setThreshold] = React.useState(80);
  const id = `direction-slider-${direction}`;

  return (
    <DirectionProvider direction={direction}>
      <div dir={direction} className="flex w-56 flex-col gap-3">
        <div className="flex items-center justify-between gap-2">
          <Label id={id}>Usage alert, {direction}</Label>
          <span className="text-label-13-mono">{threshold}%</span>
        </div>
        <Slider
          aria-labelledby={id}
          value={[threshold]}
          onValueChange={(value) => setThreshold(Array.isArray(value) ? value[0]! : value)}
          min={50}
          max={100}
          step={5}
        />
      </div>
    </DirectionProvider>
  );
}

export default function DirectionSlider() {
  return (
    <div className="flex flex-wrap gap-12">
      <UsageAlert direction="ltr" />
      <UsageAlert direction="rtl" />
    </div>
  );
}
