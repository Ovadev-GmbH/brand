import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle, Spinner } from "@ovadev-gmbh/ui-januna";

export default function SpinnerEmpty() {
  return (
    <Empty className="w-full max-w-md border">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Spinner aria-hidden />
        </EmptyMedia>
        <EmptyTitle>Loading tonight's bookings</EmptyTitle>
        <EmptyDescription>Fetching the dinner shift, 18:00 to 23:00.</EmptyDescription>
      </EmptyHeader>
    </Empty>
  );
}
