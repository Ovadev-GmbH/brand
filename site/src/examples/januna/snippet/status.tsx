import { Snippet } from "@ovadev-gmbh/ui-januna";

export default function SnippetStatus() {
  return (
    <div className="flex w-full max-w-xl flex-col gap-3">
      <Snippet variant="success" prompt={false} text="Exported 48 bookings for tonight to dinner-2026-09-13.csv" />
      <Snippet variant="warning" prompt={false} text="3 bookings on Terrace 3 have no table after the move inside" />
      <Snippet variant="error" prompt={false} text="Import stopped at row 14: the booking has no arrival time" />
    </div>
  );
}
