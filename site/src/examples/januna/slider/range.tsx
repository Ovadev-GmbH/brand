import { Slider } from "@ovadev-gmbh/ui-januna";

export default function SliderRange() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <div className="flex flex-col gap-1">
        <span id="slider-range-label" className="text-label-14">
          Party sizes bookable online
        </span>
        <span className="text-copy-13 text-content-secondary">Larger parties call the restaurant.</span>
      </div>
      <Slider defaultValue={[2, 8]} min={1} max={12} aria-labelledby="slider-range-label" />
      <div className="flex justify-between text-label-12-mono text-content-tertiary">
        <span>1 guest</span>
        <span>12 guests</span>
      </div>
    </div>
  );
}
