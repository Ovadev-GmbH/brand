import { Spinner } from "@ovadev-gmbh/ui-ovadev";

export default function SpinnerWithText() {
  return (
    <div className="flex flex-col gap-3">
      <div role="status" className="flex items-center gap-2 text-label-13 text-content-secondary">
        <Spinner aria-hidden className="size-3.5" />
        Fetching the season report for Türlersee
      </div>
      <div role="status" className="flex items-center gap-2 text-label-13">
        <Spinner aria-hidden className="size-3.5" />
        Sending ticket <span className="text-label-13-mono">T-2026-48213</span>, attempt 2 of 5
      </div>
    </div>
  );
}
