import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon, Mail01Icon, Search01Icon } from "@hugeicons/core-free-icons";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@ovadev-gmbh/ui-januna";

export default function InputGroupDemo() {
  return (
    <div className="grid w-full max-w-xl gap-4">
      <InputGroup>
        <InputGroupInput placeholder="Search bookings, guests, tables…" />
        <InputGroupAddon>
          <HugeiconsIcon icon={Search01Icon} strokeWidth={2} />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <InputGroupText>128 results</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput type="email" placeholder="guest@example.com" />
        <InputGroupAddon>
          <HugeiconsIcon icon={Mail01Icon} strokeWidth={2} />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <InputGroupButton>
            Invite
            <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupTextarea placeholder="Note for the kitchen: allergies, a birthday, a window table…" />
        <InputGroupAddon align="block-end">
          <InputGroupText>0 / 280</InputGroupText>
          <InputGroupButton className="ml-auto" variant="default" size="xs">
            Save note
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}
