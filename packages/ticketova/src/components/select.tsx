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
  Arrow: part(SelectPrimitive.Arrow, "tova-select-arrow"),
  Backdrop: part(SelectPrimitive.Backdrop, "tova-select-backdrop"),
  Group: part(SelectPrimitive.Group, "tova-select-group"),
  GroupLabel: part(SelectPrimitive.GroupLabel, "tova-select-group-label"),
  Icon: part(SelectPrimitive.Icon, "tova-select-icon"),
  Item: part(SelectPrimitive.Item, "tova-select-item"),
  ItemIndicator: part(SelectPrimitive.ItemIndicator, "tova-select-item-indicator"),
  ItemText: part(SelectPrimitive.ItemText, "tova-select-item-text"),
  Label: part(SelectPrimitive.Label, "tova-select-label"),
  List: part(SelectPrimitive.List, "tova-select-list"),
  Popup: part(SelectPrimitive.Popup, "tova-select-popup"),
  Portal: part(SelectPrimitive.Portal, "tova-select-portal"),
  Positioner: part(SelectPrimitive.Positioner, "tova-select-positioner"),
  Root: SelectPrimitive.Root,
  ScrollDownArrow: part(SelectPrimitive.ScrollDownArrow, "tova-select-scroll-down-arrow"),
  ScrollUpArrow: part(SelectPrimitive.ScrollUpArrow, "tova-select-scroll-up-arrow"),
  Separator: part(SelectPrimitive.Separator, "tova-select-separator"),
  Trigger: part(SelectPrimitive.Trigger, "tova-select-trigger"),
  Value: part(SelectPrimitive.Value, "tova-select-value"),
};
