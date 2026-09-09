/* Collapsible — the Base UI component with this brand's class on every part
   that renders an element. Nothing here styles it: the classes are the hooks,
   and styles/collapsible.css is where the brand goes.

   Parts that render no element of their own (Root, Provider, Collection) and
   the helpers (createHandle, useFilter) pass straight through, unwrapped.

   Anatomy:
   <Collapsible.Root>
     <Collapsible.Trigger />
     <Collapsible.Panel />
   </Collapsible.Root>;
*/
import { Collapsible as CollapsiblePrimitive } from "@base-ui/react/collapsible";
import { part } from "./part";
import "../styles/collapsible.css";

export const Collapsible = {
  Panel: part(CollapsiblePrimitive.Panel, "tova-collapsible-panel"),
  Root: part(CollapsiblePrimitive.Root, "tova-collapsible"),
  Trigger: part(CollapsiblePrimitive.Trigger, "tova-collapsible-trigger"),
};
