import * as React from "react";
import { Label, Slider } from "@ovadev-gmbh/ui-januna";

export default function SliderDemo() {
  const [partySize, setPartySize] = React.useState(4);
  const [window, setWindow] = React.useState<number[]>([18, 21]);

  return (
    <div className="grid max-w-[640px] gap-8">
      <div className="grid gap-3">
        <div className="flex items-center justify-between">
          <Label htmlFor="slider-party">Party size</Label>
          <span className="text-sm text-muted-foreground tabular-nums">{partySize} guests</span>
        </div>
        <Slider
          id="slider-party"
          min={1}
          max={12}
          step={1}
          value={partySize}
          onValueChange={(value) => setPartySize(Array.isArray(value) ? (value[0] ?? 0) : Number(value))}
        />
      </div>

      <div className="grid gap-3">
        <div className="flex items-center justify-between">
          <Label>Booking window</Label>
          <span className="text-sm text-muted-foreground tabular-nums">
            {window[0] ?? 0}:00 – {window[1] ?? 0}:00
          </span>
        </div>
        <Slider
          aria-label="Booking window"
          min={11}
          max={24}
          step={1}
          value={window}
          onValueChange={(value) => setWindow(Array.isArray(value) ? [...value] : [Number(value)])}
        />
      </div>

      <div className="grid gap-3">
        <Label>Table turn time (minutes)</Label>
        <Slider aria-label="Turn time" defaultValue={90} min={30} max={180} step={15} />
      </div>

      <div className="grid gap-3">
        <Label>Deposit per guest (disabled)</Label>
        <Slider aria-label="Deposit" defaultValue={20} max={50} disabled />
      </div>
    </div>
  );
}
