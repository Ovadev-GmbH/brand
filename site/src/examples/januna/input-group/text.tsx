import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText } from "@ovadev-gmbh/ui-januna";

export default function InputGroupWithText() {
  return (
    <div className="grid w-72 gap-4">
      <InputGroup>
        <InputGroupInput aria-label="Deposit per guest" inputMode="decimal" className="text-right" defaultValue="25.00" />
        <InputGroupAddon>
          <InputGroupText>CHF</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput aria-label="Hold a late table for" inputMode="numeric" className="text-right" defaultValue="15" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>minutes</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}
