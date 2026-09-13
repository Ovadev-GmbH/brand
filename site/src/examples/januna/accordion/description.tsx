import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@ovadev-gmbh/ui-januna";

const sections = [
  {
    value: "guest",
    title: "Guest",
    fields: [
      { term: "Name", value: "Anna Keller" },
      { term: "Party", value: "6", mono: true },
      { term: "Arrival", value: "19:30", mono: true },
      { term: "Table", value: "T12" },
    ],
  },
  {
    value: "deposit",
    title: "Deposit",
    fields: [
      { term: "Amount", value: "CHF 120.00", mono: true },
      { term: "Paid", value: "2026-09-10 14:02", mono: true },
      { term: "Refund Until", value: "2026-09-13 17:30", mono: true },
      { term: "Method", value: "Card" },
    ],
  },
];

export default function AccordionWithDescription() {
  return (
    <Accordion defaultValue={["guest"]} className="w-[28rem]">
      {sections.map((section) => (
        <AccordionItem key={section.value} value={section.value}>
          <AccordionTrigger>{section.title}</AccordionTrigger>
          <AccordionContent>
            <dl className="m-0 grid grid-cols-2 gap-x-6 gap-y-4">
              {section.fields.map((field) => (
                <div key={field.term} className="flex min-w-0 flex-col gap-1">
                  <dt className="text-label-13 text-content-secondary">{field.term}</dt>
                  <dd className={`m-0 text-content-primary ${field.mono ? "text-label-13-mono" : "text-label-14"}`}>
                    {field.value}
                  </dd>
                </div>
              ))}
            </dl>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
