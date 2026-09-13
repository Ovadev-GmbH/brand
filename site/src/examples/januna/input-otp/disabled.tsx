import { InputOTP, InputOTPGroup, InputOTPSlot } from "@ovadev-gmbh/ui-januna";

export default function InputOtpDisabled() {
  return (
    <InputOTP maxLength={6} disabled aria-label="Code from the text message">
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
