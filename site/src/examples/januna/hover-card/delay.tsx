import { HoverCard, HoverCardContent, HoverCardTrigger } from "@ovadev-gmbh/ui-januna";

const guests = [
  { slug: "nora-keller", name: "Nora Keller", visits: 14, last: "2026-08-12", note: "600ms, the default" },
  { slug: "amir-haddad", name: "Amir Haddad", visits: 3, last: "2026-07-30", note: "delay={150}", delay: 150, closeDelay: 0 },
];

export default function HoverCardDelay() {
  return (
    <div className="flex flex-col gap-2">
      {guests.map((g) => (
        <div key={g.slug} className="flex items-center gap-4">
          <HoverCard>
            <HoverCardTrigger
              href={`#guests/${g.slug}`}
              delay={g.delay}
              closeDelay={g.closeDelay}
              className="w-32 text-label-14 text-content-brand underline-offset-4 hover:underline"
            >
              {g.name}
            </HoverCardTrigger>
            <HoverCardContent align="start">
              <div className="flex flex-col gap-1">
                <span className="text-heading-14">{g.name}</span>
                <span className="text-copy-13 text-content-secondary">
                  {g.visits} visits, the last one on {g.last}.
                </span>
              </div>
            </HoverCardContent>
          </HoverCard>
          <span className="text-label-13-mono text-content-tertiary">{g.note}</span>
        </div>
      ))}
    </div>
  );
}
