/* Checkbox Group — the Base UI component with this brand's class on every part
   that renders an element. Nothing here styles it: the classes are the hooks,
   and styles/checkbox-group.css is where the brand goes.

   Parts that render no element of their own (Root, Provider, Collection) and
   the helpers (createHandle, useFilter) pass straight through, unwrapped.

   Anatomy:
   <CheckboxGroup>
     <Checkbox.Root />
   </CheckboxGroup>;
*/
import { CheckboxGroup as CheckboxGroupPrimitive } from "@base-ui/react/checkbox-group";
import { part } from "./part";
import "../styles/checkbox-group.css";

export const CheckboxGroup = part(CheckboxGroupPrimitive, "tova-checkbox-group");
