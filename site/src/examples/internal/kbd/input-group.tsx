import { InputGroup, InputGroupAddon, InputGroupInput, Kbd } from "@ovadev-gmbh/ui-internal";
import { SearchIcon } from "lucide-react";

export default function KbdInputGroup() {
  return (
    <InputGroup className="w-80">
      <InputGroupInput aria-label="Search tenants" placeholder="Search tenants" />
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">
        <Kbd>/</Kbd>
      </InputGroupAddon>
    </InputGroup>
  );
}
