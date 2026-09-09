/* Accordion — the Base UI component with this brand's class on every part
   that renders an element. Nothing here styles it: the classes are the hooks,
   and styles/accordion.css is where the brand goes.

   Parts that render no element of their own (Root, Provider, Collection) and
   the helpers (createHandle, useFilter) pass straight through, unwrapped.

   Anatomy:
   <Accordion.Root>
     <Accordion.Item>
       <Accordion.Header>
         <Accordion.Trigger />
       </Accordion.Header>
       <Accordion.Panel />
     </Accordion.Item>
   </Accordion.Root>;
*/
import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import { part } from "./part";
import "../styles/accordion.css";

export const Accordion = {
  Header: part(AccordionPrimitive.Header, "ui-accordion-header"),
  Item: part(AccordionPrimitive.Item, "ui-accordion-item"),
  Panel: part(AccordionPrimitive.Panel, "ui-accordion-panel"),
  Root: part(AccordionPrimitive.Root, "ui-accordion"),
  Trigger: part(AccordionPrimitive.Trigger, "ui-accordion-trigger"),
};
