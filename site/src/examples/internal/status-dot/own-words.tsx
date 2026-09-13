import { StatusDot } from "@ovadev-gmbh/ui-internal";

const deployments = [
  { id: "4f8c2a9", service: "api-gateway", state: "active", word: "Building" },
  { id: "b31e07d", service: "billing-worker", state: "ready", word: "Live" },
  { id: "9d02c5f", service: "tenant-sync", state: "error", word: "Failed" },
] as const;

export default function StatusDotOwnWords() {
  return (
    <ul className="flex w-72 flex-col gap-2">
      {deployments.map((d) => (
        <li key={d.id} className="flex items-center gap-2 text-label-13">
          <StatusDot state={d.state} titlePrefix={`Deployment ${d.id}`} />
          <span className="w-16">{d.word}</span>
          <span className="text-label-13-mono">{d.id}</span>
          <span className="text-content-secondary">{d.service}</span>
        </li>
      ))}
    </ul>
  );
}
