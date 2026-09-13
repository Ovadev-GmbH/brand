import { Button, ButtonGroup } from "@ovadev-gmbh/ui-internal";
import { EllipsisIcon } from "lucide-react";

export default function ButtonGroupSize() {
  return (
    <div className="flex flex-col items-start gap-4">
      <ButtonGroup aria-label="Invoice INV-2026-0142">
        <Button variant="outline" size="xs">
          Download PDF
        </Button>
        <Button variant="outline" size="xs">
          Send reminder
        </Button>
        <Button variant="outline" size="icon-xs" aria-label="More invoice actions">
          <EllipsisIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup aria-label="Invoice INV-2026-0142">
        <Button variant="outline" size="sm">
          Download PDF
        </Button>
        <Button variant="outline" size="sm">
          Send reminder
        </Button>
        <Button variant="outline" size="icon-sm" aria-label="More invoice actions">
          <EllipsisIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup aria-label="Invoice INV-2026-0142">
        <Button variant="outline">Download PDF</Button>
        <Button variant="outline">Send reminder</Button>
        <Button variant="outline" size="icon" aria-label="More invoice actions">
          <EllipsisIcon />
        </Button>
      </ButtonGroup>
    </div>
  );
}
