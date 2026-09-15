import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@ovadev-gmbh/ui-ticketova";
import { MagnifyingGlassIcon } from "@ovadev-gmbh/ui-ticketova/icons";

export default function EmptyWithInput() {
  return (
    <Empty className="w-full max-w-md">
      <EmptyHeader>
        <EmptyTitle>Tenant not found</EmptyTitle>
        <EmptyDescription>
          No tenant has the slug <span className="text-copy-13-mono">acme-logistic</span>. It may have been renamed or
          deleted.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <InputGroup>
          <InputGroupAddon>
            <MagnifyingGlassIcon />
          </InputGroupAddon>
          <InputGroupInput placeholder="Search tenants" aria-label="Search tenants" />
        </InputGroup>
      </EmptyContent>
    </Empty>
  );
}
