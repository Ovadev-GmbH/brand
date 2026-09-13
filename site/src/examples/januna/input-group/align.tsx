import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText, Label } from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { Search01Icon } from "@hugeicons/core-free-icons";

export default function InputGroupAlign() {
  return (
    <div className="grid w-80 gap-4">
      <InputGroup>
        <InputGroupInput aria-label="Search guests" placeholder="Search guests" />
        <InputGroupAddon align="inline-start">
          <HugeiconsIcon icon={Search01Icon} strokeWidth={2} />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput aria-label="Minimum spend" inputMode="decimal" className="text-right" defaultValue="1'240.00" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>CHF</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput id="input-group-align-note" defaultValue="Nut allergy at seat 3" />
        <InputGroupAddon align="block-start">
          <Label htmlFor="input-group-align-note" className="text-content-secondary">
            Note for the kitchen
          </Label>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}
