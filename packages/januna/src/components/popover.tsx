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
  Arrow: part(PopoverPrimitive.Arrow, "jan-popover-arrow"),
  Backdrop: part(PopoverPrimitive.Backdrop, "jan-popover-backdrop"),
  Close: part(PopoverPrimitive.Close, "jan-popover-close"),
  Description: part(PopoverPrimitive.Description, "jan-popover-description"),
  Handle: PopoverPrimitive.Handle,
  Popup: part(PopoverPrimitive.Popup, "jan-popover-popup"),
  Portal: part(PopoverPrimitive.Portal, "jan-popover-portal"),
  Positioner: part(PopoverPrimitive.Positioner, "jan-popover-positioner"),
  Root: PopoverPrimitive.Root,
  Title: part(PopoverPrimitive.Title, "jan-popover-title"),
  Trigger: part(PopoverPrimitive.Trigger, "jan-popover-trigger"),
  Viewport: part(PopoverPrimitive.Viewport, "jan-popover-viewport"),
  createHandle: PopoverPrimitive.createHandle,
};
