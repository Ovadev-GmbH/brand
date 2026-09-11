import {
  Button,
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { Add01Icon, ArrowRight01Icon, UserGroupIcon } from "@hugeicons/core-free-icons";

export default function ButtonGroupDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <ButtonGroup>
        <Button variant="outline">Lunch</Button>
        <Button variant="outline">Dinner</Button>
        <Button variant="outline">Late</Button>
      </ButtonGroup>
      <ButtonGroup>
        <ButtonGroupText>
          <HugeiconsIcon icon={UserGroupIcon} strokeWidth={2} />
          Guests
        </ButtonGroupText>
        <Button variant="outline" size="icon" aria-label="Add guest">
          <HugeiconsIcon icon={Add01Icon} strokeWidth={2} />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button>Confirm booking</Button>
        <ButtonGroupSeparator />
        <Button size="icon" aria-label="More">
          <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} />
        </Button>
      </ButtonGroup>
    </div>
  );
}
