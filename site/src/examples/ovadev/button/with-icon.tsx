import { Button } from "@ovadev-gmbh/ui-ovadev";
import { ArrowRightIcon, PlusIcon } from "lucide-react";

export default function ButtonWithIcon() {
  return (
    <div className="flex items-center gap-2">
      <Button>
        <PlusIcon data-icon="inline-start" />
        New post
      </Button>
      <Button variant="outline">
        Next post
        <ArrowRightIcon data-icon="inline-end" />
      </Button>
    </div>
  );
}
