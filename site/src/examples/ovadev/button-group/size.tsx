import { Button, ButtonGroup } from "@ovadev-gmbh/ui-ovadev";
import { EllipsisIcon } from "lucide-react";

export default function ButtonGroupSize() {
  return (
    <div className="flex flex-col items-start gap-4">
      <ButtonGroup aria-label="Post: TICKETOVA at Türlersee">
        <Button variant="outline" size="xs">
          Preview
        </Button>
        <Button variant="outline" size="xs">
          Publish
        </Button>
        <Button variant="outline" size="icon-xs" aria-label="More post actions">
          <EllipsisIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup aria-label="Post: TICKETOVA at Türlersee">
        <Button variant="outline" size="sm">
          Preview
        </Button>
        <Button variant="outline" size="sm">
          Publish
        </Button>
        <Button variant="outline" size="icon-sm" aria-label="More post actions">
          <EllipsisIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup aria-label="Post: TICKETOVA at Türlersee">
        <Button variant="outline">Preview</Button>
        <Button variant="outline">Publish</Button>
        <Button variant="outline" size="icon" aria-label="More post actions">
          <EllipsisIcon />
        </Button>
      </ButtonGroup>
    </div>
  );
}
