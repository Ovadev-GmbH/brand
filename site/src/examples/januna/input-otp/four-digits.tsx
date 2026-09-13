import { InputOTP, InputOTPGroup, InputOTPSlot } from "@ovadev-gmbh/ui-januna";

export default function InputOtpFourDigits() {
  return (
    <InputOTP maxLength={4} pattern="^\d+$" aria-label="Host PIN">
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
      </InputOTPGroup>
    </InputOTP>
  );
}
