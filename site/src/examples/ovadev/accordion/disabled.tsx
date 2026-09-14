import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@ovadev-gmbh/ui-ovadev";

export default function AccordionDisabled() {
  return (
    <Accordion className="w-[28rem]">
      <AccordionItem value="logo">
        <AccordionTrigger>Logo</AccordionTrigger>
        <AccordionContent>
          <p className="m-0 text-content-secondary">The pixel O with the red block in the lower right. SVG and PNG, on paper and on white.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="press-kit" disabled>
        <AccordionTrigger>
          <span className="flex items-center gap-2">
            Press kit
            <span className="text-label-12 text-content-tertiary">Ready 2026-10-01</span>
          </span>
        </AccordionTrigger>
        <AccordionContent>
          <p className="m-0 text-content-secondary">Logos, product screenshots and the three portraits, as one ZIP.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="colours">
        <AccordionTrigger>Colours</AccordionTrigger>
        <AccordionContent>
          <p className="m-0 text-content-secondary">Paper, ink and one red. The red appears once per page, never as type.</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
