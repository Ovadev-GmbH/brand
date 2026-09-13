import { StatusDot } from "@ovadev-gmbh/ui-internal";

const builds = [
  { state: "pending", note: "Queued behind 2 builds" },
  { state: "active", note: "Building, 2 of 3 workers" },
  { state: "ready", note: "Live since 09:14 UTC" },
  { state: "error", note: "Migration 0142 failed" },
  { state: "canceled", note: "Stopped by l.meier@ova.dev" },
  { state: "archived", note: "Replaced by 4f8c2a9" },
] as const;

export default function StatusDotStates() {
  return (
    <ul className="flex w-80 flex-col gap-2">
      {builds.map((build) => (
        <li key={build.state} className="flex items-center justify-between gap-4">
          <StatusDot state={build.state} label titlePrefix="This build" />
          <span className="text-label-13 text-content-secondary">{build.note}</span>
        </li>
      ))}
    </ul>
  );
}
