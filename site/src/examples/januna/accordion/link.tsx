import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@ovadev-gmbh/ui-januna";

export default function AccordionWithLink() {
  return (
    <Accordion defaultValue={["cancellation"]} className="w-[28rem]">
      <AccordionItem value="cancellation">
        <AccordionTrigger>Cancellation policy</AccordionTrigger>
        <AccordionContent>
          <p className="text-content-secondary">
            Guests can cancel free of charge up to 24 hours before their booking. After that the deposit is kept.
          </p>
          <p className="text-content-secondary">
            A no-show keeps the deposit as well. <a href="#accordion-link-policy">Edit the policy</a>
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="large-parties">
        <AccordionTrigger>Large parties</AccordionTrigger>
        <AccordionContent>
          <p className="text-content-secondary">
            Parties of 9 or more book by phone. <a href="#accordion-link-phone">Change the number guests see</a>
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
