import { ArrowRightIcon, KeyIcon, MagnifyingGlassIcon } from "@phosphor-icons/react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@ovadev-gmbh/ui-internal";

export default function InputGroupDemo() {
  return (
    <div className="grid w-full max-w-xl gap-3">
      <InputGroup>
        <InputGroupInput placeholder="Search tenants, invoices, deployments…" />
        <InputGroupAddon>
          <MagnifyingGlassIcon />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <InputGroupText className="text-label-12-mono">312 rows</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput
          className="text-label-13-mono"
          placeholder="ovk_live_…"
          autoComplete="off"
          spellCheck={false}
        />
        <InputGroupAddon>
          <KeyIcon />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <InputGroupButton>
            Verify
            <ArrowRightIcon />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupTextarea placeholder="Incident note: what changed, who was paged, what was rolled back…" />
        <InputGroupAddon align="block-end">
          <InputGroupText className="text-label-12-mono">0 / 500</InputGroupText>
          <InputGroupButton className="ml-auto" variant="default" size="xs">
            Post to timeline
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}
