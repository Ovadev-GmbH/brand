import {
  Button,
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "@ovadev-gmbh/ui-internal";
import { CaretDownIcon, GitBranchIcon } from "@phosphor-icons/react";

export default function ButtonGroupDemo() {
  return (
    <div className="flex w-full max-w-xl flex-wrap items-center gap-3">
      <ButtonGroup>
        <Button variant="outline">1h</Button>
        <Button variant="outline">24h</Button>
        <Button variant="outline">7d</Button>
        <Button variant="outline">30d</Button>
      </ButtonGroup>
      <ButtonGroup>
        <ButtonGroupText>
          <GitBranchIcon />
          main
        </ButtonGroupText>
        <Button variant="outline">Deploy</Button>
        <ButtonGroupSeparator />
        <Button variant="outline" size="icon" aria-label="More deploy options">
          <CaretDownIcon />
        </Button>
      </ButtonGroup>
    </div>
  );
}
