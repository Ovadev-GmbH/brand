import { Button, ButtonGroup } from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01Icon, ArrowRight01Icon, Download01Icon, PrinterIcon } from "@hugeicons/core-free-icons";

export default function ButtonGroupNested() {
  return (
    <ButtonGroup aria-label="Door list">
      <ButtonGroup>
        <Button variant="outline" size="sm">
          <HugeiconsIcon icon={ArrowLeft01Icon} strokeWidth={2} data-icon="inline-start" />
          Previous day
        </Button>
        <Button variant="outline" size="sm">
          Next day
          <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} data-icon="inline-end" />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline" size="icon-sm" aria-label="Print door list">
          <HugeiconsIcon icon={PrinterIcon} strokeWidth={2} />
        </Button>
        <Button variant="outline" size="icon-sm" aria-label="Download door list">
          <HugeiconsIcon icon={Download01Icon} strokeWidth={2} />
        </Button>
      </ButtonGroup>
    </ButtonGroup>
  );
}
