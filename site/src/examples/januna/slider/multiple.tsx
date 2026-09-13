import { Slider } from "@ovadev-gmbh/ui-januna";

export default function SliderMultiple() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <div className="flex flex-col gap-1">
        <span id="slider-multiple-label" className="text-label-14">
          Capacity alerts
        </span>
        <span className="text-copy-13 text-content-secondary">
          The manager gets a message as tonight&rsquo;s covers pass each mark, in % of the seats.
        </span>
      </div>
      <Slider
        defaultValue={[60, 85, 100]}
        max={110}
        step={5}
        minStepsBetweenValues={2}
        aria-labelledby="slider-multiple-label"
      />
      <div className="flex justify-between text-label-12-mono text-content-tertiary">
        <span>0%</span>
        <span>110%</span>
      </div>
    </div>
  );
}
