/* Combobox — the Base UI component with this brand's class on every part
   that renders an element. Nothing here styles it: the classes are the hooks,
   and styles/combobox.css is where the brand goes.

   Parts that render no element of their own (Root, Provider, Collection) and
   the helpers (createHandle, useFilter) pass straight through, unwrapped.

   Anatomy:
   <Combobox.Root>
     <Combobox.Label />
   
     <Combobox.InputGroup>
       <Combobox.Input />
       <Combobox.Trigger />
       <Combobox.Icon />
       <Combobox.Clear />
       <Combobox.Value />
   
       <Combobox.Chips>
         <Combobox.Chip>
           <Combobox.ChipRemove />
         </Combobox.Chip>
       </Combobox.Chips>
     </Combobox.InputGroup>
   
     <Combobox.Portal>
       <Combobox.Backdrop />
       <Combobox.Positioner>
         <Combobox.Popup>
           <Combobox.Arrow />
   
           <Combobox.Status />
           <Combobox.Empty />
   
           <Combobox.List>
             <Combobox.Row>
               <Combobox.Item>
                 <Combobox.ItemIndicator />
               </Combobox.Item>
             </Combobox.Row>
   
             <Combobox.Separator />
   
             <Combobox.Group>
               <Combobox.GroupLabel />
             </Combobox.Group>
   
             <Combobox.Collection />
           </Combobox.List>
         </Combobox.Popup>
       </Combobox.Positioner>
     </Combobox.Portal>
   </Combobox.Root>;
*/
import { Combobox as ComboboxPrimitive } from "@base-ui/react/combobox";
import { part } from "./part";
import "../styles/combobox.css";

export const Combobox = {
  Arrow: part(ComboboxPrimitive.Arrow, "ova-combobox-arrow"),
  Backdrop: part(ComboboxPrimitive.Backdrop, "ova-combobox-backdrop"),
  Chip: part(ComboboxPrimitive.Chip, "ova-combobox-chip"),
  ChipRemove: part(ComboboxPrimitive.ChipRemove, "ova-combobox-chip-remove"),
  Chips: part(ComboboxPrimitive.Chips, "ova-combobox-chips"),
  Clear: part(ComboboxPrimitive.Clear, "ova-combobox-clear"),
  Collection: ComboboxPrimitive.Collection,
  Empty: part(ComboboxPrimitive.Empty, "ova-combobox-empty"),
  Group: part(ComboboxPrimitive.Group, "ova-combobox-group"),
  GroupLabel: part(ComboboxPrimitive.GroupLabel, "ova-combobox-group-label"),
  Icon: part(ComboboxPrimitive.Icon, "ova-combobox-icon"),
  Input: part(ComboboxPrimitive.Input, "ova-combobox-input"),
  InputGroup: part(ComboboxPrimitive.InputGroup, "ova-combobox-input-group"),
  Item: part(ComboboxPrimitive.Item, "ova-combobox-item"),
  ItemIndicator: part(ComboboxPrimitive.ItemIndicator, "ova-combobox-item-indicator"),
  Label: part(ComboboxPrimitive.Label, "ova-combobox-label"),
  List: part(ComboboxPrimitive.List, "ova-combobox-list"),
  Popup: part(ComboboxPrimitive.Popup, "ova-combobox-popup"),
  Portal: part(ComboboxPrimitive.Portal, "ova-combobox-portal"),
  Positioner: part(ComboboxPrimitive.Positioner, "ova-combobox-positioner"),
  Root: ComboboxPrimitive.Root,
  Row: part(ComboboxPrimitive.Row, "ova-combobox-row"),
  Separator: part(ComboboxPrimitive.Separator, "ova-combobox-separator"),
  Status: part(ComboboxPrimitive.Status, "ova-combobox-status"),
  Trigger: part(ComboboxPrimitive.Trigger, "ova-combobox-trigger"),
  Value: ComboboxPrimitive.Value,
  createItems: ComboboxPrimitive.createItems,
  useFilter: ComboboxPrimitive.useFilter,
  useFilteredItems: ComboboxPrimitive.useFilteredItems,
};
