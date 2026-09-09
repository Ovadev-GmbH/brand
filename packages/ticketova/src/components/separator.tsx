/* Separator — the Base UI component with this brand's class on every part
   that renders an element. Nothing here styles it: the classes are the hooks,
   and styles/separator.css is where the brand goes.

   Parts that render no element of their own (Root, Provider, Collection) and
   the helpers (createHandle, useFilter) pass straight through, unwrapped.

   Anatomy:
   <Separator />;
*/
import { Separator as SeparatorPrimitive } from "@base-ui/react/separator";
import { part } from "./part";
import "../styles/separator.css";

export const Separator = part(SeparatorPrimitive, "tova-separator");
