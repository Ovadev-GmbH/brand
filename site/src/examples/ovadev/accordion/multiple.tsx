import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@ovadev-gmbh/ui-ovadev";

const steps = [
  {
    value: "freeze",
    title: "1. Freeze deploys",
    body: "Set the freeze on production in the console. Running builds finish; new ones wait in the queue.",
  },
  {
    value: "snapshot",
    title: "2. Take a snapshot",
    body: "Snapshot the primary database in ch-zrh-1 and paste the snapshot ID into the incident.",
  },
  {
    value: "migrate",
    title: "3. Run the migration",
    body: "Run it against staging first. Go on to production only if it finished in under 5 minutes.",
  },
];

export default function AccordionMultiple() {
  return (
    <Accordion multiple defaultValue={["freeze", "snapshot"]} className="w-[28rem]">
      {steps.map((step) => (
        <AccordionItem key={step.value} value={step.value}>
          <AccordionTrigger>{step.title}</AccordionTrigger>
          <AccordionContent>
            <p className="m-0 text-content-secondary">{step.body}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
