import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText } from "@ovadev-gmbh/ui-internal";
import { LockIcon } from "lucide-react";

export default function InputGroupDisabled() {
  return (
    <InputGroup className="w-80">
      <InputGroupInput aria-label="Tenant ID" className="text-label-13-mono" defaultValue="tnt_8f2k1q" disabled />
      <InputGroupAddon>
        <LockIcon />
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">
        <InputGroupText>Set at creation</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  );
}
