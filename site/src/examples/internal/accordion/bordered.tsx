import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@ovadev-gmbh/ui-internal";

const questions = [
  {
    value: "proration",
    title: "How is a plan change billed?",
    body: "Moving from Team to Scale is charged pro rata for the rest of the month, on the next invoice.",
  },
  {
    value: "currency",
    title: "Which currencies do invoices use?",
    body: "CHF for tenants in Switzerland, EUR for tenants in the European Union.",
  },
  {
    value: "dunning",
    title: "When is a tenant suspended?",
    body: "After the second reminder, 45 days past the due date. Suspension keeps the data for 90 days.",
  },
];

export default function AccordionBordered() {
  return (
    <div className="w-[28rem] material-base px-4">
      <Accordion>
        {questions.map((q) => (
          <AccordionItem key={q.value} value={q.value}>
            <AccordionTrigger>{q.title}</AccordionTrigger>
            <AccordionContent>
              <p className="m-0 text-content-secondary">{q.body}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
