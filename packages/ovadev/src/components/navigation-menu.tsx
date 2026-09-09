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
  Arrow: part(NavigationMenuPrimitive.Arrow, "ova-navigation-menu-arrow"),
  Backdrop: part(NavigationMenuPrimitive.Backdrop, "ova-navigation-menu-backdrop"),
  Content: part(NavigationMenuPrimitive.Content, "ova-navigation-menu-content"),
  Icon: part(NavigationMenuPrimitive.Icon, "ova-navigation-menu-icon"),
  Item: part(NavigationMenuPrimitive.Item, "ova-navigation-menu-item"),
  Link: part(NavigationMenuPrimitive.Link, "ova-navigation-menu-link"),
  List: part(NavigationMenuPrimitive.List, "ova-navigation-menu-list"),
  Popup: part(NavigationMenuPrimitive.Popup, "ova-navigation-menu-popup"),
  Portal: part(NavigationMenuPrimitive.Portal, "ova-navigation-menu-portal"),
  Positioner: part(NavigationMenuPrimitive.Positioner, "ova-navigation-menu-positioner"),
  Root: part(NavigationMenuPrimitive.Root, "ova-navigation-menu"),
  Trigger: part(NavigationMenuPrimitive.Trigger, "ova-navigation-menu-trigger"),
  Viewport: part(NavigationMenuPrimitive.Viewport, "ova-navigation-menu-viewport"),
};
