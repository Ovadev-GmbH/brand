import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
  Label,
} from "@ovadev-gmbh/ui-internal";
import { SearchIcon } from "lucide-react";

export default function InputGroupAlign() {
  return (
    <div className="grid w-80 gap-4">
      <InputGroup>
        <InputGroupInput aria-label="Search tenants" placeholder="Search tenants" />
        <InputGroupAddon align="inline-start">
          <SearchIcon />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput aria-label="Invoice total" className="text-right text-label-13-mono" defaultValue="1'240.00" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>CHF</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput
          id="input-group-align-webhook"
          className="text-label-13-mono"
          defaultValue="https://acme.ch/hooks/ova"
        />
        <InputGroupAddon align="block-start">
          <Label htmlFor="input-group-align-webhook" className="text-content-secondary">
            Webhook URL
          </Label>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}
