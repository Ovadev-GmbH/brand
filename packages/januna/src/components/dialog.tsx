/* Dialog — the Base UI component with this brand's class on every part
   that renders an element. Nothing here styles it: the classes are the hooks,
   and styles/dialog.css is where the brand goes.

   Parts that render no element of their own (Root, Provider, Collection) and
   the helpers (createHandle, useFilter) pass straight through, unwrapped.

   Anatomy:
   <Dialog.Root>
     <Dialog.Trigger />
     <Dialog.Portal>
       <Dialog.Backdrop />
       <Dialog.Viewport>
         <Dialog.Popup>
           <Dialog.Title />
           <Dialog.Description />
           <Dialog.Close />
         </Dialog.Popup>
       </Dialog.Viewport>
     </Dialog.Portal>
   </Dialog.Root>;
*/
import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";
import { part } from "./part";
import "../styles/dialog.css";

export const Dialog = {
  Backdrop: part(DialogPrimitive.Backdrop, "jan-dialog-backdrop"),
  Close: part(DialogPrimitive.Close, "jan-dialog-close"),
  Description: part(DialogPrimitive.Description, "jan-dialog-description"),
  Handle: DialogPrimitive.Handle,
  Popup: part(DialogPrimitive.Popup, "jan-dialog-popup"),
  Portal: part(DialogPrimitive.Portal, "jan-dialog-portal"),
  Root: DialogPrimitive.Root,
  Title: part(DialogPrimitive.Title, "jan-dialog-title"),
  Trigger: part(DialogPrimitive.Trigger, "jan-dialog-trigger"),
  Viewport: part(DialogPrimitive.Viewport, "jan-dialog-viewport"),
  createHandle: DialogPrimitive.createHandle,
};
