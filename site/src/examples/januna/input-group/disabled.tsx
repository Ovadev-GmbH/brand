import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText } from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { LockIcon } from "@hugeicons/core-free-icons";

export default function InputGroupDisabled() {
  return (
    <InputGroup data-disabled="true" className="w-80">
      <InputGroupInput aria-label="Table" defaultValue="Terrace 3" disabled />
      <InputGroupAddon>
        <HugeiconsIcon icon={LockIcon} strokeWidth={2} />
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">
        <InputGroupText>Locked by the manager</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  );
}
