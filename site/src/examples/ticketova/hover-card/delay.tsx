import { HoverCard, HoverCardContent, HoverCardTrigger } from "@ovadev-gmbh/ui-ticketova";

const tenants = [
  { slug: "acme-logistics", name: "Acme Logistics AG", plan: "Scale", seats: "38 of 40", note: "600ms, the default" },
  { slug: "bergwerk-ag", name: "Bergwerk AG", plan: "Team", seats: "12 of 15", note: "delay={150}", delay: 150, closeDelay: 0 },
];

export default function HoverCardDelay() {
  return (
    <div className="flex flex-col gap-2">
      {tenants.map((t) => (
        <div key={t.slug} className="flex items-center gap-4">
          <HoverCard>
            <HoverCardTrigger
              href={`#tenants/${t.slug}`}
              delay={t.delay}
              closeDelay={t.closeDelay}
              className="w-32 text-label-13 text-content-brand underline-offset-4 hover:underline"
            >
              {t.slug}
            </HoverCardTrigger>
            <HoverCardContent align="start">
              <div className="flex flex-col gap-1">
                <span className="text-label-13">{t.name}</span>
                <span className="text-copy-13 text-content-secondary">
                  {t.plan} plan, <span className="text-copy-13-mono">{t.seats}</span> seats in use.
                </span>
              </div>
            </HoverCardContent>
          </HoverCard>
          <span className="text-label-13-mono text-content-tertiary">{t.note}</span>
        </div>
      ))}
    </div>
  );
}
