import { Slider } from "@ovadev-gmbh/ui-januna";

export default function SliderDisabled() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <div className="flex items-center justify-between">
        <span id="slider-disabled-label" className="text-label-14 text-content-disabled">
          Table hold
        </span>
        <span className="text-label-13-mono text-content-disabled">15 min</span>
      </div>
      <Slider defaultValue={[15]} max={60} step={5} disabled aria-labelledby="slider-disabled-label" />
      <p className="m-0 text-copy-13 text-content-secondary">
        Fixed at 15 minutes on Friday and Saturday dinner. The manager can change it in Settings.
      </p>
    </div>
  );
}
