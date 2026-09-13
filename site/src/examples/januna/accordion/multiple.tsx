import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@ovadev-gmbh/ui-januna";

const steps = [
  {
    value: "waitlist",
    title: "1. Read the waitlist",
    body: "4 parties are waiting for the dinner shift. Offer the freed tables in the order they joined.",
  },
  {
    value: "tables",
    title: "2. Assign the large tables",
    body: "T12 and Terrace 3 seat 8. Give them to the parties of 6 or more before the smaller bookings.",
  },
  {
    value: "brief",
    title: "3. Brief the floor",
    body: "Two allergies tonight, both on T4. Say them at the briefing and write them on the ticket.",
  },
];

export default function AccordionMultiple() {
  return (
    <Accordion multiple defaultValue={["waitlist", "tables"]} className="w-[28rem]">
      {steps.map((step) => (
        <AccordionItem key={step.value} value={step.value}>
          <AccordionTrigger>{step.title}</AccordionTrigger>
          <AccordionContent>
            <p className="text-content-secondary">{step.body}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
