/* Toast — the Base UI component with this brand's class on every part
   that renders an element. Nothing here styles it: the classes are the hooks,
   and styles/toast.css is where the brand goes.

   Parts that render no element of their own (Root, Provider, Collection) and
   the helpers (createHandle, useFilter) pass straight through, unwrapped.

   Anatomy:
   <Toast.Provider>
     <Toast.Portal>
       <Toast.Viewport>
         <Toast.Root>
           <Toast.Content>
             <Toast.Title />
             <Toast.Description />
             <Toast.Action />
             <Toast.Close />
           </Toast.Content>
         </Toast.Root>
   
         <Toast.Positioner>
           <Toast.Root>
             <Toast.Arrow />
             <Toast.Content>
               <Toast.Title />
               <Toast.Description />
               <Toast.Action />
               <Toast.Close />
             </Toast.Content>
           </Toast.Root>
         </Toast.Positioner>
       </Toast.Viewport>
     </Toast.Portal>
   </Toast.Provider>;
*/
import { Toast as ToastPrimitive } from "@base-ui/react/toast";
import { part } from "./part";
import "../styles/toast.css";

export const Toast = {
  Action: part(ToastPrimitive.Action, "ova-toast-action"),
  Arrow: part(ToastPrimitive.Arrow, "ova-toast-arrow"),
  Close: part(ToastPrimitive.Close, "ova-toast-close"),
  Content: part(ToastPrimitive.Content, "ova-toast-content"),
  Description: part(ToastPrimitive.Description, "ova-toast-description"),
  Portal: part(ToastPrimitive.Portal, "ova-toast-portal"),
  Positioner: part(ToastPrimitive.Positioner, "ova-toast-positioner"),
  Provider: ToastPrimitive.Provider,
  Root: part(ToastPrimitive.Root, "ova-toast"),
  Title: part(ToastPrimitive.Title, "ova-toast-title"),
  Viewport: part(ToastPrimitive.Viewport, "ova-toast-viewport"),
  createToastManager: ToastPrimitive.createToastManager,
  useToastManager: ToastPrimitive.useToastManager,
};
