import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText, Spinner } from "@ovadev-gmbh/ui-ovadev";

export default function InputGroupWithSpinner() {
  return (
    <InputGroup className="w-96">
      <InputGroupInput aria-label="Company website" className="text-label-13-mono" defaultValue="www.tuerlersee.ch" readOnly />
      <InputGroupAddon align="inline-end">
        <InputGroupText>Checking</InputGroupText>
        <Spinner />
      </InputGroupAddon>
    </InputGroup>
  );
}
