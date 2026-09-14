import * as React from "react";
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@ovadev-gmbh/ui-ovadev";

const lettersAndDigits = "^[a-zA-Z0-9]+$";

export default function InputOtpAlphanumeric() {
  const [code, setCode] = React.useState("");

  return (
    <InputOTP
      maxLength={8}
      pattern={lettersAndDigits}
      inputMode="text"
      value={code}
      onChange={(next) => setCode(next.toUpperCase())}
      aria-label="Recovery code"
    >
      <InputOTPGroup>
        <InputOTPSlot index={0} className="text-label-13-mono" />
        <InputOTPSlot index={1} className="text-label-13-mono" />
        <InputOTPSlot index={2} className="text-label-13-mono" />
        <InputOTPSlot index={3} className="text-label-13-mono" />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={4} className="text-label-13-mono" />
        <InputOTPSlot index={5} className="text-label-13-mono" />
        <InputOTPSlot index={6} className="text-label-13-mono" />
        <InputOTPSlot index={7} className="text-label-13-mono" />
      </InputOTPGroup>
    </InputOTP>
  );
}
