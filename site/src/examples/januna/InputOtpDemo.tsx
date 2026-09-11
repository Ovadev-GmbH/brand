import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
  Label,
} from "@ovadev-gmbh/ui-januna";

export default function InputOtpDemo() {
  return (
    <div className="grid gap-2">
      <Label htmlFor="booking-code">Confirmation code</Label>
      <InputOTP id="booking-code" maxLength={6} pattern="^\d+$">
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
    </div>
  );
}
