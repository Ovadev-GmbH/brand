import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@ovadev-gmbh/ui-ovadev";
import { ChevronDownIcon } from "lucide-react";

const scopes: Record<string, { label: string; placeholder: string }> = {
  post: { label: "Post", placeholder: "tuerlersee-season-2026" },
  page: { label: "Page", placeholder: "about-us" },
  release: { label: "Release", placeholder: "ticketova-2.14.0" },
};

export default function InputGroupWithDropdown() {
  const [scope, setScope] = React.useState("post");
  const current = scopes[scope]!;

  return (
    <InputGroup className="w-96">
      <InputGroupInput
        aria-label={`Find ${current.label.toLowerCase()}`}
        className="text-label-13-mono"
        placeholder={current.placeholder}
      />
      <InputGroupAddon align="inline-end">
        <DropdownMenu>
          <DropdownMenuTrigger render={<InputGroupButton />}>
            {current.label}
            <ChevronDownIcon data-icon="inline-end" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-40">
            <DropdownMenuRadioGroup value={scope} onValueChange={setScope}>
              {Object.entries(scopes).map(([value, { label }]) => (
                <DropdownMenuRadioItem key={value} value={value}>
                  {label}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </InputGroupAddon>
    </InputGroup>
  );
}
