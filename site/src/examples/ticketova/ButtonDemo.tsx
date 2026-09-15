import { Button } from "@ovadev-gmbh/ui-ticketova";
import { ScrollIcon } from "@ovadev-gmbh/ui-ticketova/icons";

export default function ButtonDemo() {
  return (
    <div className="flex items-center gap-2">
      <Button variant="outline">Retry deployment</Button>
      <Button variant="outline" size="icon" aria-label="Open build log">
        <ScrollIcon />
      </Button>
    </div>
  );
}
