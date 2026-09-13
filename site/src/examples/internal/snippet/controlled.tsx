import * as React from "react";
import { Snippet } from "@ovadev-gmbh/ui-internal";

const hosts = [
  { environment: "Production", url: "https://acme-logistics.ova.dev" },
  { environment: "Staging", url: "https://acme-logistics.staging.ova.dev" },
];

export default function SnippetControlled() {
  const [copied, setCopied] = React.useState<string | null>(null);

  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      {hosts.map((host) => (
        <Snippet
          key={host.environment}
          prompt={false}
          text={host.url}
          copied={copied === host.environment}
          onCopy={() => setCopied(host.environment)}
        />
      ))}
      <span className="text-label-13 text-content-secondary">
        {copied ? `${copied} URL copied` : "Nothing copied yet"}
      </span>
    </div>
  );
}
