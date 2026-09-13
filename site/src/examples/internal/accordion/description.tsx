import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Description,
  DescriptionList,
} from "@ovadev-gmbh/ui-internal";

const mono = (value: string) => <span className="text-label-13-mono">{value}</span>;

export default function AccordionWithDescription() {
  return (
    <Accordion defaultValue={["billing"]} className="w-[28rem]">
      <AccordionItem value="billing">
        <AccordionTrigger>Billing</AccordionTrigger>
        <AccordionContent>
          <DescriptionList>
            <Description title="Plan" content="Scale" />
            <Description title="Monthly Amount" content={mono("CHF 1'240.00")} />
            <Description title="Next Invoice" content={mono("2026-10-01")} />
            <Description title="Payment Terms" content="Invoice, net 30" />
          </DescriptionList>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="hosting">
        <AccordionTrigger>Hosting</AccordionTrigger>
        <AccordionContent>
          <DescriptionList>
            <Description title="Region" content={mono("ch-zrh-1")} />
            <Description title="Environments" content={mono("3")} />
            <Description title="Last Deployment" content={mono("dpl_4f2c91")} />
            <Description title="Deployed" content={mono("2026-09-13 14:02 CEST")} />
          </DescriptionList>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
