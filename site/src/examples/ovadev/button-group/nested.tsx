import { Button, ButtonGroup } from "@ovadev-gmbh/ui-ovadev";
import { ChevronLeftIcon, ChevronRightIcon, DownloadIcon, LinkIcon } from "lucide-react";

export default function ButtonGroupNested() {
  return (
    <ButtonGroup aria-label="Deployment log">
      <ButtonGroup>
        <Button variant="outline" size="sm">
          <ChevronLeftIcon data-icon="inline-start" />
          Previous
        </Button>
        <Button variant="outline" size="sm">
          Next
          <ChevronRightIcon data-icon="inline-end" />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline" size="icon-sm" aria-label="Copy link to log">
          <LinkIcon />
        </Button>
        <Button variant="outline" size="icon-sm" aria-label="Download log">
          <DownloadIcon />
        </Button>
      </ButtonGroup>
    </ButtonGroup>
  );
}
