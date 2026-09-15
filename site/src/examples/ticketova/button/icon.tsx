import { Button } from "@ovadev-gmbh/ui-ticketova";
import { DotsThreeIcon, ArrowsClockwiseIcon } from "@ovadev-gmbh/ui-ticketova/icons";

export default function ButtonIcon() {
  return (
    <div className="flex items-center gap-2">
      <Button variant="outline" size="icon" aria-label="Refresh deployments">
        <ArrowsClockwiseIcon />
      </Button>
      <Button variant="ghost" size="icon" aria-label="More actions">
        <DotsThreeIcon />
      </Button>
    </div>
  );
}
