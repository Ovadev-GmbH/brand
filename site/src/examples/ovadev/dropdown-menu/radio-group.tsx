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
} from "@ovadev-gmbh/ui-ovadev";
import { ChevronDownIcon } from "lucide-react";

const sites = [
  { value: "ova", label: "ova.dev", host: "ova.dev" },
  { value: "ticketova", label: "TICKETOVA", host: "ticketova.ch" },
  { value: "januna", label: "JANUNA", host: "januna.ch" },
];

export default function DropdownMenuRadioGroupExample() {
  const [site, setSite] = React.useState("ova");
  const current = sites.find((s) => s.value === site)!;

  return (
    <div className="flex flex-col items-start gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger render={<Button variant="outline" />}>
          {current.label}
          <ChevronDownIcon data-icon="inline-end" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-44">
          <DropdownMenuGroup>
            <DropdownMenuLabel>Site</DropdownMenuLabel>
            <DropdownMenuRadioGroup value={site} onValueChange={setSite}>
              {sites.map((s) => (
                <DropdownMenuRadioItem key={s.value} value={s.value}>
                  {s.label}
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
