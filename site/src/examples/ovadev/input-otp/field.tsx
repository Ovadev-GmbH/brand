import {
  Field,
  FieldDescription,
  FieldLabel,
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@ovadev-gmbh/ui-ovadev";

export default function InputOtpField() {
  return (
    <Field className="w-72">
      <FieldLabel htmlFor="input-otp-field-code">Sign-in code</FieldLabel>
      <InputOTP id="input-otp-field-code" maxLength={6} pattern="^\d+$">
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      <FieldDescription>Sent to robin@ova.dev. It is valid for 10 minutes.</FieldDescription>
    </Field>
  );
}
