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
  Action: part(ToastPrimitive.Action, "ui-toast-action"),
  Arrow: part(ToastPrimitive.Arrow, "ui-toast-arrow"),
  Close: part(ToastPrimitive.Close, "ui-toast-close"),
  Content: part(ToastPrimitive.Content, "ui-toast-content"),
  Description: part(ToastPrimitive.Description, "ui-toast-description"),
  Portal: part(ToastPrimitive.Portal, "ui-toast-portal"),
  Positioner: part(ToastPrimitive.Positioner, "ui-toast-positioner"),
  Provider: ToastPrimitive.Provider,
  Root: part(ToastPrimitive.Root, "ui-toast"),
  Title: part(ToastPrimitive.Title, "ui-toast-title"),
  Viewport: part(ToastPrimitive.Viewport, "ui-toast-viewport"),
  createToastManager: ToastPrimitive.createToastManager,
  useToastManager: ToastPrimitive.useToastManager,
};
