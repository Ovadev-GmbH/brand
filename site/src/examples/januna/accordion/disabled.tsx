import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@ovadev-gmbh/ui-januna";

export default function AccordionDisabled() {
  return (
    <Accordion className="w-[28rem]">
      <AccordionItem value="shifts">
        <AccordionTrigger>Shifts</AccordionTrigger>
        <AccordionContent>
          <p className="text-content-secondary">Lunch from 11:30 to 14:30, dinner from 18:00 to 23:00.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="deposits" disabled>
        <AccordionTrigger>
          <span className="flex items-center gap-2">
            Deposits
            <span className="text-label-12 text-content-tertiary">Connect a payment account first</span>
          </span>
        </AccordionTrigger>
        <AccordionContent>
          <p className="text-content-secondary">A deposit per guest for parties of 6 or more.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="waitlist">
        <AccordionTrigger>Waitlist</AccordionTrigger>
        <AccordionContent>
          <p className="text-content-secondary">Opens once a shift is full. Guests are texted when a table frees up.</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
