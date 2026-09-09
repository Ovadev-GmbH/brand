/* Field — the Base UI component with this brand's class on every part
   that renders an element. Nothing here styles it: the classes are the hooks,
   and styles/field.css is where the brand goes.

   Parts that render no element of their own (Root, Provider, Collection) and
   the helpers (createHandle, useFilter) pass straight through, unwrapped.

   Anatomy:
   <Field.Root>
     <Field.Label />
     <Field.Control />
     <Field.Description />
     <Field.Item />
     <Field.Error />
     <Field.Validity />
   </Field.Root>;
*/
import { Field as FieldPrimitive } from "@base-ui/react/field";
import { part } from "./part";
import "../styles/field.css";

export const Field = {
  Control: part(FieldPrimitive.Control, "ova-field-control"),
  Description: part(FieldPrimitive.Description, "ova-field-description"),
  Error: part(FieldPrimitive.Error, "ova-field-error"),
  Item: part(FieldPrimitive.Item, "ova-field-item"),
  Label: part(FieldPrimitive.Label, "ova-field-label"),
  Root: part(FieldPrimitive.Root, "ova-field"),
  Validity: FieldPrimitive.Validity,
};
