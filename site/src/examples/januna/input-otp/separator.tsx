import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@ovadev-gmbh/ui-januna";

export default function InputOtpSeparator() {
  return (
    <InputOTP maxLength={6} containerClassName="gap-2" aria-label="Confirmation code">
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
  );
}
