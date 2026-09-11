import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@ovadev-gmbh/ui-januna";

export default function AccordionDemo() {
  return (
    <Accordion className="max-w-xl" defaultValue={["tables"]}>
      <AccordionItem value="tables">
        <AccordionTrigger>How do I assign a table?</AccordionTrigger>
        <AccordionContent>
          <p>
            Open the booking and pick a table from the floor plan. Januna only
            shows tables that fit the party size and are free for the whole slot.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="guests">
        <AccordionTrigger>Can guests change their own booking?</AccordionTrigger>
        <AccordionContent>
          <p>
            Yes. The confirmation email carries a link where guests can move the
            time, adjust the party size or cancel up to two hours before service.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="shifts">
        <AccordionTrigger>What is a shift?</AccordionTrigger>
        <AccordionContent>
          <p>
            A shift is a block of service such as lunch or dinner. Each shift has
            its own opening hours, capacity and turn time.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
