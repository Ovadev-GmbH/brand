import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText, Spinner } from "@ovadev-gmbh/ui-internal";

export default function InputGroupWithSpinner() {
  return (
    <InputGroup className="w-96">
      <InputGroupInput aria-label="Custom domain" className="text-label-13-mono" defaultValue="billing.acme.ch" readOnly />
      <InputGroupAddon align="inline-end">
        <InputGroupText>Checking DNS</InputGroupText>
        <Spinner />
      </InputGroupAddon>
    </InputGroup>
  );
}
