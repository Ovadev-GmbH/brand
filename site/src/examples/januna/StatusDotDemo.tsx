import { StatusDot } from "@ovadev-gmbh/ui-januna";

export default function StatusDotDemo() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
        <StatusDot state="pending" label />
        <StatusDot state="active" label />
        <StatusDot state="ready" label />
        <StatusDot state="error" label />
        <StatusDot state="canceled" label />
        <StatusDot state="archived" label />
      </div>
      <ul className="flex flex-col gap-2 text-label-14 text-content-primary">
        <li className="flex items-center gap-2">
          <StatusDot state="active" size="sm" titlePrefix="Table 4" />
          Table 4 — Keller, party of 6, seated 19:05
        </li>
        <li className="flex items-center gap-2">
          <StatusDot state="ready" size="sm" titlePrefix="Table 7" />
          Table 7 — Moreau, party of 2, arriving 19:30
        </li>
        <li className="flex items-center gap-2">
          <StatusDot state="pending" size="sm" titlePrefix="Table 12" />
          Table 12 — Walk-in request, deposit unpaid
        </li>
      </ul>
    </div>
  );
}
