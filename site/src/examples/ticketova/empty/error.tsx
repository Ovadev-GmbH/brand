import {
  Button,
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@ovadev-gmbh/ui-ticketova";
import { WarningCircleIcon, ArrowClockwiseIcon } from "@ovadev-gmbh/ui-ticketova/icons";

export default function EmptyError() {
  return (
    <Empty className="w-full max-w-md border">
      <EmptyHeader>
        <EmptyMedia variant="icon" className="bg-surface-danger text-status-danger">
          <WarningCircleIcon />
        </EmptyMedia>
        <EmptyTitle>Invoices did not load</EmptyTitle>
        <EmptyDescription>The billing service in ch-zrh-1 did not answer within 10 s.</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline" size="sm">
          <ArrowClockwiseIcon data-icon="inline-start" />
          Reload invoices
        </Button>
      </EmptyContent>
    </Empty>
  );
}
