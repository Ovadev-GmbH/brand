import { StatusDot } from "@ovadev-gmbh/ui-internal";

const checks = [
  { name: "Build", state: "ready" },
  { name: "Certificate", state: "pending" },
  { name: "Webhook", state: "error" },
] as const;

export default function StatusDotLabel() {
  return (
    <dl className="grid w-64 grid-cols-[auto_1fr] gap-x-6 gap-y-2">
      {checks.map((check) => (
        <div key={check.name} className="contents">
          <dt className="text-label-13 text-content-secondary">{check.name}</dt>
          <dd>
            <StatusDot state={check.state} label titlePrefix={check.name} />
          </dd>
        </div>
      ))}
    </dl>
  );
}
