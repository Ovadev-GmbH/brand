import { Bubble, BubbleContent } from "@ovadev-gmbh/ui-januna";

const variants = [
  { variant: "default", text: "Terrace 3 is held for you at 19:30." },
  { variant: "secondary", text: "Do you have a table for 2 tomorrow at 20:00?" },
  { variant: "muted", text: "We will be 15 minutes late, sorry." },
  { variant: "tinted", text: "Pinned: the kitchen closes at 22:00 on Sunday." },
  { variant: "outline", text: "Booking moved to 20:00 by Marta." },
  { variant: "ghost", text: "Unframed text runs the full width of the row, for the host's notes and longer answers." },
  { variant: "destructive", text: "Not delivered: the guest's number is not reachable." },
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
