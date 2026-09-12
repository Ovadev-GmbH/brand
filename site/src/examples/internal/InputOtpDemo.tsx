import { InputOTP, InputOTPGroup, InputOTPSlot } from "@ovadev-gmbh/ui-internal";

export default function InputOtpDemo() {
  return (
    <InputOTP maxLength={6} defaultValue="729104" aria-label="Sign-in code">
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
