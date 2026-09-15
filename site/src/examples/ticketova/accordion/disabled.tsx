import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@ovadev-gmbh/ui-ticketova";

export default function AccordionDisabled() {
  return (
    <Accordion className="w-[28rem]">
      <AccordionItem value="members">
        <AccordionTrigger>Members</AccordionTrigger>
        <AccordionContent>
          <p className="m-0 text-content-secondary">12 of 15 seats in use. Invitations expire after 7 days.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="sso" disabled>
        <AccordionTrigger>
          <span className="flex items-center gap-2">
            Single sign-on
            <span className="text-label-12 text-content-tertiary">Scale plan only</span>
          </span>
        </AccordionTrigger>
        <AccordionContent>
          <p className="m-0 text-content-secondary">SAML and OIDC settings for bergwerk-ag.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="webhooks">
        <AccordionTrigger>Webhooks</AccordionTrigger>
        <AccordionContent>
          <p className="m-0 text-content-secondary">2 endpoints. Failed deliveries are retried for 24 hours.</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
