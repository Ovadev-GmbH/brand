import { Separator } from "@ovadev-gmbh/ui-januna";

export default function SeparatorDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h3 className="text-heading-16">Friday dinner</h3>
        <p className="text-copy-14 text-content-secondary">The evening's service, 18:00 to 23:00.</p>
      </div>
      <Separator />
      <p className="text-copy-14">
        Marta hosts tonight. The terrace opens at 19:00 if it stays dry, and T12 is held for the Keller party of 6.
      </p>
    </div>
  );
}
