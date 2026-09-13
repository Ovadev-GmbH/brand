import { Spinner } from "@ovadev-gmbh/ui-januna";

export default function SpinnerWithText() {
  return (
    <div className="flex flex-col gap-3">
      <div role="status" className="flex items-center gap-2 text-label-14 text-content-secondary">
        <Spinner aria-hidden />
        Syncing bookings from the website
      </div>
      <div role="status" className="flex items-center gap-2 text-label-14">
        <Spinner aria-hidden />
        Charging the deposit for Moreau, attempt <span className="text-label-13-mono">2</span> of{" "}
        <span className="text-label-13-mono">3</span>
      </div>
    </div>
  );
}
