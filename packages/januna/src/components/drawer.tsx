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
  Backdrop: part(DrawerPrimitive.Backdrop, "jan-drawer-backdrop"),
  Close: part(DrawerPrimitive.Close, "jan-drawer-close"),
  Content: part(DrawerPrimitive.Content, "jan-drawer-content"),
  Description: part(DrawerPrimitive.Description, "jan-drawer-description"),
  Handle: DrawerPrimitive.Handle,
  Indent: part(DrawerPrimitive.Indent, "jan-drawer-indent"),
  IndentBackground: part(DrawerPrimitive.IndentBackground, "jan-drawer-indent-background"),
  Popup: part(DrawerPrimitive.Popup, "jan-drawer-popup"),
  Portal: part(DrawerPrimitive.Portal, "jan-drawer-portal"),
  Provider: DrawerPrimitive.Provider,
  Root: DrawerPrimitive.Root,
  SwipeArea: part(DrawerPrimitive.SwipeArea, "jan-drawer-swipe-area"),
  Title: part(DrawerPrimitive.Title, "jan-drawer-title"),
  Trigger: part(DrawerPrimitive.Trigger, "jan-drawer-trigger"),
  Viewport: part(DrawerPrimitive.Viewport, "jan-drawer-viewport"),
  VirtualKeyboardProvider: DrawerPrimitive.VirtualKeyboardProvider,
  createHandle: DrawerPrimitive.createHandle,
};
