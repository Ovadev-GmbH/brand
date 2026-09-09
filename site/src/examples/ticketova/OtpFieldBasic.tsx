import * as React from "react";
import { OTPField } from "@ovadev-gmbh/ui-ticketova";

const OTP_LENGTH = 6;

export default function OtpFieldBasic() {
  const id = React.useId();
  const descriptionId = `${id}-description`;

  return (
    <div>
      <label htmlFor={id}>
        Verification code
      </label>
      <OTPField.Root
        id={id}
        length={OTP_LENGTH}
        aria-describedby={descriptionId}
      >
        {Array.from({ length: OTP_LENGTH }, (_, index) => (
          <OTPField.Input
            key={index}
            aria-label={index === 0 ? undefined : `Character ${index + 1} of ${OTP_LENGTH}`}
          />
        ))}
      </OTPField.Root>
      <p id={descriptionId}>
        Enter the 6-character code we sent to your device.
      </p>
    </div>
  );
}
