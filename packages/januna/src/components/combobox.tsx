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
  Arrow: part(ComboboxPrimitive.Arrow, "jan-combobox-arrow"),
  Backdrop: part(ComboboxPrimitive.Backdrop, "jan-combobox-backdrop"),
  Chip: part(ComboboxPrimitive.Chip, "jan-combobox-chip"),
  ChipRemove: part(ComboboxPrimitive.ChipRemove, "jan-combobox-chip-remove"),
  Chips: part(ComboboxPrimitive.Chips, "jan-combobox-chips"),
  Clear: part(ComboboxPrimitive.Clear, "jan-combobox-clear"),
  Collection: ComboboxPrimitive.Collection,
  Empty: part(ComboboxPrimitive.Empty, "jan-combobox-empty"),
  Group: part(ComboboxPrimitive.Group, "jan-combobox-group"),
  GroupLabel: part(ComboboxPrimitive.GroupLabel, "jan-combobox-group-label"),
  Icon: part(ComboboxPrimitive.Icon, "jan-combobox-icon"),
  Input: part(ComboboxPrimitive.Input, "jan-combobox-input"),
  InputGroup: part(ComboboxPrimitive.InputGroup, "jan-combobox-input-group"),
  Item: part(ComboboxPrimitive.Item, "jan-combobox-item"),
  ItemIndicator: part(ComboboxPrimitive.ItemIndicator, "jan-combobox-item-indicator"),
  Label: part(ComboboxPrimitive.Label, "jan-combobox-label"),
  List: part(ComboboxPrimitive.List, "jan-combobox-list"),
  Popup: part(ComboboxPrimitive.Popup, "jan-combobox-popup"),
  Portal: part(ComboboxPrimitive.Portal, "jan-combobox-portal"),
  Positioner: part(ComboboxPrimitive.Positioner, "jan-combobox-positioner"),
  Root: ComboboxPrimitive.Root,
  Row: part(ComboboxPrimitive.Row, "jan-combobox-row"),
  Separator: part(ComboboxPrimitive.Separator, "jan-combobox-separator"),
  Status: part(ComboboxPrimitive.Status, "jan-combobox-status"),
  Trigger: part(ComboboxPrimitive.Trigger, "jan-combobox-trigger"),
  Value: ComboboxPrimitive.Value,
  createItems: ComboboxPrimitive.createItems,
  useFilter: ComboboxPrimitive.useFilter,
  useFilteredItems: ComboboxPrimitive.useFilteredItems,
};
