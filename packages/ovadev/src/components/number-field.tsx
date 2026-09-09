/* Number Field — the Base UI component with this brand's class on every part
   that renders an element. Nothing here styles it: the classes are the hooks,
   and styles/number-field.css is where the brand goes.

   Parts that render no element of their own (Root, Provider, Collection) and
   the helpers (createHandle, useFilter) pass straight through, unwrapped.

   Anatomy:
   <NumberField.Root>
     <NumberField.ScrubArea>
       <NumberField.ScrubAreaCursor />
     </NumberField.ScrubArea>
     <NumberField.Group>
       <NumberField.Decrement />
       <NumberField.Input />
       <NumberField.Increment />
     </NumberField.Group>
   </NumberField.Root>;
*/
import { NumberField as NumberFieldPrimitive } from "@base-ui/react/number-field";
import { part } from "./part";
import "../styles/number-field.css";

export const NumberField = {
  Decrement: part(NumberFieldPrimitive.Decrement, "ova-number-field-decrement"),
  Group: part(NumberFieldPrimitive.Group, "ova-number-field-group"),
  Increment: part(NumberFieldPrimitive.Increment, "ova-number-field-increment"),
  Input: part(NumberFieldPrimitive.Input, "ova-number-field-input"),
  Root: part(NumberFieldPrimitive.Root, "ova-number-field"),
  ScrubArea: part(NumberFieldPrimitive.ScrubArea, "ova-number-field-scrub-area"),
  ScrubAreaCursor: part(NumberFieldPrimitive.ScrubAreaCursor, "ova-number-field-scrub-area-cursor"),
};
