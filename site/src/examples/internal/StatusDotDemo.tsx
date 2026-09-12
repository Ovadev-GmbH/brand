import { StatusDot } from "@ovadev-gmbh/ui-internal";

export default function StatusDotDemo() {
  return (
    <div className="flex max-w-xl flex-col gap-4">
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
          <StatusDot state="active" size="sm" titlePrefix="Deployment 4f8c2a9" />
          <span className="text-label-13-mono">4f8c2a9</span> api-gateway — building, 2 of 3 workers
        </li>
        <li className="flex items-center gap-2">
          <StatusDot state="ready" size="sm" titlePrefix="Deployment b31e07d" />
          <span className="text-label-13-mono">b31e07d</span> billing-worker — live since 09:14
        </li>
        <li className="flex items-center gap-2">
          <StatusDot state="error" size="sm" titlePrefix="Deployment 9d02c5f" />
          <span className="text-label-13-mono">9d02c5f</span> tenant-sync — exited 1, migration failed
        </li>
      </ul>
    </div>
  );
}
