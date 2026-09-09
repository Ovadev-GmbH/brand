/* Tooltip — the Base UI component with this brand's class on every part
   that renders an element. Nothing here styles it: the classes are the hooks,
   and styles/tooltip.css is where the brand goes.

   Parts that render no element of their own (Root, Provider, Collection) and
   the helpers (createHandle, useFilter) pass straight through, unwrapped.

   Anatomy:
   <Tooltip.Provider>
     <Tooltip.Root>
       <Tooltip.Trigger />
       <Tooltip.Portal>
         <Tooltip.Positioner>
           <Tooltip.Popup>
             <Tooltip.Arrow />
             <Tooltip.Viewport />
           </Tooltip.Popup>
         </Tooltip.Positioner>
       </Tooltip.Portal>
     </Tooltip.Root>
   </Tooltip.Provider>;
*/
import { Tooltip as TooltipPrimitive } from "@base-ui/react/tooltip";
import { part } from "./part";
import "../styles/tooltip.css";

export const Tooltip = {
  Arrow: part(TooltipPrimitive.Arrow, "tova-tooltip-arrow"),
  Handle: TooltipPrimitive.Handle,
  Popup: part(TooltipPrimitive.Popup, "tova-tooltip-popup"),
  Portal: part(TooltipPrimitive.Portal, "tova-tooltip-portal"),
  Positioner: part(TooltipPrimitive.Positioner, "tova-tooltip-positioner"),
  Provider: TooltipPrimitive.Provider,
  Root: TooltipPrimitive.Root,
  Trigger: part(TooltipPrimitive.Trigger, "tova-tooltip-trigger"),
  Viewport: part(TooltipPrimitive.Viewport, "tova-tooltip-viewport"),
  createHandle: TooltipPrimitive.createHandle,
};
