import {
  Button,
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@ovadev-gmbh/ui-ovadev";
import { CircleAlertIcon, RotateCwIcon } from "lucide-react";

export default function EmptyError() {
  return (
    <Empty className="w-full max-w-md border">
      <EmptyHeader>
        <EmptyMedia variant="icon" className="bg-surface-danger text-status-danger">
          <CircleAlertIcon />
        </EmptyMedia>
        <EmptyTitle>Invoices did not load</EmptyTitle>
        <EmptyDescription>The billing service in ch-zrh-1 did not answer within 10 s.</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline" size="sm">
          <RotateCwIcon data-icon="inline-start" />
          Reload invoices
        </Button>
      </EmptyContent>
    </Empty>
  );
}
