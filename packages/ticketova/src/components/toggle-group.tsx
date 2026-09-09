/* Toggle Group — the Base UI component with this brand's class on every part
   that renders an element. Nothing here styles it: the classes are the hooks,
   and styles/toggle-group.css is where the brand goes.

   Parts that render no element of their own (Root, Provider, Collection) and
   the helpers (createHandle, useFilter) pass straight through, unwrapped.

   Anatomy:
   <ToggleGroup />;
*/
import { ToggleGroup as ToggleGroupPrimitive } from "@base-ui/react/toggle-group";
import { part } from "./part";
import "../styles/toggle-group.css";

export const ToggleGroup = part(ToggleGroupPrimitive, "tova-toggle-group");
