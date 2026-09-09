/* Toggle — the Base UI component with this brand's class on every part
   that renders an element. Nothing here styles it: the classes are the hooks,
   and styles/toggle.css is where the brand goes.

   Parts that render no element of their own (Root, Provider, Collection) and
   the helpers (createHandle, useFilter) pass straight through, unwrapped.

   Anatomy:
   <Toggle />;
*/
import { Toggle as TogglePrimitive } from "@base-ui/react/toggle";
import { part } from "./part";
import "../styles/toggle.css";

export const Toggle = part(TogglePrimitive, "tova-toggle");
