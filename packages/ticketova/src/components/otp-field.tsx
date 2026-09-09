/* OTP Field — the Base UI component with this brand's class on every part
   that renders an element. Nothing here styles it: the classes are the hooks,
   and styles/otp-field.css is where the brand goes.

   Parts that render no element of their own (Root, Provider, Collection) and
   the helpers (createHandle, useFilter) pass straight through, unwrapped.

   Anatomy:
   <OTPField.Root>
     <OTPField.Input />
     <OTPField.Separator />
   </OTPField.Root>;
*/
import { OTPField as OTPFieldPrimitive } from "@base-ui/react/otp-field";
import { part } from "./part";
import "../styles/otp-field.css";

export const OTPField = {
  Input: part(OTPFieldPrimitive.Input, "tova-otp-field-input"),
  Root: part(OTPFieldPrimitive.Root, "tova-otp-field"),
  Separator: part(OTPFieldPrimitive.Separator, "tova-otp-field-separator"),
};
