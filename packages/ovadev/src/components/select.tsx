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
  Arrow: part(SelectPrimitive.Arrow, "ova-select-arrow"),
  Backdrop: part(SelectPrimitive.Backdrop, "ova-select-backdrop"),
  Group: part(SelectPrimitive.Group, "ova-select-group"),
  GroupLabel: part(SelectPrimitive.GroupLabel, "ova-select-group-label"),
  Icon: part(SelectPrimitive.Icon, "ova-select-icon"),
  Item: part(SelectPrimitive.Item, "ova-select-item"),
  ItemIndicator: part(SelectPrimitive.ItemIndicator, "ova-select-item-indicator"),
  ItemText: part(SelectPrimitive.ItemText, "ova-select-item-text"),
  Label: part(SelectPrimitive.Label, "ova-select-label"),
  List: part(SelectPrimitive.List, "ova-select-list"),
  Popup: part(SelectPrimitive.Popup, "ova-select-popup"),
  Portal: part(SelectPrimitive.Portal, "ova-select-portal"),
  Positioner: part(SelectPrimitive.Positioner, "ova-select-positioner"),
  Root: SelectPrimitive.Root,
  ScrollDownArrow: part(SelectPrimitive.ScrollDownArrow, "ova-select-scroll-down-arrow"),
  ScrollUpArrow: part(SelectPrimitive.ScrollUpArrow, "ova-select-scroll-up-arrow"),
  Separator: part(SelectPrimitive.Separator, "ova-select-separator"),
  Trigger: part(SelectPrimitive.Trigger, "ova-select-trigger"),
  Value: part(SelectPrimitive.Value, "ova-select-value"),
};
