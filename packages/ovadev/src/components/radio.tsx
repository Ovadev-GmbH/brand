/* Radio — the Base UI component with this brand's class on every part
   that renders an element. Nothing here styles it: the classes are the hooks,
   and styles/radio.css is where the brand goes.

   Parts that render no element of their own (Root, Provider, Collection) and
   the helpers (createHandle, useFilter) pass straight through, unwrapped.

   Anatomy:
   <RadioGroup>
     <Radio.Root>
       <Radio.Indicator />
     </Radio.Root>
   </RadioGroup>;
*/
import { Radio as RadioPrimitive } from "@base-ui/react/radio";
import { RadioGroup as RadioGroupPrimitive } from "@base-ui/react/radio-group";
import { part } from "./part";
import "../styles/radio.css";

export const Radio = {
  Indicator: part(RadioPrimitive.Indicator, "ova-radio-indicator"),
  Root: part(RadioPrimitive.Root, "ova-radio"),
};

export const RadioGroup = part(RadioGroupPrimitive, "ova-radio-group");
