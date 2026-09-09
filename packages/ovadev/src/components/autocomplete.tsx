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
  Arrow: part(AutocompletePrimitive.Arrow, "ova-autocomplete-arrow"),
  Backdrop: part(AutocompletePrimitive.Backdrop, "ova-autocomplete-backdrop"),
  Clear: part(AutocompletePrimitive.Clear, "ova-autocomplete-clear"),
  Collection: AutocompletePrimitive.Collection,
  Empty: part(AutocompletePrimitive.Empty, "ova-autocomplete-empty"),
  Group: part(AutocompletePrimitive.Group, "ova-autocomplete-group"),
  GroupLabel: part(AutocompletePrimitive.GroupLabel, "ova-autocomplete-group-label"),
  Icon: part(AutocompletePrimitive.Icon, "ova-autocomplete-icon"),
  Input: part(AutocompletePrimitive.Input, "ova-autocomplete-input"),
  InputGroup: part(AutocompletePrimitive.InputGroup, "ova-autocomplete-input-group"),
  Item: part(AutocompletePrimitive.Item, "ova-autocomplete-item"),
  List: part(AutocompletePrimitive.List, "ova-autocomplete-list"),
  Popup: part(AutocompletePrimitive.Popup, "ova-autocomplete-popup"),
  Portal: part(AutocompletePrimitive.Portal, "ova-autocomplete-portal"),
  Positioner: part(AutocompletePrimitive.Positioner, "ova-autocomplete-positioner"),
  Root: AutocompletePrimitive.Root,
  Row: part(AutocompletePrimitive.Row, "ova-autocomplete-row"),
  Separator: part(AutocompletePrimitive.Separator, "ova-autocomplete-separator"),
  Status: part(AutocompletePrimitive.Status, "ova-autocomplete-status"),
  Trigger: part(AutocompletePrimitive.Trigger, "ova-autocomplete-trigger"),
  Value: AutocompletePrimitive.Value,
  useFilter: AutocompletePrimitive.useFilter,
  useFilteredItems: AutocompletePrimitive.useFilteredItems,
};
