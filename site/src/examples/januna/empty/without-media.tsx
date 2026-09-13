import { Empty, EmptyDescription, EmptyHeader, EmptyTitle } from "@ovadev-gmbh/ui-januna";

export default function EmptyWithoutMedia() {
  return (
    <Empty className="w-80 border">
      <EmptyHeader>
        <EmptyTitle>No notes tonight</EmptyTitle>
        <EmptyDescription>
          None of the 24 dinner bookings carries a note. <a href="#empty-without-media-guests">Open the guest list</a>.
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  );
}
