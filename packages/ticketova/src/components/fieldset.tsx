/* Fieldset — the Base UI component with this brand's class on every part
   that renders an element. Nothing here styles it: the classes are the hooks,
   and styles/fieldset.css is where the brand goes.

   Parts that render no element of their own (Root, Provider, Collection) and
   the helpers (createHandle, useFilter) pass straight through, unwrapped.

   Anatomy:
   <Fieldset.Root>
     <Fieldset.Legend />
   </Fieldset.Root>;
*/
import { Fieldset as FieldsetPrimitive } from "@base-ui/react/fieldset";
import { part } from "./part";
import "../styles/fieldset.css";

export const Fieldset = {
  Legend: part(FieldsetPrimitive.Legend, "tova-fieldset-legend"),
  Root: part(FieldsetPrimitive.Root, "tova-fieldset"),
};
