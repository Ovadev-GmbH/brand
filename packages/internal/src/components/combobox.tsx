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
  Arrow: part(ComboboxPrimitive.Arrow, "ui-combobox-arrow"),
  Backdrop: part(ComboboxPrimitive.Backdrop, "ui-combobox-backdrop"),
  Chip: part(ComboboxPrimitive.Chip, "ui-combobox-chip"),
  ChipRemove: part(ComboboxPrimitive.ChipRemove, "ui-combobox-chip-remove"),
  Chips: part(ComboboxPrimitive.Chips, "ui-combobox-chips"),
  Clear: part(ComboboxPrimitive.Clear, "ui-combobox-clear"),
  Collection: ComboboxPrimitive.Collection,
  Empty: part(ComboboxPrimitive.Empty, "ui-combobox-empty"),
  Group: part(ComboboxPrimitive.Group, "ui-combobox-group"),
  GroupLabel: part(ComboboxPrimitive.GroupLabel, "ui-combobox-group-label"),
  Icon: part(ComboboxPrimitive.Icon, "ui-combobox-icon"),
  Input: part(ComboboxPrimitive.Input, "ui-combobox-input"),
  InputGroup: part(ComboboxPrimitive.InputGroup, "ui-combobox-input-group"),
  Item: part(ComboboxPrimitive.Item, "ui-combobox-item"),
  ItemIndicator: part(ComboboxPrimitive.ItemIndicator, "ui-combobox-item-indicator"),
  Label: part(ComboboxPrimitive.Label, "ui-combobox-label"),
  List: part(ComboboxPrimitive.List, "ui-combobox-list"),
  Popup: part(ComboboxPrimitive.Popup, "ui-combobox-popup"),
  Portal: part(ComboboxPrimitive.Portal, "ui-combobox-portal"),
  Positioner: part(ComboboxPrimitive.Positioner, "ui-combobox-positioner"),
  Root: ComboboxPrimitive.Root,
  Row: part(ComboboxPrimitive.Row, "ui-combobox-row"),
  Separator: part(ComboboxPrimitive.Separator, "ui-combobox-separator"),
  Status: part(ComboboxPrimitive.Status, "ui-combobox-status"),
  Trigger: part(ComboboxPrimitive.Trigger, "ui-combobox-trigger"),
  Value: ComboboxPrimitive.Value,
  createItems: ComboboxPrimitive.createItems,
  useFilter: ComboboxPrimitive.useFilter,
  useFilteredItems: ComboboxPrimitive.useFilteredItems,
};
