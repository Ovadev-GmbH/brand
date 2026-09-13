import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@ovadev-gmbh/ui-januna";

export default function AccordionDemo() {
  return (
    <Accordion defaultValue={["cancellations"]} className="w-full max-w-md">
      <AccordionItem value="cancellations">
        <AccordionTrigger>Cancellations</AccordionTrigger>
        <AccordionContent>
          Guests can cancel free of charge until 24 hours before their booking. After that, the deposit
          stays with the restaurant.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="deposits">
        <AccordionTrigger>Deposits</AccordionTrigger>
        <AccordionContent>
          Parties of six or more pay CHF 20.00 per guest when they book. It comes off the bill on the
          evening.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="late">
        <AccordionTrigger>Late arrivals</AccordionTrigger>
        <AccordionContent>
          We hold the table for 15 minutes. After that it may go to the waitlist, and the guest gets a
          short message.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
