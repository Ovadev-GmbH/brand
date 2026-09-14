import * as React from "react";
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "@ovadev-gmbh/ui-ovadev";
import { CheckIcon, CopyIcon, EyeIcon, EyeOffIcon } from "lucide-react";

const secret = "sk_live_51Hq8v2cT4kP9xR3";

export default function InputGroupWithButton() {
  const [shown, setShown] = React.useState(false);
  const [copied, setCopied] = React.useState(false);

  return (
    <InputGroup className="w-96">
      <InputGroupInput
        aria-label="Secret key"
        className="text-label-13-mono"
        type={shown ? "text" : "password"}
        value={secret}
        readOnly
      />
      <InputGroupAddon align="inline-end">
        <InputGroupButton size="icon-xs" aria-label={shown ? "Hide key" : "Show key"} onClick={() => setShown(!shown)}>
          {shown ? <EyeOffIcon /> : <EyeIcon />}
        </InputGroupButton>
        <InputGroupButton
          onClick={() => {
            navigator.clipboard?.writeText(secret).catch(() => {});
            setCopied(true);
          }}
        >
          {copied ? <CheckIcon data-icon="inline-start" /> : <CopyIcon data-icon="inline-start" />}
          {copied ? "Copied" : "Copy"}
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  );
}
