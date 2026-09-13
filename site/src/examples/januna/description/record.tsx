import { Button, Description, DescriptionList, StatusDot } from "@ovadev-gmbh/ui-januna";

export default function DescriptionRecord() {
  return (
    <section className="flex w-full max-w-xl flex-col gap-6">
      <header className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <h3 className="m-0 text-heading-16">
            Booking <span className="text-label-13-mono">JAN-4821</span>
          </h3>
          <StatusDot state="ready" label />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            Move table
          </Button>
          <Button size="sm">Seat party</Button>
        </div>
      </header>
      <DescriptionList columns={3}>
        <Description title="Guest" content="Anna Keller" />
        <Description title="Party" content="6 guests" />
        <Description title="Table" content="T12, main room" />
        <Description title="Arrival" content={<span className="text-label-13-mono">19:30</span>} />
        <Description title="Shift" content="Dinner" />
        <Description title="Deposit" content={<span className="text-label-13-mono">CHF 120.00</span>} />
      </DescriptionList>
    </section>
  );
}
