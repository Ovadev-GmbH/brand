/* Alert Dialog — the Base UI component with this brand's class on every part
   that renders an element. Nothing here styles it: the classes are the hooks,
   and styles/alert-dialog.css is where the brand goes.

   Parts that render no element of their own (Root, Provider, Collection) and
   the helpers (createHandle, useFilter) pass straight through, unwrapped.

   Anatomy:
   <AlertDialog.Root>
     <AlertDialog.Trigger />
     <AlertDialog.Portal>
       <AlertDialog.Backdrop />
       <AlertDialog.Viewport>
         <AlertDialog.Popup>
           <AlertDialog.Title />
           <AlertDialog.Description />
           <AlertDialog.Close />
         </AlertDialog.Popup>
       </AlertDialog.Viewport>
     </AlertDialog.Portal>
   </AlertDialog.Root>;
*/
import { AlertDialog as AlertDialogPrimitive } from "@base-ui/react/alert-dialog";
import { part } from "./part";
import "../styles/alert-dialog.css";

export const AlertDialog = {
  Backdrop: part(AlertDialogPrimitive.Backdrop, "ova-alert-dialog-backdrop"),
  Close: part(AlertDialogPrimitive.Close, "ova-alert-dialog-close"),
  Description: part(AlertDialogPrimitive.Description, "ova-alert-dialog-description"),
  Handle: AlertDialogPrimitive.Handle,
  Popup: part(AlertDialogPrimitive.Popup, "ova-alert-dialog-popup"),
  Portal: part(AlertDialogPrimitive.Portal, "ova-alert-dialog-portal"),
  Root: AlertDialogPrimitive.Root,
  Title: part(AlertDialogPrimitive.Title, "ova-alert-dialog-title"),
  Trigger: part(AlertDialogPrimitive.Trigger, "ova-alert-dialog-trigger"),
  Viewport: part(AlertDialogPrimitive.Viewport, "ova-alert-dialog-viewport"),
  createHandle: AlertDialogPrimitive.createHandle,
};
