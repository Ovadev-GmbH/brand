/* Button — the Base UI component with this brand's class on every part
   that renders an element. Nothing here styles it: the classes are the hooks,
   and styles/button.css is where the brand goes.

   Parts that render no element of their own (Root, Provider, Collection) and
   the helpers (createHandle, useFilter) pass straight through, unwrapped.

   Anatomy:
   <Button />;
*/
import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { part } from "./part";
import "../styles/button.css";

export const Button = part(ButtonPrimitive, "jan-button");
