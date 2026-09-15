import * as React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@ovadev-gmbh/ui-ticketova";

const environments = [
  { label: "Production", value: "production" },
  { label: "Staging", value: "staging" },
  { label: "Preview", value: "preview" },
];

const hosts: Record<string, string> = {
  production: "acme.ova.dev",
  staging: "acme.staging.ova.dev",
  preview: "pr-412.acme.preview.ova.dev",
};

export default function SelectControlled() {
  const [environment, setEnvironment] = React.useState<string | null>("staging");

  return (
    <div className="flex flex-col items-start gap-2">
      <Select items={environments} value={environment} onValueChange={setEnvironment}>
        <SelectTrigger className="w-44" aria-label="Environment">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {environments.map((env) => (
            <SelectItem key={env.value} value={env.value}>
              {env.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <span className="text-label-13-mono text-content-secondary">{environment ? hosts[environment] : "–"}</span>
    </div>
  );
}
