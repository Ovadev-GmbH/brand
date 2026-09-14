import { Slider } from "@ovadev-gmbh/ui-ovadev";

export default function SliderDisabled() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <div className="flex items-center justify-between">
        <span id="slider-disabled-label" className="text-label-13 text-content-disabled">
          Log retention
        </span>
        <span className="text-label-13-mono text-content-disabled">30 days</span>
      </div>
      <Slider defaultValue={[30]} min={7} max={90} disabled aria-labelledby="slider-disabled-label" />
      <p className="m-0 text-copy-13 text-content-secondary">Fixed at 30 days on the Starter plan.</p>
    </div>
  );
}
