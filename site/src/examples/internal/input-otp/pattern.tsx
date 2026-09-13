import { InputOTP, InputOTPGroup, InputOTPSlot } from "@ovadev-gmbh/ui-internal";

const digitsOnly = "^\\d+$";

export default function InputOtpPattern() {
  return (
    <InputOTP maxLength={6} pattern={digitsOnly} aria-label="Sign-in code">
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  );
}
