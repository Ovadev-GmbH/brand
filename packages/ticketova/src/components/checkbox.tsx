/* Checkbox — the Base UI component with this brand's class on every part
   that renders an element. Nothing here styles it: the classes are the hooks,
   and styles/checkbox.css is where the brand goes.

   Parts that render no element of their own (Root, Provider, Collection) and
   the helpers (createHandle, useFilter) pass straight through, unwrapped.

   Anatomy:
   <Checkbox.Root>
     <Checkbox.Indicator />
   </Checkbox.Root>;
*/
import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox";
import { part } from "./part";
import "../styles/checkbox.css";

export const Checkbox = {
  Indicator: part(CheckboxPrimitive.Indicator, "tova-checkbox-indicator"),
  Root: part(CheckboxPrimitive.Root, "tova-checkbox"),
};
