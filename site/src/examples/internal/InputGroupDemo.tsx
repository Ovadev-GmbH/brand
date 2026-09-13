import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText } from "@ovadev-gmbh/ui-internal";
import { SearchIcon } from "lucide-react";

export default function InputGroupDemo() {
  return (
    <InputGroup className="w-full max-w-sm">
      <InputGroupInput aria-label="Search invoices" placeholder="Search invoices" />
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">
        <InputGroupText className="text-label-13-mono">48 results</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  );
}
