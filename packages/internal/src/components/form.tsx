/* Form — the Base UI component with this brand's class on every part
   that renders an element. Nothing here styles it: the classes are the hooks,
   and styles/form.css is where the brand goes.

   Parts that render no element of their own (Root, Provider, Collection) and
   the helpers (createHandle, useFilter) pass straight through, unwrapped.

   Anatomy:
   <Form>
     <Field.Root>
       <Field.Label />
       <Field.Control />
       <Field.Error />
     </Field.Root>
   </Form>;
*/
import { Form as FormPrimitive } from "@base-ui/react/form";
import { part } from "./part";
import "../styles/form.css";

export const Form = part(FormPrimitive, "ui-form");
