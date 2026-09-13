import * as React from "react";
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@ovadev-gmbh/ui-internal";
import { ChevronDownIcon } from "lucide-react";

const environments = [
  { value: "production", label: "Production", host: "acme.ova.dev" },
  { value: "staging", label: "Staging", host: "acme.staging.ova.dev" },
  { value: "preview", label: "Preview", host: "pr-412.acme.preview.ova.dev" },
];

export default function DropdownMenuRadioGroupExample() {
  const [environment, setEnvironment] = React.useState("production");
  const current = environments.find((env) => env.value === environment)!;

  return (
    <div className="flex flex-col items-start gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger render={<Button variant="outline" />}>
          {current.label}
          <ChevronDownIcon data-icon="inline-end" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-44">
          <DropdownMenuGroup>
            <DropdownMenuLabel>Environment</DropdownMenuLabel>
            <DropdownMenuRadioGroup value={environment} onValueChange={setEnvironment}>
              {environments.map((env) => (
                <DropdownMenuRadioItem key={env.value} value={env.value}>
                  {env.label}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <span className="text-label-13-mono text-content-secondary">{current.host}</span>
    </div>
  );
}
