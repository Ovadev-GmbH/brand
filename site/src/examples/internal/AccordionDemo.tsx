import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@ovadev-gmbh/ui-internal";

export default function AccordionDemo() {
  return (
    <Accordion className="max-w-xl" defaultValue={["timeline"]}>
      <AccordionItem value="timeline">
        <AccordionTrigger>Timeline</AccordionTrigger>
        <AccordionContent>
          <p className="text-content-secondary">
            <span className="font-mono tabular-nums">09:14</span> Alert fired on
            api-eu-1 p99 latency. <span className="font-mono tabular-nums">09:21</span>{" "}
            Traffic drained to api-eu-2.{" "}
            <span className="font-mono tabular-nums">09:48</span> Rollback of
            deploy #4821 complete.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="root-cause">
        <AccordionTrigger>Root cause</AccordionTrigger>
        <AccordionContent>
          <p className="text-content-secondary">
            A migration added an unindexed column filter to the invoices query.
            Under load the planner fell back to a sequential scan.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="action-items">
        <AccordionTrigger>Action items</AccordionTrigger>
        <AccordionContent>
          <p className="text-content-secondary">
            Add the index before the next invoice run. Gate migrations on an
            EXPLAIN check in CI. Owner: platform team, due 19 Sep.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
