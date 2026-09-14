import { Bubble, BubbleContent } from "@ovadev-gmbh/ui-ovadev";

const variants = [
  { variant: "default", text: "Replaced the logo, the shop shows the new one." },
  { variant: "secondary", text: "Which TICKETOVA package is Gemeinde Cham on?" },
  { variant: "muted", text: "Quote Q-2026-0142 is still open on our side." },
  { variant: "tinted", text: "Pinned: shop maintenance on 2026-09-20, 02:00 to 04:00 CEST." },
  { variant: "outline", text: "Forwarded from hello@ova.dev" },
  { variant: "ghost", text: "Unframed text runs the full width of the row, for longer answers and notes." },
  { variant: "destructive", text: "Not delivered: the mailbox is full." },
] as const;

export default function BubbleVariant() {
  return (
    <dl className="grid w-full max-w-xl grid-cols-[6rem_1fr] items-center gap-x-4 gap-y-3">
      {variants.map(({ variant, text }) => (
        <div key={variant} className="contents">
          <dt className="text-label-12-mono text-content-secondary">{variant}</dt>
          <dd className="flex min-w-0 flex-col">
            <Bubble variant={variant}>
              <BubbleContent>{text}</BubbleContent>
            </Bubble>
          </dd>
        </div>
      ))}
    </dl>
  );
}
