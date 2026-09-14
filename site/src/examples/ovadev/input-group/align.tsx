import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
  Label,
} from "@ovadev-gmbh/ui-ovadev";
import { SearchIcon } from "lucide-react";

export default function InputGroupAlign() {
  return (
    <div className="grid w-80 gap-4">
      <InputGroup>
        <InputGroupInput aria-label="Search the blog" placeholder="Search the blog" />
        <InputGroupAddon align="inline-start">
          <SearchIcon />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput aria-label="Project budget" className="text-right text-label-13-mono" defaultValue="25'000.00" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>CHF</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput
          id="input-group-align-webhook"
          className="text-label-13-mono"
          defaultValue="https://www.tuerlersee.ch"
        />
        <InputGroupAddon align="block-start">
          <Label htmlFor="input-group-align-webhook" className="text-content-secondary">
            Company website
          </Label>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}
