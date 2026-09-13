import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText, Spinner } from "@ovadev-gmbh/ui-januna";

export default function InputGroupWithSpinner() {
  return (
    <InputGroup className="w-96">
      <InputGroupInput
        aria-label="Gift voucher"
        className="text-label-14-mono md:text-label-14-mono"
        defaultValue="GV-2026-0418"
        readOnly
      />
      <InputGroupAddon align="inline-end">
        <InputGroupText>Checking voucher</InputGroupText>
        <Spinner />
      </InputGroupAddon>
    </InputGroup>
  );
}
