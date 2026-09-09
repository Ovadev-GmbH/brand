/* Input — the Base UI component with this brand's class on every part
   that renders an element. Nothing here styles it: the classes are the hooks,
   and styles/input.css is where the brand goes.

   Parts that render no element of their own (Root, Provider, Collection) and
   the helpers (createHandle, useFilter) pass straight through, unwrapped.

   Anatomy:
   <Input />;
*/
import { Input as InputPrimitive } from "@base-ui/react/input";
import { part } from "./part";
import "../styles/input.css";

export const Input = part(InputPrimitive, "tova-input");
