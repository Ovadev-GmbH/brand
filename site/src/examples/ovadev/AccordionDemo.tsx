import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@ovadev-gmbh/ui-ovadev";

export default function AccordionDemo() {
  return (
    <Accordion defaultValue={["entrance"]} className="w-full max-w-md">
      <AccordionItem value="entrance">
        <AccordionTrigger>Does TICKETOVA work with our turnstiles?</AccordionTrigger>
        <AccordionContent>
          The admission control reads the ticket code on any Android or iOS device. Turnstiles with a
          serial or network interface are connected on request.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="januna">
        <AccordionTrigger>When does JANUNA ship?</AccordionTrigger>
        <AccordionContent>
          JANUNA runs at <span className="text-label-13-mono">2</span> restaurants near Zug. The public release is
          planned for <span className="text-label-13-mono">2027</span>, before the summer season.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="hosting">
        <AccordionTrigger>Where is the data hosted?</AccordionTrigger>
        <AccordionContent>
          In Switzerland, in two data centres. Ovadev GmbH is the data controller, and the contract is under Swiss law.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
