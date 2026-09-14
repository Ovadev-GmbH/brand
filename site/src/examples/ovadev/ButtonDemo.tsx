import { Button } from "@ovadev-gmbh/ui-ovadev";
import { ScrollTextIcon } from "lucide-react";

export default function ButtonDemo() {
  return (
    <div className="flex items-center gap-2">
      <Button variant="outline">Retry deployment</Button>
      <Button variant="outline" size="icon" aria-label="Open build log">
        <ScrollTextIcon />
      </Button>
    </div>
  );
}
