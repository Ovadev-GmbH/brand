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
  Arrow: part(ComboboxPrimitive.Arrow, "tova-combobox-arrow"),
  Backdrop: part(ComboboxPrimitive.Backdrop, "tova-combobox-backdrop"),
  Chip: part(ComboboxPrimitive.Chip, "tova-combobox-chip"),
  ChipRemove: part(ComboboxPrimitive.ChipRemove, "tova-combobox-chip-remove"),
  Chips: part(ComboboxPrimitive.Chips, "tova-combobox-chips"),
  Clear: part(ComboboxPrimitive.Clear, "tova-combobox-clear"),
  Collection: ComboboxPrimitive.Collection,
  Empty: part(ComboboxPrimitive.Empty, "tova-combobox-empty"),
  Group: part(ComboboxPrimitive.Group, "tova-combobox-group"),
  GroupLabel: part(ComboboxPrimitive.GroupLabel, "tova-combobox-group-label"),
  Icon: part(ComboboxPrimitive.Icon, "tova-combobox-icon"),
  Input: part(ComboboxPrimitive.Input, "tova-combobox-input"),
  InputGroup: part(ComboboxPrimitive.InputGroup, "tova-combobox-input-group"),
  Item: part(ComboboxPrimitive.Item, "tova-combobox-item"),
  ItemIndicator: part(ComboboxPrimitive.ItemIndicator, "tova-combobox-item-indicator"),
  Label: part(ComboboxPrimitive.Label, "tova-combobox-label"),
  List: part(ComboboxPrimitive.List, "tova-combobox-list"),
  Popup: part(ComboboxPrimitive.Popup, "tova-combobox-popup"),
  Portal: part(ComboboxPrimitive.Portal, "tova-combobox-portal"),
  Positioner: part(ComboboxPrimitive.Positioner, "tova-combobox-positioner"),
  Root: ComboboxPrimitive.Root,
  Row: part(ComboboxPrimitive.Row, "tova-combobox-row"),
  Separator: part(ComboboxPrimitive.Separator, "tova-combobox-separator"),
  Status: part(ComboboxPrimitive.Status, "tova-combobox-status"),
  Trigger: part(ComboboxPrimitive.Trigger, "tova-combobox-trigger"),
  Value: ComboboxPrimitive.Value,
  createItems: ComboboxPrimitive.createItems,
  useFilter: ComboboxPrimitive.useFilter,
  useFilteredItems: ComboboxPrimitive.useFilteredItems,
};
