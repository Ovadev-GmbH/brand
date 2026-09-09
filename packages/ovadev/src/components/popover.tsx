/* Popover — the Base UI component with this brand's class on every part
   that renders an element. Nothing here styles it: the classes are the hooks,
   and styles/popover.css is where the brand goes.

   Parts that render no element of their own (Root, Provider, Collection) and
   the helpers (createHandle, useFilter) pass straight through, unwrapped.

   Anatomy:
   <Popover.Root>
     <Popover.Trigger />
     <Popover.Portal>
       <Popover.Backdrop />
       <Popover.Positioner>
         <Popover.Popup>
           <Popover.Arrow />
           <Popover.Viewport>
             <Popover.Title />
             <Popover.Description />
             <Popover.Close />
           </Popover.Viewport>
         </Popover.Popup>
       </Popover.Positioner>
     </Popover.Portal>
   </Popover.Root>;
*/
import { Popover as PopoverPrimitive } from "@base-ui/react/popover";
import { part } from "./part";
import "../styles/popover.css";

export const Popover = {
  Arrow: part(PopoverPrimitive.Arrow, "ova-popover-arrow"),
  Backdrop: part(PopoverPrimitive.Backdrop, "ova-popover-backdrop"),
  Close: part(PopoverPrimitive.Close, "ova-popover-close"),
  Description: part(PopoverPrimitive.Description, "ova-popover-description"),
  Handle: PopoverPrimitive.Handle,
  Popup: part(PopoverPrimitive.Popup, "ova-popover-popup"),
  Portal: part(PopoverPrimitive.Portal, "ova-popover-portal"),
  Positioner: part(PopoverPrimitive.Positioner, "ova-popover-positioner"),
  Root: PopoverPrimitive.Root,
  Title: part(PopoverPrimitive.Title, "ova-popover-title"),
  Trigger: part(PopoverPrimitive.Trigger, "ova-popover-trigger"),
  Viewport: part(PopoverPrimitive.Viewport, "ova-popover-viewport"),
  createHandle: PopoverPrimitive.createHandle,
};
