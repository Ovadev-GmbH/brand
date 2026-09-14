import { HoverCard, HoverCardContent, HoverCardTrigger } from "@ovadev-gmbh/ui-ovadev";

const customers = [
  { slug: "restaurant-linde", name: "Restaurant Linde, Cham", plan: "JANUNA", seats: "48 of 60", note: "600ms, the default" },
  { slug: "gasthaus-adler", name: "Gasthaus Adler, Baar", plan: "JANUNA", seats: "32 of 40", note: "delay={150}", delay: 150, closeDelay: 0 },
];

export default function HoverCardDelay() {
  return (
    <div className="flex flex-col gap-2">
      {customers.map((t) => (
        <div key={t.slug} className="flex items-center gap-4">
          <HoverCard>
            <HoverCardTrigger
              href={`#customers/${t.slug}`}
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
                  {t.plan} pilot, <span className="text-copy-13-mono">{t.seats}</span> seats booked tonight.
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
