import { Button } from "@ovadev-gmbh/ui-ovadev";
import { Trash2Icon } from "lucide-react";

export default function ButtonDestructive() {
  return (
    <Button variant="destructive">
      <Trash2Icon data-icon="inline-start" />
      Delete draft
    </Button>
  );
}
