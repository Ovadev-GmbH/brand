import * as React from "react";
import { Label, Slider } from "@ovadev-gmbh/ui-januna";

export default function SliderDemo() {
  const [partySize, setPartySize] = React.useState<number[]>([4]);
  const [hours, setHours] = React.useState<number[]>([18, 21]);

  return (
    <div className="grid w-full max-w-xl gap-6">
      <div className="grid gap-3">
        <div className="flex items-center justify-between">
          <Label id="slider-party-label">Party size</Label>
          <span className="text-label-13-mono text-content-secondary">
            {partySize[0] ?? 0} guests
          </span>
        </div>
        <Slider
          aria-labelledby="slider-party-label"
          min={1}
          max={12}
          step={1}
          value={partySize}
          onValueChange={(value) => setPartySize(Array.isArray(value) ? [...value] : [Number(value)])}
        />
      </div>
      <div className="grid gap-3">
        <div className="flex items-center justify-between">
          <Label id="slider-window-label">Booking window</Label>
          <span className="text-label-13-mono text-content-secondary">
            {hours[0] ?? 0}:00 to {hours[1] ?? 0}:00
          </span>
        </div>
        <Slider
          aria-labelledby="slider-window-label"
          min={11}
          max={24}
          step={1}
          value={hours}
          onValueChange={(value) => setHours(Array.isArray(value) ? [...value] : [Number(value)])}
        />
      </div>
    </div>
  );
}
