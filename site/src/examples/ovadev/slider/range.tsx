import { Slider } from "@ovadev-gmbh/ui-ovadev";

export default function SliderRange() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <span id="slider-range-label" className="text-label-13">
        Children&rsquo;s rate, age
      </span>
      <Slider defaultValue={[6, 16]} min={1} max={20} aria-labelledby="slider-range-label" />
      <div className="flex justify-between text-label-12-mono text-content-tertiary">
        <span>1</span>
        <span>20</span>
      </div>
    </div>
  );
}
