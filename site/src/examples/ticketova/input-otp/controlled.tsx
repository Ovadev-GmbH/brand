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
} from "@ovadev-gmbh/ui-ticketova";

export default function InputOtpControlled() {
  const [code, setCode] = React.useState("");
  const [checked, setChecked] = React.useState(false);

  return (
    <form className="flex w-72 flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
      <Field>
        <FieldLabel htmlFor="input-otp-controlled-code">Code to delete bergwerk-ag</FieldLabel>
        <InputOTP
          id="input-otp-controlled-code"
          maxLength={6}
          pattern="^\d+$"
          value={code}
          onChange={(next) => {
            setCode(next);
            setChecked(false);
          }}
          onComplete={() => setChecked(true)}
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
        <FieldDescription>
          {checked ? "Code complete." : `${code.length} of 6 digits entered.`}
        </FieldDescription>
      </Field>
      <Button type="submit" variant="destructive" disabled={!checked} className="self-start">
        Delete tenant
      </Button>
    </form>
  );
}
