import * as React from "react";
import {
  Label,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@ovadev-gmbh/ui-internal";

const regions = [
  { label: "eu-central-1", value: "eu-central-1" },
  { label: "eu-west-1", value: "eu-west-1" },
  { label: "ch-zrh-1", value: "ch-zrh-1" },
  { label: "us-east-1", value: "us-east-1" },
  { label: "us-west-2", value: "us-west-2", disabled: true },
];

const environments = [
  { label: "Production", value: "production" },
  { label: "Staging", value: "staging" },
  { label: "Preview", value: "preview" },
];

export default function SelectDemo() {
  const [region, setRegion] = React.useState<string | null>(null);

  return (
    <div className="flex w-full max-w-xl flex-wrap items-end gap-3">
      <div className="grid gap-2">
        <Label htmlFor="select-region">Region</Label>
        <Select items={regions} value={region} onValueChange={setRegion}>
          <SelectTrigger id="select-region" className="w-48 text-label-13-mono">
            <SelectValue placeholder="Pick a region" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Europe</SelectLabel>
              {regions.slice(0, 3).map((item) => (
                <SelectItem key={item.value} value={item.value} disabled={item.disabled}>
                  <span className="text-label-13-mono">{item.label}</span>
                </SelectItem>
              ))}
            </SelectGroup>
            <SelectSeparator />
            <SelectGroup>
              <SelectLabel>United States</SelectLabel>
              {regions.slice(3).map((item) => (
                <SelectItem key={item.value} value={item.value} disabled={item.disabled}>
                  <span className="text-label-13-mono">{item.label}</span>
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="select-env">Environment</Label>
        <Select items={environments} defaultValue="production">
          <SelectTrigger id="select-env" size="sm">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {environments.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
