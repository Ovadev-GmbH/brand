import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@ovadev-gmbh/ui-ticketova";

const sections = [
  {
    value: "billing",
    title: "Billing",
    fields: [
      { term: "Plan", value: "Scale" },
      { term: "Monthly Amount", value: "CHF 1'240.00", mono: true },
      { term: "Next Invoice", value: "2026-10-01", mono: true },
      { term: "Payment Terms", value: "Invoice, net 30" },
    ],
  },
  {
    value: "hosting",
    title: "Hosting",
    fields: [
      { term: "Region", value: "ch-zrh-1", mono: true },
      { term: "Environments", value: "3", mono: true },
      { term: "Last Deployment", value: "dpl_4f2c91", mono: true },
      { term: "Deployed", value: "2026-09-13 14:02 CEST", mono: true },
    ],
  },
];

export default function AccordionWithDescription() {
  return (
    <Accordion defaultValue={["billing"]} className="w-[28rem]">
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
