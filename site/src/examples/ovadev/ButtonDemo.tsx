import { Button } from "@ovadev-gmbh/ui-ovadev";
import { ScrollTextIcon } from "lucide-react";

export default function ButtonDemo() {
  return (
    <div className="flex items-center gap-2">
      <Button variant="outline">Publish post</Button>
      <Button variant="outline" size="icon" aria-label="Open the draft">
        <ScrollTextIcon />
      </Button>
    </div>
  );
}
