import { Spinner } from "@ovadev-gmbh/ui-ticketova";

export default function SpinnerWithText() {
  return (
    <div className="flex flex-col gap-3">
      <div role="status" className="flex items-center gap-2 text-label-13 text-content-secondary">
        <Spinner aria-hidden className="size-3.5" />
        Fetching the audit log of acme-logistics
      </div>
      <div role="status" className="flex items-center gap-2 text-label-13">
        <Spinner aria-hidden className="size-3.5" />
        Retrying delivery <span className="text-label-13-mono">dlv_8Hq2Zr</span>, attempt 2 of 5
      </div>
    </div>
  );
}
