import { InputGroup, InputGroupAddon, InputGroupInput, Kbd } from "@ovadev-gmbh/ui-ovadev";
import { SearchIcon } from "lucide-react";

export default function KbdInputGroup() {
  return (
    <InputGroup className="w-80">
      <InputGroupInput aria-label="Search the blog" placeholder="Search the blog" />
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">
        <Kbd>/</Kbd>
      </InputGroupAddon>
    </InputGroup>
  );
}
