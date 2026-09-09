/* Navigation Menu — the Base UI component with this brand's class on every part
   that renders an element. Nothing here styles it: the classes are the hooks,
   and styles/navigation-menu.css is where the brand goes.

   Parts that render no element of their own (Root, Provider, Collection) and
   the helpers (createHandle, useFilter) pass straight through, unwrapped.

   Anatomy:
   <NavigationMenu.Root>
     <NavigationMenu.List>
       <NavigationMenu.Item>
         <NavigationMenu.Trigger>
           <NavigationMenu.Icon />
         </NavigationMenu.Trigger>
         <NavigationMenu.Content>
           <NavigationMenu.Link />
         </NavigationMenu.Content>
       </NavigationMenu.Item>
     </NavigationMenu.List>
   
     <NavigationMenu.Portal>
       <NavigationMenu.Backdrop />
       <NavigationMenu.Positioner>
         <NavigationMenu.Popup>
           <NavigationMenu.Arrow />
           <NavigationMenu.Viewport />
         </NavigationMenu.Popup>
       </NavigationMenu.Positioner>
     </NavigationMenu.Portal>
   </NavigationMenu.Root>;
*/
import { NavigationMenu as NavigationMenuPrimitive } from "@base-ui/react/navigation-menu";
import { part } from "./part";
import "../styles/navigation-menu.css";

export const NavigationMenu = {
  Arrow: part(NavigationMenuPrimitive.Arrow, "tova-navigation-menu-arrow"),
  Backdrop: part(NavigationMenuPrimitive.Backdrop, "tova-navigation-menu-backdrop"),
  Content: part(NavigationMenuPrimitive.Content, "tova-navigation-menu-content"),
  Icon: part(NavigationMenuPrimitive.Icon, "tova-navigation-menu-icon"),
  Item: part(NavigationMenuPrimitive.Item, "tova-navigation-menu-item"),
  Link: part(NavigationMenuPrimitive.Link, "tova-navigation-menu-link"),
  List: part(NavigationMenuPrimitive.List, "tova-navigation-menu-list"),
  Popup: part(NavigationMenuPrimitive.Popup, "tova-navigation-menu-popup"),
  Portal: part(NavigationMenuPrimitive.Portal, "tova-navigation-menu-portal"),
  Positioner: part(NavigationMenuPrimitive.Positioner, "tova-navigation-menu-positioner"),
  Root: part(NavigationMenuPrimitive.Root, "tova-navigation-menu"),
  Trigger: part(NavigationMenuPrimitive.Trigger, "tova-navigation-menu-trigger"),
  Viewport: part(NavigationMenuPrimitive.Viewport, "tova-navigation-menu-viewport"),
};
