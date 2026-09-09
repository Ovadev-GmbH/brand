/* Context Menu — the Base UI component with this brand's class on every part
   that renders an element. Nothing here styles it: the classes are the hooks,
   and styles/context-menu.css is where the brand goes.

   Parts that render no element of their own (Root, Provider, Collection) and
   the helpers (createHandle, useFilter) pass straight through, unwrapped.

   Anatomy:
   <ContextMenu.Root>
     <ContextMenu.Trigger />
     <ContextMenu.Portal>
       <ContextMenu.Backdrop />
       <ContextMenu.Positioner>
         <ContextMenu.Popup>
           <ContextMenu.Arrow />
           <ContextMenu.Item />
           <ContextMenu.LinkItem />
           <ContextMenu.Separator />
   
           <ContextMenu.SubmenuRoot>
             <ContextMenu.SubmenuTrigger />
           </ContextMenu.SubmenuRoot>
   
           <ContextMenu.Group>
             <ContextMenu.GroupLabel />
           </ContextMenu.Group>
   
           <ContextMenu.RadioGroup>
             <ContextMenu.RadioItem>
               <ContextMenu.RadioItemIndicator />
             </ContextMenu.RadioItem>
           </ContextMenu.RadioGroup>
   
           <ContextMenu.CheckboxItem>
             <ContextMenu.CheckboxItemIndicator />
           </ContextMenu.CheckboxItem>
         </ContextMenu.Popup>
       </ContextMenu.Positioner>
     </ContextMenu.Portal>
   </ContextMenu.Root>;
*/
import { ContextMenu as ContextMenuPrimitive } from "@base-ui/react/context-menu";
import { part } from "./part";
import "../styles/context-menu.css";

export const ContextMenu = {
  Arrow: part(ContextMenuPrimitive.Arrow, "tova-context-menu-arrow"),
  Backdrop: part(ContextMenuPrimitive.Backdrop, "tova-context-menu-backdrop"),
  CheckboxItem: part(ContextMenuPrimitive.CheckboxItem, "tova-context-menu-checkbox-item"),
  CheckboxItemIndicator: part(ContextMenuPrimitive.CheckboxItemIndicator, "tova-context-menu-checkbox-item-indicator"),
  Group: part(ContextMenuPrimitive.Group, "tova-context-menu-group"),
  GroupLabel: part(ContextMenuPrimitive.GroupLabel, "tova-context-menu-group-label"),
  Item: part(ContextMenuPrimitive.Item, "tova-context-menu-item"),
  LinkItem: part(ContextMenuPrimitive.LinkItem, "tova-context-menu-link-item"),
  Popup: part(ContextMenuPrimitive.Popup, "tova-context-menu-popup"),
  Portal: part(ContextMenuPrimitive.Portal, "tova-context-menu-portal"),
  Positioner: part(ContextMenuPrimitive.Positioner, "tova-context-menu-positioner"),
  RadioGroup: part(ContextMenuPrimitive.RadioGroup, "tova-context-menu-radio-group"),
  RadioItem: part(ContextMenuPrimitive.RadioItem, "tova-context-menu-radio-item"),
  RadioItemIndicator: part(ContextMenuPrimitive.RadioItemIndicator, "tova-context-menu-radio-item-indicator"),
  Root: ContextMenuPrimitive.Root,
  Separator: part(ContextMenuPrimitive.Separator, "tova-context-menu-separator"),
  SubmenuRoot: ContextMenuPrimitive.SubmenuRoot,
  SubmenuTrigger: part(ContextMenuPrimitive.SubmenuTrigger, "tova-context-menu-submenu-trigger"),
  Trigger: part(ContextMenuPrimitive.Trigger, "tova-context-menu-trigger"),
};
