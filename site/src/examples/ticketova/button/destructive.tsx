import { Button } from "@ovadev-gmbh/ui-ticketova";
import { TrashIcon } from "@ovadev-gmbh/ui-ticketova/icons";

export default function ButtonDestructive() {
  return (
    <Button variant="destructive">
      <TrashIcon data-icon="inline-start" />
      Revoke API key
    </Button>
  );
}
