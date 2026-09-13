import * as React from "react";
import { Label, Slider } from "@ovadev-gmbh/ui-internal";

export default function SliderDemo() {
  /* Arrays, even for one thumb: the slider draws a thumb per entry. */
  const [replicas, setReplicas] = React.useState<number[]>([3]);
  const [window, setWindow] = React.useState<number[]>([2, 5]);

  return (
    <div className="grid w-full max-w-xl gap-6">
      <div className="grid gap-3">
        <div className="flex items-center justify-between">
          <Label id="slider-replicas-label">Replicas</Label>
          <span className="text-label-13-mono text-content-secondary">{replicas[0]}</span>
        </div>
        <Slider
          aria-labelledby="slider-replicas-label"
          min={1}
          max={12}
          step={1}
          value={replicas}
          onValueChange={(value) => setReplicas(Array.isArray(value) ? [...value] : [Number(value)])}
        />
      </div>
      <div className="grid gap-3">
        <div className="flex items-center justify-between">
          <Label id="slider-window-label">Maintenance window (UTC)</Label>
          <span className="text-label-13-mono text-content-secondary">
            {String(window[0] ?? 0).padStart(2, "0")}:00 – {String(window[1] ?? 0).padStart(2, "0")}:00
          </span>
        </div>
        <Slider
          aria-labelledby="slider-window-label"
          min={0}
          max={24}
          step={1}
          value={window}
          onValueChange={(value) => setWindow(Array.isArray(value) ? [...value] : [Number(value)])}
        />
      </div>
    </div>
  );
}
