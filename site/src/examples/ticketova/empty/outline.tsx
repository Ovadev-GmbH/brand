import { Button, Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyTitle } from "@ovadev-gmbh/ui-ticketova";
import { PlusIcon } from "@ovadev-gmbh/ui-ticketova/icons";

export default function EmptyOutline() {
  return (
    <Empty className="w-full max-w-md border">
      <EmptyHeader>
        <EmptyTitle>No webhook endpoints</EmptyTitle>
        <EmptyDescription>bergwerk-ag receives no events. Add an endpoint to be told about invoices and deployments.</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline" size="sm">
          <PlusIcon data-icon="inline-start" />
          Add endpoint
        </Button>
      </EmptyContent>
    </Empty>
  );
}
