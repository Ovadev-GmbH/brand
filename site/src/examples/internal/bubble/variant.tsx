import { Bubble, BubbleContent } from "@ovadev-gmbh/ui-internal";

const variants = [
  { variant: "default", text: "Rotated the key, the old one is revoked." },
  { variant: "secondary", text: "Which plan is bergwerk-ag on?" },
  { variant: "muted", text: "Invoice INV-2026-0142 is still open on our side." },
  { variant: "tinted", text: "Pinned: maintenance on 2026-09-20, 02:00 to 04:00 CEST." },
  { variant: "outline", text: "Forwarded from billing@ova.dev" },
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
