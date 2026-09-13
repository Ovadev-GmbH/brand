import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Description,
  DescriptionList,
} from "@ovadev-gmbh/ui-januna";

const mono = (value: string) => <span className="text-label-13-mono">{value}</span>;

export default function AccordionWithDescription() {
  return (
    <Accordion defaultValue={["guest"]} className="w-[28rem]">
      <AccordionItem value="guest">
        <AccordionTrigger>Guest</AccordionTrigger>
        <AccordionContent>
          <DescriptionList>
            <Description title="Name" content="Anna Keller" />
            <Description title="Party" content={mono("6")} />
            <Description title="Arrival" content={mono("19:30")} />
            <Description title="Table" content="T12" />
          </DescriptionList>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="deposit">
        <AccordionTrigger>Deposit</AccordionTrigger>
        <AccordionContent>
          <DescriptionList>
            <Description title="Amount" content={mono("CHF 120.00")} />
            <Description title="Paid" content={mono("2026-09-10 14:02")} />
            <Description title="Refund Until" content={mono("2026-09-13 17:30")} />
            <Description title="Method" content="Card" />
          </DescriptionList>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
