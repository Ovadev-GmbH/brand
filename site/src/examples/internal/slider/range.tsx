import { Slider } from "@ovadev-gmbh/ui-internal";

export default function SliderRange() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <span id="slider-range-label" className="text-label-13">
        Autoscaling, replicas
      </span>
      <Slider defaultValue={[2, 8]} min={1} max={20} aria-labelledby="slider-range-label" />
      <div className="flex justify-between text-label-12-mono text-content-tertiary">
        <span>1</span>
        <span>20</span>
      </div>
    </div>
  );
}
