import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText } from "@ovadev-gmbh/ui-ticketova";

export default function InputGroupWithText() {
  return (
    <div className="grid w-72 gap-4">
      <InputGroup>
        <InputGroupInput aria-label="Monthly spend limit" className="text-right text-label-13-mono" defaultValue="2'500.00" />
        <InputGroupAddon>
          <InputGroupText>CHF</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput aria-label="Audit log retention" className="text-right text-label-13-mono" defaultValue="90" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>days</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}
