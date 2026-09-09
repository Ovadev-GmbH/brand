/* Drawer — the Base UI component with this brand's class on every part
   that renders an element. Nothing here styles it: the classes are the hooks,
   and styles/drawer.css is where the brand goes.

   Parts that render no element of their own (Root, Provider, Collection) and
   the helpers (createHandle, useFilter) pass straight through, unwrapped.

   Anatomy:
   <Drawer.Provider>
     <Drawer.IndentBackground />
     <Drawer.Indent>
       <Drawer.Root>
         <Drawer.Trigger />
         <Drawer.SwipeArea />
         <Drawer.Portal>
           <Drawer.Backdrop />
           <Drawer.Viewport>
             <Drawer.Popup>
               <Drawer.Content>
                 <Drawer.Title />
                 <Drawer.Description />
                 <Drawer.Close />
               </Drawer.Content>
             </Drawer.Popup>
           </Drawer.Viewport>
         </Drawer.Portal>
       </Drawer.Root>
     </Drawer.Indent>
   </Drawer.Provider>;
*/
import { Drawer as DrawerPrimitive } from "@base-ui/react/drawer";
import { part } from "./part";
import "../styles/drawer.css";

export const Drawer = {
  Backdrop: part(DrawerPrimitive.Backdrop, "tova-drawer-backdrop"),
  Close: part(DrawerPrimitive.Close, "tova-drawer-close"),
  Content: part(DrawerPrimitive.Content, "tova-drawer-content"),
  Description: part(DrawerPrimitive.Description, "tova-drawer-description"),
  Handle: DrawerPrimitive.Handle,
  Indent: part(DrawerPrimitive.Indent, "tova-drawer-indent"),
  IndentBackground: part(DrawerPrimitive.IndentBackground, "tova-drawer-indent-background"),
  Popup: part(DrawerPrimitive.Popup, "tova-drawer-popup"),
  Portal: part(DrawerPrimitive.Portal, "tova-drawer-portal"),
  Provider: DrawerPrimitive.Provider,
  Root: DrawerPrimitive.Root,
  SwipeArea: part(DrawerPrimitive.SwipeArea, "tova-drawer-swipe-area"),
  Title: part(DrawerPrimitive.Title, "tova-drawer-title"),
  Trigger: part(DrawerPrimitive.Trigger, "tova-drawer-trigger"),
  Viewport: part(DrawerPrimitive.Viewport, "tova-drawer-viewport"),
  VirtualKeyboardProvider: DrawerPrimitive.VirtualKeyboardProvider,
  createHandle: DrawerPrimitive.createHandle,
};
