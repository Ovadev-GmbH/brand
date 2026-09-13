import { InputGroup, InputGroupAddon, InputGroupInput, Kbd } from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { Search01Icon } from "@hugeicons/core-free-icons";

export default function KbdInputGroup() {
  return (
    <InputGroup className="w-80">
      <InputGroupInput aria-label="Search guests" placeholder="Search guests" />
      <InputGroupAddon>
        <HugeiconsIcon icon={Search01Icon} strokeWidth={2} />
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">
        <Kbd>/</Kbd>
      </InputGroupAddon>
    </InputGroup>
  );
}
