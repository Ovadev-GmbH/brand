import { InputGroup, InputGroupAddon, InputGroupInput, Kbd, KbdGroup } from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { Search01Icon } from "@hugeicons/core-free-icons";

export default function InputGroupWithKbd() {
  return (
    <InputGroup className="w-80">
      <InputGroupInput aria-label="Search bookings" placeholder="Search bookings" />
      <InputGroupAddon>
        <HugeiconsIcon icon={Search01Icon} strokeWidth={2} />
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
