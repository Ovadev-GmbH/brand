/* Menu — the Base UI component with this brand's class on every part
   that renders an element. Nothing here styles it: the classes are the hooks,
   and styles/menu.css is where the brand goes.

   Parts that render no element of their own (Root, Provider, Collection) and
   the helpers (createHandle, useFilter) pass straight through, unwrapped.

   Anatomy:
   <Menu.Root>
     <Menu.Trigger />
     <Menu.Portal>
       <Menu.Backdrop />
       <Menu.Positioner>
         <Menu.Popup>
           <Menu.Arrow />
           <Menu.Item />
           <Menu.LinkItem />
           <Menu.Separator />
   
           <Menu.SubmenuRoot>
             <Menu.SubmenuTrigger />
           </Menu.SubmenuRoot>
   
           <Menu.Group>
             <Menu.GroupLabel />
           </Menu.Group>
   
           <Menu.RadioGroup>
             <Menu.GroupLabel />
             <Menu.RadioItem>
               <Menu.RadioItemIndicator />
             </Menu.RadioItem>
           </Menu.RadioGroup>
   
           <Menu.CheckboxItem>
             <Menu.CheckboxItemIndicator />
           </Menu.CheckboxItem>
   
           <Menu.Viewport />
         </Menu.Popup>
       </Menu.Positioner>
     </Menu.Portal>
   </Menu.Root>;
*/
import { Menu as MenuPrimitive } from "@base-ui/react/menu";
import { part } from "./part";
import "../styles/menu.css";

export const Menu = {
  Arrow: part(MenuPrimitive.Arrow, "ova-menu-arrow"),
  Backdrop: part(MenuPrimitive.Backdrop, "ova-menu-backdrop"),
  CheckboxItem: part(MenuPrimitive.CheckboxItem, "ova-menu-checkbox-item"),
  CheckboxItemIndicator: part(MenuPrimitive.CheckboxItemIndicator, "ova-menu-checkbox-item-indicator"),
  Group: part(MenuPrimitive.Group, "ova-menu-group"),
  GroupLabel: part(MenuPrimitive.GroupLabel, "ova-menu-group-label"),
  Handle: MenuPrimitive.Handle,
  Item: part(MenuPrimitive.Item, "ova-menu-item"),
  LinkItem: part(MenuPrimitive.LinkItem, "ova-menu-link-item"),
  Popup: part(MenuPrimitive.Popup, "ova-menu-popup"),
  Portal: part(MenuPrimitive.Portal, "ova-menu-portal"),
  Positioner: part(MenuPrimitive.Positioner, "ova-menu-positioner"),
  RadioGroup: part(MenuPrimitive.RadioGroup, "ova-menu-radio-group"),
  RadioItem: part(MenuPrimitive.RadioItem, "ova-menu-radio-item"),
  RadioItemIndicator: part(MenuPrimitive.RadioItemIndicator, "ova-menu-radio-item-indicator"),
  Root: MenuPrimitive.Root,
  Separator: part(MenuPrimitive.Separator, "ova-menu-separator"),
  SubmenuRoot: MenuPrimitive.SubmenuRoot,
  SubmenuTrigger: part(MenuPrimitive.SubmenuTrigger, "ova-menu-submenu-trigger"),
  Trigger: part(MenuPrimitive.Trigger, "ova-menu-trigger"),
  Viewport: part(MenuPrimitive.Viewport, "ova-menu-viewport"),
  createHandle: MenuPrimitive.createHandle,
};
