import { Button, ButtonGroup } from "@ovadev-gmbh/ui-ticketova";
import { CaretLeftIcon, CaretRightIcon, DownloadSimpleIcon, LinkIcon } from "@ovadev-gmbh/ui-ticketova/icons";

export default function ButtonGroupNested() {
  return (
    <ButtonGroup aria-label="Deployment log">
      <ButtonGroup>
        <Button variant="outline" size="sm">
          <CaretLeftIcon data-icon="inline-start" />
          Previous
        </Button>
        <Button variant="outline" size="sm">
          Next
          <CaretRightIcon data-icon="inline-end" />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline" size="icon-sm" aria-label="Copy link to log">
          <LinkIcon />
        </Button>
        <Button variant="outline" size="icon-sm" aria-label="Download log">
          <DownloadSimpleIcon />
        </Button>
      </ButtonGroup>
    </ButtonGroup>
  );
}
