import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText } from "@ovadev-gmbh/ui-ovadev";
import { LockIcon } from "lucide-react";

export default function InputGroupDisabled() {
  return (
    <InputGroup className="w-80">
      <InputGroupInput aria-label="Company register" className="text-label-13-mono" defaultValue="CHE-312.484.019" disabled />
      <InputGroupAddon>
        <LockIcon />
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">
        <InputGroupText>From the register</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  );
}
