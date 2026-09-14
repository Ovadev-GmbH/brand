import * as React from "react";
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "@ovadev-gmbh/ui-ovadev";
import { CheckIcon, CopyIcon, EyeIcon, EyeOffIcon } from "lucide-react";

const secret = "TL-2026-SEASON-4K9P";

export default function InputGroupWithButton() {
  const [shown, setShown] = React.useState(false);
  const [copied, setCopied] = React.useState(false);

  return (
    <InputGroup className="w-96">
      <InputGroupInput
        aria-label="Press kit access code"
        className="text-label-13-mono"
        type={shown ? "text" : "password"}
        value={secret}
        readOnly
      />
      <InputGroupAddon align="inline-end">
        <InputGroupButton size="icon-xs" aria-label={shown ? "Hide code" : "Show code"} onClick={() => setShown(!shown)}>
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
