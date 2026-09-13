import {
  Field,
  FieldDescription,
  FieldLabel,
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@ovadev-gmbh/ui-januna";

export default function InputOtpField() {
  return (
    <Field className="w-80">
      <FieldLabel htmlFor="input-otp-field-code">Code from the text message</FieldLabel>
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
      <FieldDescription>Sent to +41 79 123 45 67. It is valid for 10 minutes.</FieldDescription>
    </Field>
  );
}
