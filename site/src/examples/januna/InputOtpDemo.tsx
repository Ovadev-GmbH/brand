import * as React from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
  Label,
} from "@ovadev-gmbh/ui-januna";

export default function InputOtpDemo() {
  const [code, setCode] = React.useState("");

  return (
    <div className="grid max-w-[640px] gap-6">
      <div className="grid gap-2">
        <Label htmlFor="booking-code">Confirmation code</Label>
        <InputOTP
          id="booking-code"
          maxLength={6}
          pattern="^\d+$"
          value={code}
          onChange={setCode}
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
        <p className="text-sm text-muted-foreground">
          {code.length === 6 ? "Looking up your booking…" : "We sent a 6-digit code to your phone."}
        </p>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="table-pin">Table PIN</Label>
        <InputOTP id="table-pin" maxLength={4} defaultValue="12">
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
          </InputOTPGroup>
        </InputOTP>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="staff-pin">Staff PIN (disabled)</Label>
        <InputOTP id="staff-pin" maxLength={4} disabled>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
          </InputOTPGroup>
        </InputOTP>
      </div>
    </div>
  );
}
