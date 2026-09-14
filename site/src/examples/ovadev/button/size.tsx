import { Button } from "@ovadev-gmbh/ui-ovadev";
import { PlusIcon } from "lucide-react";

export default function ButtonSize() {
  return (
    <div className="flex flex-wrap items-center gap-6">
      <div className="flex items-center gap-2">
        <Button variant="outline" size="xs">
          Extra small
        </Button>
        <Button variant="outline" size="icon-xs" aria-label="Add row">
          <PlusIcon />
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm">
          Small
        </Button>
        <Button variant="outline" size="icon-sm" aria-label="Add row">
          <PlusIcon />
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="outline">Default</Button>
        <Button variant="outline" size="icon" aria-label="Add row">
          <PlusIcon />
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="outline" size="lg">
          Large
        </Button>
        <Button variant="outline" size="icon-lg" aria-label="Add row">
          <PlusIcon />
        </Button>
      </div>
    </div>
  );
}
