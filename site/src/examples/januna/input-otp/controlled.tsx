import * as React from "react";
import {
  Button,
  Field,
  FieldDescription,
  FieldLabel,
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@ovadev-gmbh/ui-januna";

export default function InputOtpControlled() {
  const [code, setCode] = React.useState("");
  const [complete, setComplete] = React.useState(false);

  return (
    <form className="flex w-80 flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
      <Field>
        <FieldLabel htmlFor="input-otp-controlled-code">Manager code to refund CHF 150.00</FieldLabel>
        <InputOTP
          id="input-otp-controlled-code"
          maxLength={6}
          pattern="^\d+$"
          containerClassName="gap-2"
          value={code}
          onChange={(next) => {
            setCode(next);
            setComplete(false);
          }}
          onComplete={() => setComplete(true)}
        >
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
        <FieldDescription>{complete ? "Code complete." : `${code.length} of 6 digits entered.`}</FieldDescription>
      </Field>
      <Button type="submit" disabled={!complete} className="self-start">
        Refund deposit
      </Button>
    </form>
  );
}
