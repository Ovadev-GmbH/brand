import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@ovadev-gmbh/ui-internal";

export default function AccordionDemo() {
  return (
    <Accordion defaultValue={["deployment"]} className="w-full max-w-md">
      <AccordionItem value="deployment">
        <AccordionTrigger>A deployment failed</AccordionTrigger>
        <AccordionContent>
          Open the build log from the deployment. If a migration failed, roll back to the last live
          deployment before you retry.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="quota">
        <AccordionTrigger>A tenant hit its API quota</AccordionTrigger>
        <AccordionContent>
          Requests return <span className="text-label-13-mono">429</span> until the window resets at{" "}
          <span className="text-label-13-mono">00:00 UTC</span>. Raise the quota only once billing has agreed.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="invoices">
        <AccordionTrigger>An invoice run stopped</AccordionTrigger>
        <AccordionContent>
          Restart it from Billing. The run resumes after the last invoice it wrote, so no number is skipped.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
