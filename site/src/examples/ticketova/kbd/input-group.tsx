import { InputGroup, InputGroupAddon, InputGroupInput, Kbd } from "@ovadev-gmbh/ui-ticketova";
import { MagnifyingGlassIcon } from "@ovadev-gmbh/ui-ticketova/icons";

export default function KbdInputGroup() {
  return (
    <InputGroup className="w-80">
      <InputGroupInput aria-label="Search tenants" placeholder="Search tenants" />
      <InputGroupAddon>
        <MagnifyingGlassIcon />
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">
        <Kbd>/</Kbd>
      </InputGroupAddon>
    </InputGroup>
  );
}
