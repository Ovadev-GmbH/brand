import * as React from "react";
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { Copy01Icon, Message01Icon, Tick02Icon } from "@hugeicons/core-free-icons";

const phone = "+41 79 123 45 67";

export default function InputGroupWithButton() {
  const [copied, setCopied] = React.useState(false);

  return (
    <InputGroup className="w-96">
      <InputGroupInput aria-label="Guest phone" value={phone} readOnly />
      <InputGroupAddon align="inline-end">
        <InputGroupButton size="icon-xs" aria-label="Text the guest">
          <HugeiconsIcon icon={Message01Icon} strokeWidth={2} />
        </InputGroupButton>
        <InputGroupButton
          onClick={() => {
            navigator.clipboard?.writeText(phone).catch(() => {});
            setCopied(true);
          }}
        >
          <HugeiconsIcon icon={copied ? Tick02Icon : Copy01Icon} strokeWidth={2} data-icon="inline-start" />
          {copied ? "Copied" : "Copy"}
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  );
}
