/* Switch — the Base UI component with this brand's class on every part
   that renders an element. Nothing here styles it: the classes are the hooks,
   and styles/switch.css is where the brand goes.

   Parts that render no element of their own (Root, Provider, Collection) and
   the helpers (createHandle, useFilter) pass straight through, unwrapped.

   Anatomy:
   <Switch.Root>
     <Switch.Thumb />
   </Switch.Root>;
*/
import { Switch as SwitchPrimitive } from "@base-ui/react/switch";
import { part } from "./part";
import "../styles/switch.css";

export const Switch = {
  Root: part(SwitchPrimitive.Root, "tova-switch"),
  Thumb: part(SwitchPrimitive.Thumb, "tova-switch-thumb"),
};
