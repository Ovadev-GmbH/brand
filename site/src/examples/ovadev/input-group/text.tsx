import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText } from "@ovadev-gmbh/ui-ovadev";

export default function InputGroupWithText() {
  return (
    <div className="grid w-72 gap-4">
      <InputGroup>
        <InputGroupInput aria-label="Project budget" className="text-right text-label-13-mono" defaultValue="25'000.00" />
        <InputGroupAddon>
          <InputGroupText>CHF</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput aria-label="Season length" className="text-right text-label-13-mono" defaultValue="120" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>days</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}
