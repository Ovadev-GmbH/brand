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
  Arrow: part(PopoverPrimitive.Arrow, "ui-popover-arrow"),
  Backdrop: part(PopoverPrimitive.Backdrop, "ui-popover-backdrop"),
  Close: part(PopoverPrimitive.Close, "ui-popover-close"),
  Description: part(PopoverPrimitive.Description, "ui-popover-description"),
  Handle: PopoverPrimitive.Handle,
  Popup: part(PopoverPrimitive.Popup, "ui-popover-popup"),
  Portal: part(PopoverPrimitive.Portal, "ui-popover-portal"),
  Positioner: part(PopoverPrimitive.Positioner, "ui-popover-positioner"),
  Root: PopoverPrimitive.Root,
  Title: part(PopoverPrimitive.Title, "ui-popover-title"),
  Trigger: part(PopoverPrimitive.Trigger, "ui-popover-trigger"),
  Viewport: part(PopoverPrimitive.Viewport, "ui-popover-viewport"),
  createHandle: PopoverPrimitive.createHandle,
};
