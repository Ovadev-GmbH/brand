/* Autocomplete — the Base UI component with this brand's class on every part
   that renders an element. Nothing here styles it: the classes are the hooks,
   and styles/autocomplete.css is where the brand goes.

   Parts that render no element of their own (Root, Provider, Collection) and
   the helpers (createHandle, useFilter) pass straight through, unwrapped.

   Anatomy:
   <Autocomplete.Root>
     <Autocomplete.InputGroup>
       <Autocomplete.Input />
       <Autocomplete.Trigger />
       <Autocomplete.Icon />
       <Autocomplete.Clear />
       <Autocomplete.Value />
     </Autocomplete.InputGroup>
   
     <Autocomplete.Portal>
       <Autocomplete.Backdrop />
       <Autocomplete.Positioner>
         <Autocomplete.Popup>
           <Autocomplete.Arrow />
   
           <Autocomplete.Status />
           <Autocomplete.Empty />
   
           <Autocomplete.List>
             <Autocomplete.Row>
               <Autocomplete.Item />
             </Autocomplete.Row>
   
             <Autocomplete.Separator />
   
             <Autocomplete.Group>
               <Autocomplete.GroupLabel />
             </Autocomplete.Group>
   
             <Autocomplete.Collection />
           </Autocomplete.List>
         </Autocomplete.Popup>
       </Autocomplete.Positioner>
     </Autocomplete.Portal>
   </Autocomplete.Root>;
*/
import { Autocomplete as AutocompletePrimitive } from "@base-ui/react/autocomplete";
import { part } from "./part";
import "../styles/autocomplete.css";

export const Autocomplete = {
  Arrow: part(AutocompletePrimitive.Arrow, "ui-autocomplete-arrow"),
  Backdrop: part(AutocompletePrimitive.Backdrop, "ui-autocomplete-backdrop"),
  Clear: part(AutocompletePrimitive.Clear, "ui-autocomplete-clear"),
  Collection: AutocompletePrimitive.Collection,
  Empty: part(AutocompletePrimitive.Empty, "ui-autocomplete-empty"),
  Group: part(AutocompletePrimitive.Group, "ui-autocomplete-group"),
  GroupLabel: part(AutocompletePrimitive.GroupLabel, "ui-autocomplete-group-label"),
  Icon: part(AutocompletePrimitive.Icon, "ui-autocomplete-icon"),
  Input: part(AutocompletePrimitive.Input, "ui-autocomplete-input"),
  InputGroup: part(AutocompletePrimitive.InputGroup, "ui-autocomplete-input-group"),
  Item: part(AutocompletePrimitive.Item, "ui-autocomplete-item"),
  List: part(AutocompletePrimitive.List, "ui-autocomplete-list"),
  Popup: part(AutocompletePrimitive.Popup, "ui-autocomplete-popup"),
  Portal: part(AutocompletePrimitive.Portal, "ui-autocomplete-portal"),
  Positioner: part(AutocompletePrimitive.Positioner, "ui-autocomplete-positioner"),
  Root: AutocompletePrimitive.Root,
  Row: part(AutocompletePrimitive.Row, "ui-autocomplete-row"),
  Separator: part(AutocompletePrimitive.Separator, "ui-autocomplete-separator"),
  Status: part(AutocompletePrimitive.Status, "ui-autocomplete-status"),
  Trigger: part(AutocompletePrimitive.Trigger, "ui-autocomplete-trigger"),
  Value: AutocompletePrimitive.Value,
  useFilter: AutocompletePrimitive.useFilter,
  useFilteredItems: AutocompletePrimitive.useFilteredItems,
};
