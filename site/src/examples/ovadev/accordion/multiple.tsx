import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@ovadev-gmbh/ui-ovadev";

const steps = [
  {
    value: "season",
    title: "1. Set the season dates",
    body: "Enter the opening and closing day in the shop settings. Tickets sell from the opening day at 06:00.",
  },
  {
    value: "tariff",
    title: "2. Load the price list",
    body: "Import the tariff as CSV or type it in. Reduced prices need the ID check turned on at the entrance.",
  },
  {
    value: "entrance",
    title: "3. Test the entrance",
    body: "Scan a test ticket on each device. Open the shop only once every device shows the green screen.",
  },
];

export default function AccordionMultiple() {
  return (
    <Accordion multiple defaultValue={["season", "tariff"]} className="w-[28rem]">
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
