import * as React from "react";
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@ovadev-gmbh/ui-januna";

const lettersAndDigits = "^[a-zA-Z0-9]+$";
const halves = [
  [0, 1, 2, 3],
  [4, 5, 6, 7],
];

export default function InputOtpAlphanumeric() {
  const [code, setCode] = React.useState("");

  return (
    <InputOTP
      maxLength={8}
      pattern={lettersAndDigits}
      inputMode="text"
      value={code}
      onChange={(next) => setCode(next.toUpperCase())}
      containerClassName="gap-2"
      aria-label="Gift voucher code"
    >
      {halves.map((half, i) => (
        <React.Fragment key={i}>
          {i > 0 ? <InputOTPSeparator /> : null}
          <InputOTPGroup>
            {half.map((index) => (
              <InputOTPSlot key={index} index={index} className="text-label-14-mono" />
            ))}
          </InputOTPGroup>
        </React.Fragment>
      ))}
    </InputOTP>
  );
}
