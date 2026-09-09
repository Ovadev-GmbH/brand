/* Select — the Base UI component with this brand's class on every part
   that renders an element. Nothing here styles it: the classes are the hooks,
   and styles/select.css is where the brand goes.

   Parts that render no element of their own (Root, Provider, Collection) and
   the helpers (createHandle, useFilter) pass straight through, unwrapped.

   Anatomy:
   <Select.Root>
     <Select.Label />
     <Select.Trigger>
       <Select.Value />
       <Select.Icon />
     </Select.Trigger>
   
     <Select.Portal>
       <Select.Backdrop />
       <Select.Positioner>
         <Select.Popup>
           <Select.ScrollUpArrow />
           <Select.Arrow />
           <Select.List>
             <Select.Item>
               <Select.ItemText />
               <Select.ItemIndicator />
             </Select.Item>
             <Select.Separator />
             <Select.Group>
               <Select.GroupLabel />
             </Select.Group>
           </Select.List>
           <Select.ScrollDownArrow />
         </Select.Popup>
       </Select.Positioner>
     </Select.Portal>
   </Select.Root>;
*/
import { Select as SelectPrimitive } from "@base-ui/react/select";
import { part } from "./part";
import "../styles/select.css";

export const Select = {
  Arrow: part(SelectPrimitive.Arrow, "jan-select-arrow"),
  Backdrop: part(SelectPrimitive.Backdrop, "jan-select-backdrop"),
  Group: part(SelectPrimitive.Group, "jan-select-group"),
  GroupLabel: part(SelectPrimitive.GroupLabel, "jan-select-group-label"),
  Icon: part(SelectPrimitive.Icon, "jan-select-icon"),
  Item: part(SelectPrimitive.Item, "jan-select-item"),
  ItemIndicator: part(SelectPrimitive.ItemIndicator, "jan-select-item-indicator"),
  ItemText: part(SelectPrimitive.ItemText, "jan-select-item-text"),
  Label: part(SelectPrimitive.Label, "jan-select-label"),
  List: part(SelectPrimitive.List, "jan-select-list"),
  Popup: part(SelectPrimitive.Popup, "jan-select-popup"),
  Portal: part(SelectPrimitive.Portal, "jan-select-portal"),
  Positioner: part(SelectPrimitive.Positioner, "jan-select-positioner"),
  Root: SelectPrimitive.Root,
  ScrollDownArrow: part(SelectPrimitive.ScrollDownArrow, "jan-select-scroll-down-arrow"),
  ScrollUpArrow: part(SelectPrimitive.ScrollUpArrow, "jan-select-scroll-up-arrow"),
  Separator: part(SelectPrimitive.Separator, "jan-select-separator"),
  Trigger: part(SelectPrimitive.Trigger, "jan-select-trigger"),
  Value: part(SelectPrimitive.Value, "jan-select-value"),
};
