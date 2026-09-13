import { InputGroup, InputGroupAddon, InputGroupInput } from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { Call02Icon, Mail01Icon } from "@hugeicons/core-free-icons";

export default function InputGroupWithIcon() {
  return (
    <div className="grid w-80 gap-4">
      <InputGroup>
        <InputGroupInput type="email" aria-label="Guest e-mail" placeholder="lea.meier@example.ch" />
        <InputGroupAddon>
          <HugeiconsIcon icon={Mail01Icon} strokeWidth={2} />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput type="tel" aria-label="Guest phone" placeholder="+41 79 123 45 67" />
        <InputGroupAddon>
          <HugeiconsIcon icon={Call02Icon} strokeWidth={2} />
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}
