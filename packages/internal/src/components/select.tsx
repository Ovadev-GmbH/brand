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
  Arrow: part(SelectPrimitive.Arrow, "ui-select-arrow"),
  Backdrop: part(SelectPrimitive.Backdrop, "ui-select-backdrop"),
  Group: part(SelectPrimitive.Group, "ui-select-group"),
  GroupLabel: part(SelectPrimitive.GroupLabel, "ui-select-group-label"),
  Icon: part(SelectPrimitive.Icon, "ui-select-icon"),
  Item: part(SelectPrimitive.Item, "ui-select-item"),
  ItemIndicator: part(SelectPrimitive.ItemIndicator, "ui-select-item-indicator"),
  ItemText: part(SelectPrimitive.ItemText, "ui-select-item-text"),
  Label: part(SelectPrimitive.Label, "ui-select-label"),
  List: part(SelectPrimitive.List, "ui-select-list"),
  Popup: part(SelectPrimitive.Popup, "ui-select-popup"),
  Portal: part(SelectPrimitive.Portal, "ui-select-portal"),
  Positioner: part(SelectPrimitive.Positioner, "ui-select-positioner"),
  Root: SelectPrimitive.Root,
  ScrollDownArrow: part(SelectPrimitive.ScrollDownArrow, "ui-select-scroll-down-arrow"),
  ScrollUpArrow: part(SelectPrimitive.ScrollUpArrow, "ui-select-scroll-up-arrow"),
  Separator: part(SelectPrimitive.Separator, "ui-select-separator"),
  Trigger: part(SelectPrimitive.Trigger, "ui-select-trigger"),
  Value: part(SelectPrimitive.Value, "ui-select-value"),
};
