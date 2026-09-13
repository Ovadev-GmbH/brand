import { Field, FieldError, FieldLabel, InputOTP, InputOTPGroup, InputOTPSlot } from "@ovadev-gmbh/ui-januna";

export default function InputOtpInvalid() {
  return (
    <Field data-invalid className="w-80">
      <FieldLabel htmlFor="input-otp-invalid-code">Code from the text message</FieldLabel>
      <InputOTP id="input-otp-invalid-code" maxLength={6} defaultValue="718204">
        <InputOTPGroup>
          <InputOTPSlot index={0} aria-invalid />
          <InputOTPSlot index={1} aria-invalid />
          <InputOTPSlot index={2} aria-invalid />
          <InputOTPSlot index={3} aria-invalid />
          <InputOTPSlot index={4} aria-invalid />
          <InputOTPSlot index={5} aria-invalid />
        </InputOTPGroup>
      </InputOTP>
      <FieldError>This code has expired. Send a new one to the guest.</FieldError>
    </Field>
  );
}
