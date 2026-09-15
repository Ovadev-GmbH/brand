import { Button } from "@ovadev-gmbh/ui-ticketova";
import { ArrowRightIcon, PlusIcon } from "@ovadev-gmbh/ui-ticketova/icons";

export default function ButtonWithIcon() {
  return (
    <div className="flex items-center gap-2">
      <Button>
        <PlusIcon data-icon="inline-start" />
        New tenant
      </Button>
      <Button variant="outline">
        Next invoice
        <ArrowRightIcon data-icon="inline-end" />
      </Button>
    </div>
  );
}
