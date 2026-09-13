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
} from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";

const scopes: Record<string, { label: string; placeholder: string }> = {
  guest: { label: "Guest", placeholder: "Lea Meier" },
  table: { label: "Table", placeholder: "Terrace 3" },
  phone: { label: "Phone", placeholder: "+41 79 123 45 67" },
};

export default function InputGroupWithDropdown() {
  const [scope, setScope] = React.useState("guest");
  const current = scopes[scope]!;

  return (
    <InputGroup className="w-96">
      <InputGroupInput aria-label={`Find by ${current.label.toLowerCase()}`} placeholder={current.placeholder} />
      <InputGroupAddon align="inline-end">
        <DropdownMenu>
          <DropdownMenuTrigger render={<InputGroupButton />}>
            {current.label}
            <HugeiconsIcon icon={ArrowDown01Icon} strokeWidth={2} data-icon="inline-end" />
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
