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
  Arrow: part(NavigationMenuPrimitive.Arrow, "ui-navigation-menu-arrow"),
  Backdrop: part(NavigationMenuPrimitive.Backdrop, "ui-navigation-menu-backdrop"),
  Content: part(NavigationMenuPrimitive.Content, "ui-navigation-menu-content"),
  Icon: part(NavigationMenuPrimitive.Icon, "ui-navigation-menu-icon"),
  Item: part(NavigationMenuPrimitive.Item, "ui-navigation-menu-item"),
  Link: part(NavigationMenuPrimitive.Link, "ui-navigation-menu-link"),
  List: part(NavigationMenuPrimitive.List, "ui-navigation-menu-list"),
  Popup: part(NavigationMenuPrimitive.Popup, "ui-navigation-menu-popup"),
  Portal: part(NavigationMenuPrimitive.Portal, "ui-navigation-menu-portal"),
  Positioner: part(NavigationMenuPrimitive.Positioner, "ui-navigation-menu-positioner"),
  Root: part(NavigationMenuPrimitive.Root, "ui-navigation-menu"),
  Trigger: part(NavigationMenuPrimitive.Trigger, "ui-navigation-menu-trigger"),
  Viewport: part(NavigationMenuPrimitive.Viewport, "ui-navigation-menu-viewport"),
};
