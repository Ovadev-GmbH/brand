import { Slider } from "@ovadev-gmbh/ui-ticketova";

export default function SliderMultiple() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <div className="flex flex-col gap-1">
        <span id="slider-multiple-label" className="text-label-13">
          Usage alerts
        </span>
        <span className="text-copy-13 text-content-secondary">
          Notify the billing contact as requests pass each mark, in % of the plan&rsquo;s quota.
        </span>
      </div>
      <Slider
        defaultValue={[50, 80, 100]}
        max={120}
        step={5}
        minStepsBetweenValues={2}
        aria-labelledby="slider-multiple-label"
      />
      <div className="flex justify-between text-label-12-mono text-content-tertiary">
        <span>0%</span>
        <span>120%</span>
      </div>
    </div>
  );
}
