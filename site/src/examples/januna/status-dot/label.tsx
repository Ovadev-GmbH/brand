import { StatusDot } from "@ovadev-gmbh/ui-januna";

const checks = [
  { name: "Confirmation email", state: "ready" },
  { name: "Deposit", state: "pending" },
  { name: "Reminder text", state: "error" },
] as const;

export default function StatusDotLabel() {
  return (
    <dl className="grid w-72 grid-cols-[auto_1fr] gap-x-6 gap-y-2">
      {checks.map((check) => (
        <div key={check.name} className="contents">
          <dt className="text-label-14">{check.name}</dt>
          <dd>
            <StatusDot state={check.state} label titlePrefix={check.name} />
          </dd>
        </div>
      ))}
    </dl>
  );
}
