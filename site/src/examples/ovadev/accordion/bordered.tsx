import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@ovadev-gmbh/ui-ovadev";

const questions = [
  {
    value: "pricing",
    title: "How is TICKETOVA priced?",
    body: "Per ticket sold, CHF 0.35, billed monthly. There is no set-up fee and no minimum.",
  },
  {
    value: "payment",
    title: "Which payment methods does the shop take?",
    body: "TWINT, Visa, Mastercard and PostFinance. Payouts arrive weekly in CHF.",
  },
  {
    value: "season",
    title: "What happens when the season ends?",
    body: "The shop closes on the date you set. Reports and the customer list stay available all year.",
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
