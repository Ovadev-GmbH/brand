import { InputGroup, InputGroupAddon, InputGroupInput, Kbd, KbdGroup } from "@ovadev-gmbh/ui-ovadev";
import { SearchIcon } from "lucide-react";

export default function InputGroupWithKbd() {
  return (
    <InputGroup className="w-80">
      <InputGroupInput aria-label="Search the brand pages" placeholder="Search the brand pages" />
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
        </KbdGroup>
      </InputGroupAddon>
    </InputGroup>
  );
}
