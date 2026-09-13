import { Button } from "@ovadev-gmbh/ui-internal";
import { EllipsisIcon, RefreshCwIcon } from "lucide-react";

export default function ButtonIcon() {
  return (
    <div className="flex items-center gap-2">
      <Button variant="outline" size="icon" aria-label="Refresh deployments">
        <RefreshCwIcon />
      </Button>
      <Button variant="ghost" size="icon" aria-label="More actions">
        <EllipsisIcon />
      </Button>
    </div>
  );
}
