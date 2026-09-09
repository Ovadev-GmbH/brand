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
  Arrow: part(MenuPrimitive.Arrow, "tova-menu-arrow"),
  Backdrop: part(MenuPrimitive.Backdrop, "tova-menu-backdrop"),
  CheckboxItem: part(MenuPrimitive.CheckboxItem, "tova-menu-checkbox-item"),
  CheckboxItemIndicator: part(MenuPrimitive.CheckboxItemIndicator, "tova-menu-checkbox-item-indicator"),
  Group: part(MenuPrimitive.Group, "tova-menu-group"),
  GroupLabel: part(MenuPrimitive.GroupLabel, "tova-menu-group-label"),
  Handle: MenuPrimitive.Handle,
  Item: part(MenuPrimitive.Item, "tova-menu-item"),
  LinkItem: part(MenuPrimitive.LinkItem, "tova-menu-link-item"),
  Popup: part(MenuPrimitive.Popup, "tova-menu-popup"),
  Portal: part(MenuPrimitive.Portal, "tova-menu-portal"),
  Positioner: part(MenuPrimitive.Positioner, "tova-menu-positioner"),
  RadioGroup: part(MenuPrimitive.RadioGroup, "tova-menu-radio-group"),
  RadioItem: part(MenuPrimitive.RadioItem, "tova-menu-radio-item"),
  RadioItemIndicator: part(MenuPrimitive.RadioItemIndicator, "tova-menu-radio-item-indicator"),
  Root: MenuPrimitive.Root,
  Separator: part(MenuPrimitive.Separator, "tova-menu-separator"),
  SubmenuRoot: MenuPrimitive.SubmenuRoot,
  SubmenuTrigger: part(MenuPrimitive.SubmenuTrigger, "tova-menu-submenu-trigger"),
  Trigger: part(MenuPrimitive.Trigger, "tova-menu-trigger"),
  Viewport: part(MenuPrimitive.Viewport, "tova-menu-viewport"),
  createHandle: MenuPrimitive.createHandle,
};
