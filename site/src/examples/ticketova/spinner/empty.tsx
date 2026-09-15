import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle, Spinner } from "@ovadev-gmbh/ui-ticketova";

export default function SpinnerEmpty() {
  return (
    <Empty className="w-full max-w-md border">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Spinner aria-hidden />
        </EmptyMedia>
        <EmptyTitle>Loading deployments</EmptyTitle>
        <EmptyDescription>Fetching the last 50 deployments of api-gateway in ch-zrh-1.</EmptyDescription>
      </EmptyHeader>
    </Empty>
  );
}
