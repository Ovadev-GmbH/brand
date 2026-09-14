import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@ovadev-gmbh/ui-ovadev";

const sections = [
  {
    value: "customer",
    title: "Customer",
    fields: [
      { term: "Operator", value: "Gemeinde Hausen am Albis" },
      { term: "Venue", value: "Strandbad Türlersee" },
      { term: "Season", value: "2026-05-09 to 2026-09-13", mono: true },
      { term: "Contact", value: "+41 44 764 80 20", mono: true },
    ],
  },
  {
    value: "contract",
    title: "Contract",
    fields: [
      { term: "Product", value: "TICKETOVA" },
      { term: "Price per Ticket", value: "CHF 0.35", mono: true },
      { term: "Tickets 2026", value: "48'212", mono: true },
      { term: "Next Invoice", value: "2026-10-01", mono: true },
    ],
  },
];

export default function AccordionWithDescription() {
  return (
    <Accordion defaultValue={["customer"]} className="w-[28rem]">
      {sections.map((section) => (
        <AccordionItem key={section.value} value={section.value}>
          <AccordionTrigger>{section.title}</AccordionTrigger>
          <AccordionContent>
            <dl className="m-0 grid grid-cols-2 gap-x-6 gap-y-4">
              {section.fields.map((field) => (
                <div key={field.term} className="flex min-w-0 flex-col gap-1">
                  <dt className="text-label-12 text-content-secondary">{field.term}</dt>
                  <dd className={`m-0 text-content-primary ${field.mono ? "text-label-13-mono" : "text-label-13"}`}>
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
